import React from 'react';
import { styled } from 'styled-components';


const Home = () => {
  return (
    <Container>
      <h1>Welcome</h1>
    </Container>
  )
}

const Container = styled.main`
background: #fff;
/* height: 100vh; */

@media (min-width: 700px){
  width: 95%;
  margin: 0 auto;
}
`;

export default Home