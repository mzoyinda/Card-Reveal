import { styled } from "styled-components";

export const Container = styled.main`
  text-align: right;
  margin-top: 40px;
  padding: 24px;

  button {
    width: 170px;
    height: 45px;
    font-size: 14px;
    font-weight: 600;
    background-color: aliceblue;
    border: transparent;
    border-radius: 10px;
  }

  .switch {
    background-color: #023047;
    color: white;
  }

  @media (min-width: 600px) {
    margin-right: 50px;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  margin: 5% auto;
  height: 100%;
  text-align: center;
  @media (min-width: 600px) {
    .displaynote {
    margin-bottom: 10px;
    background: #F0F8FE;
    padding: 10px 0;
    }
    .hidenote {
    display: none;
    }
    width: 480px;
  }
`;

export const Header = styled.section`
  background-color: white;
  padding: 20px;
  padding-bottom: 5px;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
  }
  .btn__container {
    margin-top: 20px;
    button {
      width: 50%;
      max-width: 200px;
      height: 40px;
      font-size: 30px;
      border-radius: 0;
      transition: all 0.2s ease-out;
      &:hover {
        font-size: 32px;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 600px) {
    width: 440px;
    img {
      height: 350px;
    }
  }
`;

export const Ingredients = styled.section`
  max-width: 480px;
  background-color: white;
  text-align: left;
  box-sizing: border-box;
  padding: 24px;
  margin-top: 10px;

  h2,
  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
  }

  ul {
    padding-left: 20px;
    line-height: 30px;
  }
`;
