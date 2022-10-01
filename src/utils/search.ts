import axios from "axios";

export const searchImages = async (q: string) => {
  var config = {
    method: "get",
    url: `https://hub.docker.com/api/content/v1/products/search?page_size=6&q=${q}`,
    headers: {
      Host: "hub.docker.com",
      "Sec-Ch-Ua": '"Not;A=Brand";v="99", "Chromium";v="106"',
      "Sec-Ch-Ua-Mobile": "?0",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.62 Safari/537.36",
      "Content-Type": "application/json",
      "Search-Version": "v3",
      Accept: "application/json",
      "X-Docker-Api-Client": "docker-hub/1882.0.0",
      "Sec-Ch-Ua-Platform": '"Linux"',
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: `https://hub.docker.com/search?q=${q}`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Connection: "close",
    },
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
