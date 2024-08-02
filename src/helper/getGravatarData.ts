export const getGravatarData = async (hash: string) => {
  const data = await fetch(`https://gravatar.com/${hash}.json`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
  const {
    entry: [
      {
        requestHash,
        profileUrl,
        preferredUsername,
        thumbnailUrl,
        photos,
        displayName,
        aboutMe,
        currentLocation,
        accounts,
        profileBackground,
      },
    ],
  } = data;
  return {
    requestHash,
    profileUrl,
    preferredUsername,
    thumbnailUrl,
    photos,
    displayName,
    aboutMe,
    currentLocation,
    accounts,
    profileBackground,
  };
};
