import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const HomeStyle = styled.section`
  justify-content: center;
  height: 100vh;
  min-height: 600px;
  background-image: url("/images/home-bg2.svg");
  background-repeat: no-repeat;
  background-size: cover;

  .home-content {
    margin: 0 auto;
    text-align: center;
  }

  span {
    display: block;
  }

  .fire {
    color: red;
  }

  @media (min-width: 576px) {
    background-image: url("/images/home-bg.svg");

    .home-content {
      margin: 0 110px;
      text-align: left;
    }
  }
`;

const Home = React.forwardRef((props, ref) => {
  return (
    <HomeStyle ref={ref}>
      <div className="home-content">
        <h1 className={`${props.titleBigClass} `}>
          <span className="fadeInElement">Marine Ramillon</span>
        </h1>
        <h2 className={`${props.titleClass} fadeInElement`}>
          <span className="fadeInElement">Développeuse web et mobile</span>
        </h2>

        <a href="/#contact" className={props.btnLinkClass}>
          <Button className={props.btnClass}>Me contacter</Button>
        </a>
      </div>
    </HomeStyle>
  );
});

export default Home;
