import React, { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const MovieScreen = memo(
  ({
    moviesPopular: { results: popResults },
    nowPlaying: { results: nowPlayingResults },
    topRated: { results: topRatedResults },
    upComing: { results: upComingResults },
    latest: { results: latestResults },
    classic: { results: classicResults },
  }) => {
    return (
      <>
        <ContentContainer
          title='인기 영화'
          children={
            popResults &&
            popResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='현재 상영 영화'
          children={
            nowPlayingResults &&
            nowPlayingResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='평점순'
          children={
            topRatedResults &&
            topRatedResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='개봉예정 영화'
          children={
            upComingResults &&
            upComingResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='최신 영화'
          children={
            latestResults &&
            latestResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='추억의 영화'
          children={
            classicResults &&
            classicResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))
          }
        />
      </>
    );
  }
);

export default MovieScreen;
