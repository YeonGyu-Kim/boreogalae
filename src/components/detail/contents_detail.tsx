import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import styles from "./contents_detail.module.css";

type Content = {
  key?: number;
  adult?: boolean;
  backdrop_path?: string;
  genres: [
    {
      id?: string;
      name?: string;
    }
  ];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  last_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  videos?: {
    results: [
      {
        id: string;
        key?: string;
        name?: string;
        site?: string;
        size?: number;
        type?: string;
      }
    ];
  };
  vote_average?: number;
  vote_count?: number;
  runtime?: number;
  episode_run_time?: number;
  number_of_seasons?: number;
};

type Credit = {
  cast: [
    {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      cast_id?: number;
      character?: string;
      credit_id?: string;
      order?: number;
    }
  ];
  crew: [
    {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      credit_id?: string;
      department?: string;
      job?: string;
    }
  ];
};

type Provider = {
  results: {
    KR?: {
      flatrate?: [
        {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
        }
      ];
    };
  };
};

type ContentsID = {
  id: string;
};

const ContentsDetail = memo(({ contents }: any) => {
  const [movieDetail, setMovieDetail] = useState<Content | undefined>();
  const [tvDetail, setTvDetail] = useState<Content | undefined>();
  const [movieCredit, setMovieCredit] = useState<Credit | undefined>();
  const [tvCredit, setTvCredit] = useState<Credit | undefined>();
  const [movieProvider, setMovieProvider] = useState<Provider | undefined>();
  const [tvProvider, setTvProvider] = useState<Provider | undefined>();

  const { id } = useParams<ContentsID>();
  const { pathname } = useLocation();
  const isMovie = pathname.includes("/movie");
  const isTvKids = pathname.includes("/tv") || pathname.includes("/kids");
  const genreLength = movieDetail?.genres?.length || tvDetail?.genres?.length;

  useEffect(() => {
    isMovie &&
      contents
        .movieDetail(id)
        .then((content: Content) => setMovieDetail(content));
  }, [contents, isMovie, id]);

  useEffect(() => {
    isTvKids &&
      contents.tvDetail(id).then((content: Content) => setTvDetail(content));
  }, [contents, isTvKids, id]);

  useEffect(() => {
    isMovie &&
      contents
        .movieCredit(id)
        .then((content: Credit) => setMovieCredit(content));
  }, [contents, isMovie, id]);

  useEffect(() => {
    isTvKids &&
      contents.tvCredit(id).then((content: Credit) => setTvCredit(content));
  }, [contents, isTvKids, id]);

  useEffect(() => {
    isMovie &&
      contents
        .movieProvider(id)
        .then((content: Provider) => setMovieProvider(content));
  }, [contents, isMovie, id]);

  useEffect(() => {
    isTvKids &&
      contents
        .tvProvider(id)
        .then((content: Provider) => setTvProvider(content));
  }, [contents, isTvKids, id]);

  return (
    <section className={styles.detailContainer}>
      <div className={styles.contentTitle}>
        {isMovie ? movieDetail?.title : isTvKids ? tvDetail?.name : null}
      </div>
      <div className={styles.contentsInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w300${
            movieDetail?.poster_path || tvDetail?.poster_path
          }`}
          alt='image'
        />
        <div className={styles.basicInfo}>
          <span className={styles.basicTitle}>기본 정보</span>
          <div className={styles.genreInfo}>
            <span>장르: </span>
            <span>
              {movieDetail?.genres?.map((genre, index) =>
                genreLength && index === movieDetail.genres.length - 1
                  ? genre?.name
                  : `${genre?.name} / `
              ) ||
                tvDetail?.genres?.map((genre, index) =>
                  genreLength && index === tvDetail.genres.length - 1
                    ? genre?.name
                    : `${genre?.name} / `
                )}
            </span>
          </div>
          <div className={styles.releaseInfo}>
            <span>
              {movieDetail ? "개봉일: " : tvDetail ? "방영일: " : null}
            </span>
            <span>{movieDetail?.release_date || tvDetail?.last_air_date}</span>
          </div>
          <div className={styles.voteInfo}>
            <span>평점: </span>
            <span>{movieDetail?.vote_average || tvDetail?.vote_average}</span>
          </div>
          <div className={styles.runtimeInfo}>
            <span>{movieDetail ? "런타임: " : tvDetail ? "시즌: " : null}</span>
            <span>
              {movieDetail
                ? `${movieDetail?.runtime}분`
                : tvDetail
                ? `${tvDetail?.number_of_seasons}`
                : null}
            </span>
          </div>
          {movieProvider?.results?.KR?.flatrate &&
            movieProvider?.results?.KR?.flatrate.map((flat) => (
              <img
                key={flat.provider_id}
                className={styles.logo}
                src={`https://image.tmdb.org/t/p/w300${flat?.logo_path}`}
              />
            ))}
          {tvProvider?.results?.KR?.flatrate &&
            tvProvider?.results?.KR?.flatrate.map((flat) => (
              <img
                key={flat.provider_id}
                className={styles.logo}
                src={`https://image.tmdb.org/t/p/w300${flat?.logo_path}`}
              />
            ))}
        </div>
      </div>
      <div className={styles.description}>
        <span>소개</span>
        <span className={styles.overview}>
          {movieDetail?.overview || tvDetail?.overview}
        </span>
      </div>
      <div>
        {movieDetail
          ? movieDetail?.videos?.results
              .slice(0, 3)
              .map((video) => (
                <iframe
                  className={styles.video}
                  key={video.id}
                  title='video'
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              ))
          : tvDetail
          ? tvDetail?.videos?.results
              .slice(0, 3)
              .map((video) => (
                <iframe
                  className={styles.video}
                  key={video.id}
                  title='video'
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder='0'
                  allowFullScreen
                />
              ))
          : null}
      </div>
      <ul className={styles.creditContainer}>
        {movieCredit &&
          movieCredit.cast.slice(0, 10).map((credit) => (
            <li key={credit.id} className={styles.creditItem}>
              <Link to={`/${credit?.credit_id}`}>
                <img
                  className={styles.creditImg}
                  src={`https://image.tmdb.org/t/p/w300${credit?.profile_path}`}
                  alt='image'
                />
                <span className={styles.name}>{credit?.name}</span>
                <span className={styles.character}>{credit?.character}</span>
              </Link>
            </li>
          ))}
        {tvCredit &&
          tvCredit.cast.slice(0, 10).map((credit) => (
            <li key={credit.id} className={styles.creditItem}>
              <Link to={`/${credit.credit_id}`}>
                <img
                  className={styles.creditImg}
                  src={`https://image.tmdb.org/t/p/w300${credit.profile_path}`}
                  alt='image'
                />
                <span className={styles.name}>{credit?.name}</span>
                <span className={styles.character}>{credit?.character}</span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
});

export default ContentsDetail;
