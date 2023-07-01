type PostCfpParams = {
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
};

const postCfp = async (params: PostCfpParams) => {
  const response = await fetch(
    "https://n48djewxre.execute-api.us-east-1.amazonaws.com/cfp",
    {
      method: "POST",
      body: JSON.stringify(params),
    }
  );

  if (response.status !== 200) {
    return false;
  } else {
    return true;
  }
};

export { postCfp };
