import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import styles from "./contents_detail.module.css";

type Content = {
  key?: number;
  adult?: boolean;
  backdrop_path?: string;
  genres: [
    {
      id: string;
      name: string;
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
  vote_average?: number;
  vote_count?: number;
  runtime?: number;
  episode_run_time?: number;
};

type ContentsID = {
  id: string;
};

const ContentsDetail = memo(({ contents }: any) => {
  const [movieDetail, setMovieDetail] = useState<Content | undefined>(
    undefined
  );
  const [tvDetail, setTvDetail] = useState<Content | undefined>(undefined);

  const { id } = useParams<ContentsID>();
  const { pathname } = useLocation();
  const isMovie = pathname.includes("/movie");
  const isTV = pathname.includes("/tv");
  const genreLength = movieDetail?.genres?.length || tvDetail?.genres?.length;
  console.log(genreLength);

  useEffect(() => {
    isMovie &&
      contents.movieDetail(id).then((content: any) => setMovieDetail(content));
  }, [contents]);

  useEffect(() => {
    isTV && contents.tvDetail(id).then((content: any) => setTvDetail(content));
  }, [contents]);

  return (
    <section className={styles.detailContainer}>
      <div>{isMovie ? movieDetail?.title : isTV ? tvDetail?.name : null}</div>
      <div className={styles.contentsInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w300${
            movieDetail?.poster_path || tvDetail?.poster_path
          }`}
          alt=''
        />
        <div className={styles.basicInfo}>
          <span>기본 정보</span>
          <div>
            <span>장르</span>
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
          <div>
            <span>{movieDetail ? "개봉" : tvDetail ? "방영일" : null}</span>
            <span>{movieDetail?.release_date || tvDetail?.last_air_date}</span>
          </div>
          <div>
            <span>평점</span>
            <span>{movieDetail?.vote_average || tvDetail?.vote_average}</span>
          </div>
          <div>
            <span>런타임</span>
            <span>{movieDetail?.runtime || tvDetail?.episode_run_time}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <span>소개</span>
        <span>{movieDetail?.overview || tvDetail?.overview}</span>
      </div>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${"RxAtuMu_ph4"}`}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          allowTransparency
        />
      </div>
    </section>
  );
});

export default ContentsDetail;
