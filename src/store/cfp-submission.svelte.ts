import { browser } from "$app/environment";
import { getSubmissions, postSubmissions, putSubmissions } from "../network/submissions";
import { tweetLength } from "../utils/tweet";
import { capitalize } from "../utils/capitalize";
import type { TweetStatus } from "../components/Tweet.svelte";

const MAX_TWEET_LENGTH = 280;

export type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const emptyFields = () => ({
  currentSubmissionId: "",
  showSubmitNewEntryButton: false,
  speakerName: "",
  twitterHandler: "",
  type: "",
  track: "",
  title: "",
  description: "",
  duration: "",
  language: "",
  speakerBios: [""],
  tweetBioStatuses: ["ok"] as TweetStatus[],
  speakerSocialMedias: "",
  speakerEmail: "",
  notes: "",
});

export const form = $state(emptyFields());
export const talkTweetStatus = $state<{ value: TweetStatus }>({ value: "ok" });
export const submitState = $state<{ value: SubmitState }>({
  value: { status: "idle" },
});

// Svelte 5 disallows exporting `$derived` from a module, so these are plain
// functions instead: calling them inside a reactive context (template / effect)
// still tracks the underlying `form` state they read.
export const talkTweetPreview = () => {
  const byOrPor = form.language === "only_english" ? "by" : "por";
  const suffix = form.language === "only_english" ? " (in 🇺🇸)" : "";
  const credit = form.twitterHandler || form.speakerName;
  return `${capitalize(form.type)} "${form.title}" ${byOrPor} ${credit}${suffix}\n\n${form.description}`;
};

export const bioTweetPreviews = () =>
  form.speakerBios.map((bio) =>
    form.language === "only_english"
      ? `About the speaker:\n${bio}`
      : `Sobre o palestrante:\n${bio}`,
  );

const bioTweetForSubmit = (bio: string, index: number, count: number) => {
  const suffix = count > 1 ? ` ${index + 1}` : "";
  return form.language === "only_english"
    ? `About the speaker${suffix}:\n${bio}`
    : `Sobre o palestrante${suffix}:\n${bio}`;
};

/** Returns an error message, or null when the form is ready to submit. */
const validate = (): string | null => {
  if (tweetLength(talkTweetPreview()) > MAX_TWEET_LENGTH) {
    return "Talk description exceeds 280 characters";
  }

  const filledBios = form.speakerBios.filter((b) => b.trim());
  for (let i = 0; i < filledBios.length; i++) {
    const preview = bioTweetForSubmit(filledBios[i], i, filledBios.length);
    if (tweetLength(preview) > MAX_TWEET_LENGTH) {
      return `Speaker bio for speaker ${i + 1} exceeds 280 characters`;
    }
  }

  return null;
};

const buildPayload = () => ({
  speakerName: form.speakerName,
  twitterHandler: form.twitterHandler,
  type: form.type,
  track: form.track,
  title: form.title,
  description: form.description,
  duration: Number(form.duration),
  language: form.language,
  speakerBio: form.speakerBios.filter((bio) => bio.trim()).join(" | "),
  speakerSocialMedias: form.speakerSocialMedias,
  speakerEmail: form.speakerEmail,
  notes: form.notes,
});

const updateUrlParam = (id: string | null) => {
  if (!browser) return;
  const url = new URL(window.location.toString());
  if (id) url.searchParams.set("id", id);
  else url.searchParams.delete("id");
  window.history.pushState(null, "", url.toString());
};

export const addSpeaker = () => {
  form.speakerBios = [...form.speakerBios, ""];
  form.tweetBioStatuses = [...form.tweetBioStatuses, "ok"];
};

export const removeSpeaker = (index: number) => {
  if (form.speakerBios.length <= 1) return;
  form.speakerBios = form.speakerBios.filter((_, i) => i !== index);
  form.tweetBioStatuses = form.tweetBioStatuses.filter((_, i) => i !== index);
};

export const setBioTweetStatus = (index: number, status: TweetStatus) => {
  form.tweetBioStatuses[index] = status;
};

export const clearForm = () => {
  Object.assign(form, emptyFields());
  submitState.value = { status: "idle" };
  updateUrlParam(null);
};

export const submit = async (messages: { success: string; error: string }) => {
  const validationError = validate();
  if (validationError) {
    submitState.value = { status: "error", message: validationError };
    return;
  }

  submitState.value = { status: "submitting" };

  const payload = buildPayload();

  if (form.currentSubmissionId) {
    const ok = await putSubmissions({ id: form.currentSubmissionId, ...payload });
    submitState.value = ok
      ? { status: "success", message: messages.success }
      : { status: "error", message: messages.error };
    return;
  }

  const result = await postSubmissions(payload);
  if (!result) {
    submitState.value = { status: "error", message: messages.error };
    return;
  }

  form.showSubmitNewEntryButton = true;
  form.currentSubmissionId = result.id;
  updateUrlParam(result.id);
  submitState.value = { status: "success", message: messages.success };
};

export const loadGivenSubmission = async () => {
  if (!browser) return;
  // One-shot read on mount; no need for SvelteURLSearchParams reactivity here.
  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return;

  form.currentSubmissionId = id;

  const existing = await getSubmissions(id);
  if (!existing) {
    window.alert(
      "We could not load a submission with the given id. Please, report the issue by sending us an email (mambi@gambiconf.dev) or opening an issue on https://github.com/gambiconf/gambiconf.github.io",
    );
    return;
  }

  form.speakerName = existing.speakerName;
  form.twitterHandler = existing.twitterHandler;
  form.type = existing.type;
  form.track = existing.track;
  form.title = existing.title;
  form.description = existing.description;
  form.duration = `${existing.duration}`;
  form.language = existing.language;
  form.speakerBios = existing.speakerBio ? existing.speakerBio.split(" | ") : [""];
  form.tweetBioStatuses = new Array(form.speakerBios.length).fill("ok");
  form.speakerSocialMedias = existing.speakerSocialMedias;
  form.speakerEmail = existing.speakerEmail;
  form.notes = existing.notes;
};
