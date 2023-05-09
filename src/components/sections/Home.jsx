import React from 'react';

import Button from "../UI/Button";
import styled from 'styled-components';

import RocketSvg from '../icons/SVG/RocketSvg';

const HomeStyle = styled.section`
  justify-content: center;
  height: 100vh;

  .rocket-picto {
    display: block;
    margin: auto;
    margin-bottom: 16px;

    @media(min-width: 576px) {
    margin: 0 0 16px 0;
    float: left;
  }
  }
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
        <h1 className={props.titleBigClass}>Marine Ramillon,</h1>
          <h2 className={props.titleClass}>Développeuse web en quête d'opportunités.</h2>
          <RocketSvg className="rocket-picto"/>

      </div>
        <a href="/#contact" className={props.btnLinkClass}>
          <Button className={props.btnClass}>
                Me contacter
          </Button>
        </a>
    </HomeStyle>
  )
});

export default Home;
