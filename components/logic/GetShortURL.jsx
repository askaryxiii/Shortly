export const getShortURL = async () => {
  const data = {
    url: "https://dev.to/rashidshamloo/api-data-fetching-in-react-nextjs-289d",
  };
  try {
    const response = await fetch("https://spoo.me/", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
