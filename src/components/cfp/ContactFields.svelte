<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { form } from "../../store/cfp-submission.svelte"
</script>

<h4><Localized id="cfp--section-contacts" /></h4>

<div class="field">
  <label for="social"><Localized id="cfp--field-social-medias" /></label>
  <textarea
    name="social"
    placeholder="GitHub: macabeus&#013;Stack Overflow: macabeus&#013;..."
    rows="3"
    required
    bind:value={form.speakerSocialMedias}
  ></textarea>
</div>

<div class="field">
  <label for="email"><Localized id="cfp--field-email" /></label>
  <input name="email" type="email" required bind:value={form.speakerEmail} />
</div>

<div class="field">
  <label for="notes"><Localized id="cfp--field-notes" /></label>
  <textarea name="notes" rows="3" bind:value={form.notes}></textarea>
</div>
