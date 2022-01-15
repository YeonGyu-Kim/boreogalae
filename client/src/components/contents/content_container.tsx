import React, { ReactChild } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./content_container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRecoilValue } from "recoil";
import { genreChecked } from "../../atom";

const Contents = styled.div<{ checked: boolean }>`
  margin: 1rem 0.5rem 2rem 0.5rem;
  overflow: hidden;
  margin-left: ${(props) => (props.checked ? "12rem" : "")};
`;

const Title = styled.span`
  font-size: 1.7rem;
  margin-left: 2rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Slider = styled(motion.ul)<{ checked: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.checked ? "felx-start" : "center")};
  margin-top: 1rem;
  height: 100%;
  @media (max-width: 1250px) {
    justify-content: flex-start;
  }
`;

const variants: Variants = {
  hidden: {
    x: 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -5,
  },
};

interface IContentContainerProps {
  title: string;
  children: ReactChild[];
}

const ContentContainer = ({ title, children }: IContentContainerProps) => {
  const [index, setIndex] = useState(0);
  const checked = useRecoilValue(genreChecked);

  const offset = 7;

  const nextSlide = () => {
    if (children) {
      const totalMovies = children.length;
      const maxIndex =
        totalMovies % offset > 3
          ? Math.floor(totalMovies / offset)
          : Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (children) {
      const totalMovies = children.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <AnimatePresence initial={false}>
      <Contents checked={checked}>
        <Title>{title}</Title>
        <div className='listContainer'>
          <Slider
            checked={checked}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='contentsList'
            transition={{ type: "tween" }}
            key={index}
          >
            {children &&
              children
                .slice(offset * index, offset * index + offset)
                .map((result) => result)}
          </Slider>
          <Button>
            <FontAwesomeIcon
              className='btnLeft'
              icon={faChevronLeft}
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              className='btnRight'
              icon={faChevronRight}
              onClick={nextSlide}
            />
          </Button>
        </div>
      </Contents>
    </AnimatePresence>
  );
};

export default ContentContainer;
