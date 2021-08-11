import { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const TvScreen = memo(
  ({
    tvPopular: { results: tvPopResults },
    tvKrPopukar: { results: tvKrPopResults },
    tvTopRated: { results: tvTopRatedResults },
    tvKrLatest: { results: tvKrLatestResults },
  }) => {
    return (
      <>
        <ContentContainer
          title='인기 프로그램'
          children={
            tvPopResults &&
            tvPopResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='한국 인기 프로그램'
          children={
            tvKrPopResults &&
            tvKrPopResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='평점순'
          children={
            tvTopRatedResults &&
            tvTopRatedResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='신규 프로그램'
          children={
            tvKrLatestResults &&
            tvKrLatestResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
      </>
    );
  }
);

export default TvScreen;
