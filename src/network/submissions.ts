type PostSubmissionsParams = {
  speakerName: string;
  twitterHandler: string;
  type: string;
  language: string;
  title: string;
  description: string;
  duration: number;
  speakerBio: string;
  speakerSocialMedias: string;
  speakerEmail: string;
  notes: string;
};

type PostSubmissionResponse = { id: string };

type PutSubmissionResponse = PostSubmissionsParams & { id: string };

type GetSubmissionResponse = PostSubmissionsParams & { id: string };

const getSubmissions = async (id: string) => {
  const response = await fetch(
    `https://n48djewxre.execute-api.us-east-1.amazonaws.com/submissions/${id}`,
  );

  if (response.status !== 200) {
    return false;
  } else {
    const submission = await response.json();
    return submission as GetSubmissionResponse;
  }
};

const postSubmissions = async (params: PostSubmissionsParams) => {
  const response = await fetch(
    "https://n48djewxre.execute-api.us-east-1.amazonaws.com/submissions",
    {
      method: "POST",
      body: JSON.stringify(params),
    },
  );

  if (response.status !== 200) {
    return false;
  } else {
    const body = (await response.json()) as PostSubmissionResponse;
    return body;
  }
};

const putSubmissions = async (params: PutSubmissionResponse) => {
  const response = await fetch(
    `https://n48djewxre.execute-api.us-east-1.amazonaws.com/submissions/${params.id}`,
    {
      method: "PUT",
      body: JSON.stringify(params),
    },
  );

  if (response.status !== 200) {
    return false;
  } else {
    return true;
  }
};

export { getSubmissions, postSubmissions, putSubmissions };
