import axios from "axios";

class ContentsTV {
  key = process.env.REACT_APP_TMDB_API_KEY;
  contents = axios.create({
    baseURL: `https://api.themoviedb.org/3/discover/tv/`,
    params: {
      language: "ko",
      region: "kr",
      page: 1,
    },
  });

  // TV 장르
  async tvPopularActionAdventure() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10759,
        },
      }
    );
    return response.data;
  }

  async tvKrActionAdventure() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 16,
        },
      }
    );
    return response.data;
  }

  async tvKrAnimation() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
      {
        params: {
          with_genres: 16,
        },
      }
    );
    return response.data;
  }

  async tvJpAnimation() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ja`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 35,
        },
      }
    );
    return response.data;
  }

  async tvKrComedy() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=7.7&vote_count.gte=1000`,
      {
        params: {
          with_genres: 80,
        },
      }
    );
    return response.data;
  }

  async tvKrCrime() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
      {
        params: {
          with_genres: 99,
        },
      }
    );
    return response.data;
  }

  async tvKrDocumentary() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 18,
        },
      }
    );
    return response.data;
  }

  async tvKrDrama() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=7.9&vote_count.gte=500`,
      {
        params: {
          with_genres: 10751,
        },
      }
    );
    return response.data;
  }

  async tvKrFamily() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 9648,
        },
      }
    );
    return response.data;
  }

  async tvKrMystery() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&with_original_language=en`,
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
      `?api_key=${this.key}&vote_average.gte=8&vote_count.gte=1000`,
      {
        params: {
          with_genres: 10765,
        },
      }
    );
    return response.data;
  }

  async tvKrSfFantasy() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
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
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=300`,
      {
        params: {
          with_genres: 10768,
        },
      }
    );
    return response.data;
  }

  async tvKrWar() {
    const response = await this.contents.get(
      `?api_key=${this.key}&with_original_language=ko`,
      {
        params: {
          with_genres: 10768,
        },
      }
    );
    return response.data;
  }

  async tvKrPopular() {
    const response = await this.contents.get(
      `?api_key=${this.key}&sort_by=popularity.desc&with_original_language=ko`,
      {
        params: {
          with_genres: 10768,
        },
      }
    );
    return response.data;
  }

  async tvKrLatest() {
    const response = await this.contents.get(
      `?api_key=${this.key}&first_air_date.gte=2021-07-01&with_original_language=ko`
    );
    return response.data;
  }

  // kids
  async tvKidsPopular() {
    const response = await this.contents.get(
      `?api_key=${this.key}&vote_average.gte=7&vote_count.gte=450`,
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
      `?api_key=${this.key}&first_air_date.gte=2021-05-01`,
      {
        params: {
          with_genres: 10762,
        },
      }
    );
    return response.data;
  }
}

export default ContentsTV;
