import React from "react";
import { styled } from "styled-components";
import food from "./assets/jollof.jpg";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <img src={food} alt="food" />
          <div className="btn__container">
            <button>
              <PiArrowFatLinesLeftFill />
            </button>
            <button>
              <PiArrowFatLinesRightFill />
            </button>
          </div>
        </Header>
        <Ingredients>
          {/* <h2> </h2> */}
          <h3>Ingredients Needed for Jollof Rice</h3>
          <ul>
            <li>2 cups long-grain parboiled rice</li>
            <li>1/4 cup vegetable oil</li>
            <li>1 onion, chopped</li>
            <li>3-4 tomatoes, blended</li>
            <li>1 red bell pepper, blended</li>
            <li>1 green bell pepper, chopped</li>
            <li>1 cup tomato paste</li>
            <li>2 teaspoons curry powder</li>
            <li>2 teaspoons thyme</li>
            <li>1 teaspoon smoked paprika</li>
            <li>1 teaspoon white pepper</li>
            <li>1 teaspoon ground ginger</li>
          </ul>
        </Ingredients>
      </Wrapper>
    </Container>
  );
};

const Container = styled.main``;

const Wrapper = styled.section`
  width: max-content;
  margin: 10% auto;
  height: 100%;
`;

const Header = styled.section`
  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
  }
  .btn__container {
    button {
      width: 200px;
      height: 40px;
      font-size: 30px;
    }
    img {
      width: 150px;
      object-fit: cover;
    }
  }
`;

const Ingredients = styled.section`
  width: 400px;
  background-color: white;
  box-sizing: border-box;
  height: 500px;
  padding: 24px;
  margin-top: 10px;

  h2, h3{
    margin-bottom: 10px;
  }

  ul{
    padding-left: 20px;
    line-height: 30px;
  }
`;

export default Home;
