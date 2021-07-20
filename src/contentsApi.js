import axios from "axios";

class Contents {
  constructor(key) {
    this.contents = axios.create({
      baseURL: "https://api.themoviedb.org/3/",
      params: {
        api_key: key,
        language: "ko",
        region: "kr",
        page: 1,
      },
    });
  }

  async moviePopular() {
    const response = await this.contents.get("movie/popular");
    return response.data;
  }

  async tvPopular() {
    const response = await this.contents.get("tv/popular");
    return response.data;
  }
}

export default Contents;
