export const getShortURL = async (myUrl) => {
  const url = myUrl;

  try {
    const res = await fetch("https://spoo.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        url: url,
      }),
    });
    const { short_url } = await res.json();
    return short_url;
  } catch (error) {
    return error;
  }
};
