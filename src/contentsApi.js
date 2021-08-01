import axios from "axios";
import { KeyObject } from "crypto";

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

  // movie

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

  // 영화 장르
  async moviePopularActionAdventure() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000&with_genres=28,12`
    );
    return response.data;
  }

  async moviePopularAnimation() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 16,
        },
      }
    );
    return response.data;
  }

  async moviePopularComedy() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 35,
        },
      }
    );
    return response.data;
  }

  async moviePopularCrimeThriller() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000&with_genres=80,53`
    );
    return response.data;
  }

  async moviePopularDocumentary() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
      {
        params: {
          with_genres: 99,
        },
      }
    );
    return response.data;
  }

  async moviePopularDrama() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 18,
        },
      }
    );
    return response.data;
  }

  async moviePopularFamily() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000&`,
      {
        params: {
          with_genres: 10751,
        },
      }
    );
    return response.data;
  }

  async moviePopularSfFantasy() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=1000&with_genres=14,878`
    );
    return response.data;
  }

  async moviePopularHistory() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000&`,
      {
        params: {
          with_genres: 36,
        },
      }
    );
    return response.data;
  }

  async moviePopularHorror() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.5&vote_count.gte=1000&`,
      {
        params: {
          with_genres: 27,
        },
      }
    );
    return response.data;
  }

  async moviePopularMusic() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.2&vote_count.gte=1000&`,
      {
        params: {
          with_genres: 10402,
        },
      }
    );
    return response.data;
  }

  async moviePopularMystery() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 9648,
        },
      }
    );
    return response.data;
  }

  async moviePopularRomance() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10749,
        },
      }
    );
    return response.data;
  }

  async moviePopularWar() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10752,
        },
      }
    );
    return response.data;
  }

  async moviePopularWestern() {
    const response = await this.contents.get(
      `discover/movie/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=1000`,
      {
        params: {
          with_genres: 37,
        },
      }
    );
    return response.data;
  }

  //tv
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

  // TV 장르
  async tvPopularActionAdventure() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10759,
        },
      }
    );
    return response.data;
  }

  async tvPopularAnimation() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 16,
        },
      }
    );
    return response.data;
  }

  async tvPopularComedy() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 35,
        },
      }
    );
    return response.data;
  }

  async tvPopularCrime() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000`,
      {
        params: {
          with_genres: 80,
        },
      }
    );
    return response.data;
  }

  async tvPopularDocumentary() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
      {
        params: {
          with_genres: 99,
        },
      }
    );
    return response.data;
  }

  async tvPopularDrama() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 18,
        },
      }
    );
    return response.data;
  }

  async tvPopularFamily() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000&`,
      {
        params: {
          with_genres: 10751,
        },
      }
    );
    return response.data;
  }

  async tvPopularMystery() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 9648,
        },
      }
    );
    return response.data;
  }

  async tvKoreanReality() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&with_original_language=ko`,
      {
        params: {
          with_genres: 10764,
        },
      }
    );
    return response.data;
  }

  async tvEnReality() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&with_original_language=en`,
      {
        params: {
          with_genres: 10764,
        },
      }
    );
    return response.data;
  }

  async tvPopularSfFantasy() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10765,
        },
      }
    );
    return response.data;
  }

  async tvPopularWar() {
    const response = await this.contents.get(
      `discover/tv/?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
      {
        params: {
          with_genres: 10768,
        },
      }
    );
    return response.data;
  }

  // kids
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

  // movie & tv search
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
