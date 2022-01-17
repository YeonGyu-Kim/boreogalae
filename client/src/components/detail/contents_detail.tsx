import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { kakaoApi } from "../../contentsApi/kakaoApi";
import styles from "./contents_detail.module.css";
import CommentsAll from "../comments/comments_all";
import CommentsEnroll from "../comments/comments_enroll";
import { userComment } from "../../contentsApi/commentApi";
import styled from "styled-components";
import { useQuery } from "react-query";

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

type User = {
  userId?: number;
  nickname?: string;
  url?: string;
};

type Comment = [
  {
    id: number;
    text: string;
    createdAt: string;
    userId: number;
    nickname: string;
    url: string;
    contentsId: number;
    voteCount: number;
    p_id: number;
  }
];

type Reply = [
  {
    id: number;
    text: string;
    createdAt: string;
    userId: number;
    nickname: string;
    url: string;
    contentsId: number;
    voteCount: number;
    p_id: number;
  }
];

type Props = {
  bgImage: string;
};

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  background-image: url(${(props: Props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
`;

const ContentsDetail = memo(({ contents, commentService }: any) => {
  const [user, setUser] = useState<User | undefined>();
  const [comments, setComments] = useState<Comment | any>();
  const [replies, setReplies] = useState<Comment | any>();

  const { id } = useParams<ContentsID>();
  const { pathname } = useLocation();
  const isMovie = pathname.includes("/movie");
  const isTvKids = pathname.includes("/tv") || pathname.includes("/kids");

  const { isLoading: movieDetailLoading, data: movieDetail } =
    useQuery<Content>(["movieDetail", id], () => contents.movieDetail(id));

  const { isLoading: tvDetailLoading, data: tvDetail } = useQuery<Content>(
    ["tvDetail", id],
    () => contents.tvDetail(id)
  );

  const { isLoading: movieCreditlLoading, data: movieCredit } =
    useQuery<Credit>(["movieCredit", id], () => contents.movieCredit(id));

  const { isLoading: tvCreditlLoading, data: tvCredit } = useQuery<Credit>(
    ["tvCredit", id],
    () => contents.tvCredit(id)
  );

  const { isLoading: movieProviderlLoading, data: movieProvider } =
    useQuery<Provider>(["movieProvider", id], () => contents.movieProvider(id));

  const { isLoading: tvProviderlLoading, data: tvProvider } =
    useQuery<Provider>(["tvProvider", id], () => contents.tvProvider(id));

  const genreLength = movieDetail?.genres?.length || tvDetail?.genres?.length;

  useEffect(() => {
    kakaoApi.kakaoMe().then((me) => setUser(me));
  }, []);

  useEffect(() => {
    userComment.getComment().then((comments) => setComments(comments));

    const stopSyncCreateComment = commentService.onSyncCreateComment(
      (comment: any) => onCreatedComment(comment)
    );

    const stopSyncCreateReply = commentService.onSyncCreateReply(
      (comment: any) => onCreatedReply(comment)
    );

    const stopSyncDelete = commentService.onSyncDelete((comment: any) =>
      onDelete(comment)
    );

    const stopSyncUpdate = commentService.onSyncUpdate((comment: any) =>
      onUpdated(comment)
    );

    return () => {
      stopSyncCreateComment();
      stopSyncCreateReply();
      stopSyncDelete();
      stopSyncUpdate();
    };
  }, [commentService]);

  const onCreatedComment = (comment: any) => {
    setComments((comments: Comment) => [comment, ...comments]);
  };

  const onCreatedReply = (comment: any) => {
    setComments((comments: Comment) => comments.concat(comment));
    console.log(comments);
  };

  const onUpdated = (comment: any) => {
    setComments((comments: Comment) =>
      comments.map((item) => (item.id === comment.id ? comment : item))
    );
  };

  const onDelete = (comment: any) => {
    console.log(comment);
    setComments((comments: Comment) =>
      comments?.filter((item) => item.id !== comment.id)
    );
  };

  return (
    <>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${
          isMovie && movieDetail
            ? movieDetail?.backdrop_path
            : tvDetail?.backdrop_path
        }`}
      />
      <section className={styles.detailContainer}>
        <div className={styles.contentTitle}>
          {isMovie ? movieDetail?.title : isTvKids ? tvDetail?.name : null}
        </div>
        <div className={styles.contentsInfo}>
          <img
            className={styles.poster}
            width='300px'
            src={`https://image.tmdb.org/t/p/w300${
              isMovie && movieDetail
                ? movieDetail?.poster_path
                : tvDetail?.poster_path
            }`}
          />
          <div className={styles.basicInfo}>
            <span className={styles.basicTitle}>기본 정보</span>
            <div className={styles.genreInfo}>
              <span>장르: </span>
              <span>
                {isMovie && movieDetail
                  ? movieDetail?.genres?.map((genre, index) =>
                      genreLength && index === movieDetail.genres.length - 1
                        ? genre?.name
                        : `${genre?.name} / `
                    )
                  : tvDetail?.genres?.map((genre, index) =>
                      genreLength && index === tvDetail.genres.length - 1
                        ? genre?.name
                        : `${genre?.name} / `
                    )}
              </span>
            </div>
            <div className={styles.releaseInfo}>
              <span>{isMovie ? "개봉일: " : "방영일: "}</span>
              <span>
                {isMovie && movieDetail
                  ? movieDetail?.release_date
                  : tvDetail?.last_air_date}
              </span>
            </div>
            <div className={styles.voteInfo}>
              <span>평점: </span>
              <span>
                {isMovie && movieDetail
                  ? movieDetail?.vote_average
                  : tvDetail?.vote_average}
              </span>
            </div>
            <div className={styles.runtimeInfo}>
              <span>{isMovie ? "런타임: " : "시즌: "}</span>
              <span>
                {isMovie && movieDetail
                  ? `${movieDetail?.runtime}분`
                  : tvDetail
                  ? `${tvDetail?.number_of_seasons}`
                  : null}
              </span>
            </div>
            <div className={styles.provider}>
              {isMovie && movieProvider
                ? movieProvider.results?.KR?.flatrate?.map((flat) => (
                    <a
                      target='_blank'
                      href={
                        flat.provider_id === 8
                          ? `https://www.netflix.com/browse`
                          : flat.provider_id === 356
                          ? `https://www.wavve.com`
                          : flat.provider_id === 97
                          ? `https://watcha.com/home`
                          : flat.provider_id === 337
                          ? `https://www.disneyplus.com/ko-kr`
                          : flat.provider_id === 119
                          ? `https://www.primevideo.com/ref=atv_nb_logo?language=ko_KR`
                          : ""
                      }
                    >
                      <img
                        key={flat.provider_id}
                        className={styles.logo}
                        src={`https://image.tmdb.org/t/p/w300${flat?.logo_path}`}
                      />
                    </a>
                  ))
                : !isMovie && tvProvider
                ? tvProvider?.results?.KR?.flatrate?.map((flat) => (
                    <a
                      target='_blank'
                      href={
                        flat.provider_id === 8
                          ? `https://www.netflix.com/browse`
                          : flat.provider_id === 356
                          ? `https://www.wavve.com`
                          : flat.provider_id === 97
                          ? `https://watcha.com/home`
                          : flat.provider_id === 337
                          ? `https://www.disneyplus.com/ko-kr`
                          : flat.provider_id === 119
                          ? `https://www.primevideo.com/ref=atv_nb_logo?language=ko_KR`
                          : ""
                      }
                    >
                      <img
                        key={flat.provider_id}
                        className={styles.logo}
                        src={`https://image.tmdb.org/t/p/w300${flat?.logo_path}`}
                      />
                    </a>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <span>소개</span>
          <span className={styles.overview}>
            {isMovie ? movieDetail?.overview : tvDetail?.overview}
          </span>
        </div>
        <div className={styles.videoContainer}>
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
          {movieCredit && isMovie
            ? movieCredit.cast.slice(0, 25).map((credit) => (
                <li key={credit.id} className={styles.creditItem}>
                  <Link to={`/person/${credit?.id}`}>
                    <img
                      className={styles.creditImg}
                      src={
                        credit?.profile_path
                          ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
                          : "/images/person.png"
                      }
                      alt='image'
                    />
                    <div className={styles.nameContainer}>
                      <span className={styles.name}>{credit?.name}</span>
                      <span className={styles.character}>
                        {credit?.character}
                      </span>
                    </div>
                  </Link>
                </li>
              ))
            : tvCredit && !isMovie
            ? tvCredit.cast.slice(0, 25).map((credit) => (
                <li key={credit.id} className={styles.creditItem}>
                  <Link to={`/person/${credit?.id}`}>
                    <img
                      className={styles.creditImg}
                      src={
                        credit?.profile_path
                          ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
                          : "/images/person.png"
                      }
                      alt='img'
                    />
                    <div className={styles.nameContainer}>
                      <span className={styles.name}>{credit?.name}</span>
                      <span className={styles.character}>
                        {credit?.character?.split("/")[0]}
                      </span>
                      <span className={styles.character}>
                        {credit?.character?.split("/")[1]}
                      </span>
                    </div>
                  </Link>
                </li>
              ))
            : null}
        </ul>
        <CommentsEnroll user={user} />
        <ul className={styles.commentContainer}>
          {comments?.map((comment: any) => (
            <CommentsAll
              key={comment.id}
              comment={comment}
              user={user}
              replies={replies}
            />
          ))}
        </ul>
      </section>
    </>
  );
});

export default ContentsDetail;
