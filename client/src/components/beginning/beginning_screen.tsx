import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  padding: 2rem;
  font-size: 2rem;
  margin-left: 2rem;
  color: #bd42f5;
  text-shadow: pink 1px 0 10px;
`;

const Image = styled.img`
  width: 8rem;
  height: 8rem;
`;

const Title = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Category = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 1px solid white;
  border-radius: 10%;
  margin: 1rem;
`;

const Button = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 80vh;
  a {
    &:hover {
      color: #bd42f5;
      ${Category} {
        border-color: #bd42f5;
      }
    }
  }
`;

const BeginningScreen = () => {
  return (
    <div>
      <Home>보러갈래?</Home>
      <Button>
        <Link to='/movie'>
          <Category>
            <Image src='/images/movie.png' />
          </Category>
          <Title>Movie</Title>
        </Link>
        <Link to='/tv'>
          <Category>
            <Image src='/images/tv.png' />
          </Category>
          <Title>TV</Title>
        </Link>
        <Link to='/kids'>
          <Category>
            <Image src='/images/kids.png' />
          </Category>
          <Title>Kids</Title>
        </Link>
      </Button>
    </div>
  );
};

export default BeginningScreen;
