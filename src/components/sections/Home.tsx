import React, { ForwardedRef } from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface HomeProps {
  titleBigClass: string;
  titleClass: string;
  btnLinkClass: string;
  btnClass: string;
  projectsClass: string;
}

const HomeStyle = styled.section`
  justify-content: center;
  height: 90vh;
  min-height: 600px;
  background-image: url("/images/home-bg2.svg");
  background-repeat: no-repeat;
  background-size: cover;

  .home-content {
    margin: 0 auto;
  }

  span {
    display: block;
  }

  .fire {
    color: red;
  }

  @media (min-width: 576px) {
    .home-content {
      margin: 60px 0 0 100px;
      text-align: left;
    }
  }
`;

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  ({ ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    useGSAP(() =>
      gsap.to("h2", {
        duration: 3,
      })
    );
    return (
      <HomeStyle ref={ref}>
        <div className="home-content">
          <h1 className={`${props.titleBigClass} `}>Marine Ramillon</h1>
          <h2 className={`${props.titleClass}`}>Développeuse web et mobile</h2>

          <a href="/#contact" className={props.btnLinkClass}>
            <Button className={props.btnClass}>Me contacter</Button>
          </a>
        </div>
      </HomeStyle>
    );
  }
);

export default Home;
