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

  // 영화
  async moviePopular() {
    const response = await this.contents.get("movie/popular");
    return response.data;
  }

  async movieTopRated() {
    const response = await this.contents.get("movie/top_rated");
    return response.data;
  }

  async movieUpComing() {
    const response = await this.contents.get("movie/upcoming");
    return response.data;
  }

  async movieNowPlaying() {
    const response = await this.contents.get("movie/now_playing");
    return response.data;
  }

  async movieDetail(id) {
    const response = await this.contents.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    });
    return response.data;
  }

  async movieCredit(id) {
    const response = await this.contents.get(`movie/${id}/credits`);
    return response.data;
  }

  // TV
  async tvPopular() {
    const response = await this.contents.get("tv/popular");
    return response.data;
  }

  async tvTopRated() {
    const response = await this.contents.get("tv/top_rated");
    return response.data;
  }

  async tvDetail(id) {
    const response = await this.contents.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    });
    return response.data;
  }

  async tvCredit(id) {
    const response = await this.contents.get(`tv/${id}/credits`);
    return response.data;
  }

  // search
  async movieSearch(query) {
    const response = await this.contents.get("search/movie", {
      params: {
        query,
      },
    });
    return response.data;
  }

  async tvSearch(query) {
    const response = await this.contents.get("search/tv", {
      params: {
        query,
      },
    });
    return response.data;
  }
}

export default Contents;
