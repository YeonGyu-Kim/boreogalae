import axios from "axios";

class ContentsMovieGenre {
  key = process.env.REACT_APP_TMDB_API_KEY;
  contents = axios.create({
    baseURL: `https://api.themoviedb.org/3/discover/movie/`,
    params: {
      language: "ko",
      region: "kr",
      page: 1,
    },
  });

  // 영화 장르
  async moviePopularActionAdventure() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000&with_genres=28,12`
    );
    return response.data;
  }

  async moviePopularAnimation() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000&with_genres=80,53`
    );
    return response.data;
  }

  async moviePopularDocumentary() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000&`,
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
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=1000&with_genres=14,878`
    );
    return response.data;
  }

  async moviePopularHistory() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000&`,
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
      `?api_key=${this.key}&vote_average.gte=7.5&vote_count.gte=1000&`,
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
      `?api_key=${this.key}&vote_average.gte=7.2&vote_count.gte=1000&`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000`,
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
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=1000`,
      {
        params: {
          with_genres: 37,
        },
      }
    );
    return response.data;
  }

  async movieClassic() {
    const response = await this.contents.get(
      `?api_key=${this.key}&sort_by=popularity.desc&release_date.lte=2004-01-01`
    );
    return response.data;
  }
}

export default ContentsMovieGenre;
