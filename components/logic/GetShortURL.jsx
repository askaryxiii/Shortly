import { axios } from "@/externals/imports";

export const getShortURL = async (myurl) => {
  const { data } = await axios({
    method: "post",
    url: "https://spoo.me/",
    data: { url: myurl },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });
  const { short_url } = data;

  return short_url;
};
