import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./content_container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Contents = styled.div`
  margin: 1rem 0.5rem 2rem 0.5rem;
  overflow: hidden;
`;

const UL = styled.ul`
  display: flex;
  margin-top: 1rem;
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

const ContentContainer = ({ title, children }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = (event) => {
    const slide = event.nativeEvent.path[2].children[0];
    setCurrent(current < 1 ? 3 : current - 1);
    slide.classList.remove(`next${current}`);
    slide.classList.add(`prev${current - 1}`);
    slide.classList.remove(`prev${current}`);

    if (current === 0) {
      slide.classList.add(`prev${current + 3}`);
      slide.classList.remove(`prev${current - 1}`);
    }

    if (current === 1) {
      slide.classList.remove(`prev${current - 1}`);
    }
  };

  const nextSlide = (event) => {
    const slide = event.nativeEvent.path[2].children[0];
    setCurrent(current === 3 ? current - 3 : current + 1);
    slide.classList.remove(`prev${current}`);
    slide.classList.add(`next${current + 1}`);
    slide.classList.remove(`next${current}`);
    if (current === 3) {
      slide.classList.remove(`next${current + 1}`);
    }
  };

  return (
    <Contents>
      <Title>{title}</Title>
      <div className='listContainer'>
        <ul className='contentsList'>{children}</ul>
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
  );
};

export default ContentContainer;
