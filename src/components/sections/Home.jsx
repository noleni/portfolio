import React from 'react';

import Button from "../UI/Button";
import styled from 'styled-components';

const HomeStyle = styled.section`
  justify-content: center;
  height: 100vh;
`

const HomesGreetingStyles = styled.p`
  @media(max-width: 576px) {
    display : none;
  }
`;

const Home = React.forwardRef((props, ref) => {
  return (
    <HomeStyle ref={ref}>
      <div>
        <HomesGreetingStyles>Bonjour, je suis</HomesGreetingStyles>
        <h1 className={props.h1Class}>Marine Ramillon,</h1>
        <h2 className={props.h2Class}>Développeuse web en quête d'opportunités.</h2>
      </div>
      <Button className={props.btnClass}><a href="/#contact">Me contacter</a></Button>
    </HomeStyle>
  )
});

export default Home;
