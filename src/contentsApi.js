import axios from "axios";

class Contents {
  key = process.env.REACT_APP_TMDB_API_KEY;
  contents = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      language: "ko",
      region: "kr",
      page: 1,
    },
  });

  async moviePopular() {
    const response = await this.contents.get("movie/popular", {
      params: {
        api_key: this.key,
      },
    });
    return response.data;
  }

  async movieDetail(id) {
    const response = await this.contents.get(`movie/${id}`, {
      params: {
        api_key: this.key,
        append_to_response: "videos",
      },
    });
    return response.data;
  }

  async tvDetail(id) {
    const response = await this.contents.get(`tv/${id}`, {
      params: {
        api_key: this.key,
        append_to_response: "videos",
      },
    });
    return response.data;
  }

  async tvPopular() {
    const response = await this.contents.get("tv/popular", {
      params: {
        api_key: this.key,
      },
    });
    return response.data;
  }

  async tvKidsPopular() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=450`,
      {
        params: {
          with_genres: 10762,
        },
      }
    );
    return response.data;
  }

  async tvKidsLatest() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&first_air_date.gte=2021-05-01`,
      {
        params: {
          with_genres: 10762,
        },
      }
    );
    return response.data;
  }

  async movieSearch(query) {
    const response = await this.contents.get("search/movie", {
      params: {
        api_key: this.key,
        query,
      },
    });
    return response.data;
  }

  async tvSearch(query) {
    const response = await this.contents.get("search/tv", {
      params: {
        api_key: this.key,
        query,
      },
    });
    return response.data;
  }
}

export default Contents;
