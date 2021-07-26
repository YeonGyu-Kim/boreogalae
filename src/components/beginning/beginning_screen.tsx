import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  padding: 2rem;
  font-size: 2rem;
`;

const Button = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  font-size: 2rem;
`;

const Category = styled.li`
  padding: 1em;
  border: 1px solid black;
`;

const BeginningScreen = () => {
  return (
    <div>
      <Home>보러갈래?</Home>
      <Button>
        <Link to='/movie'>
          <Category>Movie</Category>
        </Link>
        <Link to='/tv'>
          <Category>TV</Category>
        </Link>
        <Link to='/kids'>
          <Category>Kids</Category>
        </Link>
      </Button>
    </div>
  );
};

export default BeginningScreen;
