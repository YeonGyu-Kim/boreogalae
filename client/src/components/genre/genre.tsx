import { useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { genreChecked } from "../../atom";
import "./genre.css";
import styles from "./genre.module.css";

const GenreBtn = styled.span<{ checked: boolean }>`
  color: ${(props) => (props.checked ? "#bd42f5" : "white")};
`;

const GenreBar = styled.ul`
  display: block;
  position: fixed;
  width: 10rem;
  height: 85vh;
  overflow-y: auto;
  background-color: #3b3e40;
  z-index: 3;
`;

const Genre = ({ location }: RouteComponentProps) => {
  const [checked, setChecked] = useRecoilState(genreChecked);
  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");

  const checkedActionAdventure =
    location.pathname.includes("/action-adventure");
  const checkedAnimation = location.pathname.includes("/animation");
  const checkedComedy = location.pathname.includes("/comedy");
  const checkedCrimThriller = location.pathname.includes("/crime");
  const checkedDocumentary = location.pathname.includes("/documentary");
  const checkedDrama = location.pathname.includes("/drama");
  const checkedFamily = location.pathname.includes("/family");
  const checkedSfFantasy = location.pathname.includes("/sf-fantasy");
  const checkedHistory = location.pathname.includes("/history");
  const checkedHorror = location.pathname.includes("/horror");
  const checkedMusic = location.pathname.includes("/music");
  const checkedMystery = location.pathname.includes("/mystery");
  const checkedRomance = location.pathname.includes("/romance");
  const checkedWar = location.pathname.includes("/war");
  const checkedWestern = location.pathname.includes("/western");
  const checkedReality = location.pathname.includes("/reality");

  const showGenre = () => {
    setChecked((checked) => !checked);
  };

  return (
    <section className='genre-container'>
      {location.pathname === "/movie" || movieGenre ? (
        <div className='genre-bar'>
          <span className='genre-title'>??????</span>
          <GenreBtn checked={checked} className='genre-btn' onClick={showGenre}>
            ??????
          </GenreBtn>
        </div>
      ) : location.pathname === "/tv" || tvGenre ? (
        <div className='genre-bar'>
          <span className='genre-title'>TV????????????</span>
          <GenreBtn checked={checked} className='genre-btn' onClick={showGenre}>
            ??????
          </GenreBtn>
        </div>
      ) : location.pathname === "/kids" ? (
        <div className='genre-bar'>
          <span className='genre-title'>??????</span>
        </div>
      ) : null}
      {(location.pathname === "/movie" || movieGenre) &&
        (checked ? (
          <GenreBar className='genre'>
            <Link to='/movie-genre/action-adventure'>
              <li
                className={`${styles.genre_detail} ${
                  checkedActionAdventure && styles.checked
                }`}
              >
                ??????/??????
              </li>
            </Link>
            <Link to='/movie-genre/animation'>
              <li
                className={`${styles.genre_detail} ${
                  checkedAnimation && styles.checked
                }`}
              >
                ???????????????
              </li>
            </Link>
            <Link to='/movie-genre/comedy'>
              <li
                className={`${styles.genre_detail} ${
                  checkedComedy && styles.checked
                }`}
              >
                ?????????
              </li>
            </Link>
            <Link to='/movie-genre/crime-thriller'>
              <li
                className={`${styles.genre_detail} ${
                  checkedCrimThriller && styles.checked
                }`}
              >
                ??????/?????????
              </li>
            </Link>
            <Link to='/movie-genre/documentary'>
              <li
                className={`${styles.genre_detail} ${
                  checkedDocumentary && styles.checked
                }`}
              >
                ???????????????
              </li>
            </Link>
            <Link to='/movie-genre/drama'>
              <li
                className={`${styles.genre_detail} ${
                  checkedDrama && styles.checked
                }`}
              >
                ?????????
              </li>
            </Link>
            <Link to='/movie-genre/family'>
              <li
                className={`${styles.genre_detail} ${
                  checkedFamily && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/movie-genre/sf-fantasy'>
              <li
                className={`${styles.genre_detail} ${
                  checkedSfFantasy && styles.checked
                }`}
              >
                SF/?????????
              </li>
            </Link>
            <Link to='/movie-genre/history'>
              <li
                className={`${styles.genre_detail} ${
                  checkedHistory && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/movie-genre/horror'>
              <li
                className={`${styles.genre_detail} ${
                  checkedHorror && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/movie-genre/music'>
              <li
                className={`${styles.genre_detail} ${
                  checkedMusic && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/movie-genre/mystery'>
              <li
                className={`${styles.genre_detail} ${
                  checkedMystery && styles.checked
                }`}
              >
                ????????????
              </li>
            </Link>
            <Link to='/movie-genre/romance'>
              <li
                className={`${styles.genre_detail} ${
                  checkedRomance && styles.checked
                }`}
              >
                ?????????
              </li>
            </Link>
            <Link to='/movie-genre/war'>
              <li
                className={`${styles.genre_detail} ${
                  checkedWar && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/movie-genre/western'>
              <li
                className={`${styles.genre_detail} ${
                  checkedWestern && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
          </GenreBar>
        ) : null)}
      {(location.pathname === "/tv" || tvGenre) &&
        (checked ? (
          <GenreBar className='genre'>
            <Link to='/tv-genre/action-adventure'>
              <li
                className={`${styles.genre_detail} ${
                  checkedActionAdventure && styles.checked
                }`}
              >
                ??????/????????????
              </li>
            </Link>
            <Link to='/tv-genre/animation'>
              <li
                className={`${styles.genre_detail} ${
                  checkedAnimation && styles.checked
                }`}
              >
                ???????????????
              </li>
            </Link>
            <Link to='/tv-genre/comedy'>
              <li
                className={`${styles.genre_detail} ${
                  checkedComedy && styles.checked
                }`}
              >
                ?????????
              </li>
            </Link>
            <Link to='/tv-genre/crime'>
              <li
                className={`${styles.genre_detail} ${
                  checkedCrimThriller && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/tv-genre/documentary'>
              <li
                className={`${styles.genre_detail} ${
                  checkedDocumentary && styles.checked
                }`}
              >
                ???????????????
              </li>
            </Link>
            <Link to='/tv-genre/drama'>
              <li
                className={`${styles.genre_detail} ${
                  checkedDrama && styles.checked
                }`}
              >
                ?????????
              </li>
            </Link>
            <Link to='/tv-genre/family'>
              <li
                className={`${styles.genre_detail} ${
                  checkedFamily && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/tv-genre/reality'>
              <li
                className={`${styles.genre_detail} ${
                  checkedReality && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
            <Link to='/tv-genre/mystery'>
              <li
                className={`${styles.genre_detail} ${
                  checkedMystery && styles.checked
                }`}
              >
                ????????????
              </li>
            </Link>
            <Link to='/tv-genre/sf-fantasy'>
              <li
                className={`${styles.genre_detail} ${
                  checkedSfFantasy && styles.checked
                }`}
              >
                SF/?????????
              </li>
            </Link>
            <Link to='/tv-genre/war'>
              <li
                className={`${styles.genre_detail} ${
                  checkedWar && styles.checked
                }`}
              >
                ??????
              </li>
            </Link>
          </GenreBar>
        ) : null)}
    </section>
  );
};

export default withRouter(Genre);
