import TechTag from "./icons/TechTag/TechTag";
import ReactSvg from "./icons/SVG/React";
import JavascriptSvg from "./icons/SVG/JavaScriptSvg";
import RubySvg from "./icons/SVG/RubySvg";
import RailsSvg from "./icons/SVG/RailsSvg";
import HerokuSvg from "./icons/SVG/HerokuSvg";
import FigmaSvg from "./icons/SVG/FigmaSvg";
import SassSvg from "./icons/SVG/SassSvg";
import StyledComponentsSVG from "./icons/SVG/StyledComponentsSVG";
import BootstrapSvg from "./icons/SVG/BootstrapSvg";
import PostgreSvg from "./icons/SVG/PostgreSvg";
import GitSvg from "./icons/SVG/GitSvg";
import ExpressSvg from "./icons/SVG/ExpressSvg";
import NodeSvg from "./icons/SVG/NodeSvg";
import NotionSvg from "./icons/SVG/NotionSvg";
import SlackSvg from "./icons/SVG/Slacksvg";
import FirebaseSvg from "./icons/SVG/FirebaseSvg";
import D3Svg from "./icons/SVG/D3Svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechListStyle = styled.div`
  .tech-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .tech-card {
    text-align: center;
    background-color: rgba(255, 87, 88, 0);
    border-radius: 4px;
    padding: 0 12px 12px 12px;
    margin: 0 6px 20px 0;
    flex-basis: 30%;
    flex-grow: 1;
  }

  .tech-card-box {
    display: flex;
    margin-top: 12px;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 0;
  }

  h5 {
    margin: 0 6px 0 0;
    padding: 8px;
    text-transform: uppercase;
    color: var(--super-light-pink);
    background-color: var(--dark-blue);
    font-weight: lighter;
  }

  .competencies-title {
    margin-left: 20px;
  }

  @media (min-width: 576px) {
    margin-left: 32px;
  }

  @media (min-width: 821px) {
    margin-left: 22px;

    .tech-list {
      flex-direction: row;
    }
  }
`;

const TechList = (props) => {
  const { container, main } = React.useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".tech-tag", {
  //       duration: 1,
  //       opacity: 1,
  //       y: 0,
  //       stagger: 0.1,
  //       repeat: 0,
  //     });
  //   },
  //   { scope: container }
  // );

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".tech-tag");
      boxes.forEach((box) => {
        gsap.to(box, {
          y: 40,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray("h5");
  //     boxes.forEach((box) => {
  //       gsap.from(box, {
  //         scale: 0.5,
  //         scrollTrigger: {
  //           duration: 1,
  //           repeat: 0,
  //           ease: "power1.inOut",
  //           stagger: {
  //             each: 0.5,
  //           },
  //         },
  //       });
  //     });
  //   },
  //   { scope: main }
  // );

  return (
    <TechListStyle>
      {/* <h3 className='section-title competencies-title'>Compétences techniques</h3> */}
      <div className="tech-list">
        <div className="tech-card" ref={main}>
          <h5>Front-end, design</h5>
          <div className="tech-card-box" ref={container}>
            <TechTag
              customClass={"tech-tag"}
              SVG={<JavascriptSvg height={18} width={18} fillcolor="#ffa59a" />}
              name={"JavaScript"}
              key={2}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<ReactSvg height={18} width={18} />}
              name={"React"}
              key={3}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<SassSvg height={18} width={18} />}
              name={"Sass"}
              key={5}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<StyledComponentsSVG height={18} width={18} />}
              name={"StyledComponents"}
              key={6}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<BootstrapSvg height={18} width={18} />}
              name={"Bootstrap"}
              key={7}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<FigmaSvg height={18} width={18} />}
              name={"Figma"}
              key={8}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<D3Svg height={18} width={18} />}
              name={"D3"}
              key={1}
            />
          </div>
        </div>
        <div className="tech-card">
          <h5>Back-end</h5>
          <div className="tech-card-box">
            <TechTag
              customClass={"tech-tag"}
              SVG={<ExpressSvg height={18} width={18} />}
              name={"Express"}
              key={16}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<NodeSvg height={18} width={18} />}
              name={"Node"}
              key={17}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<RubySvg height={18} width={18} />}
              name={"Ruby"}
              key={9}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<PostgreSvg height={18} width={18} />}
              name={"PostgreSQL"}
              key={10}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<RailsSvg height={18} width={18} />}
              name={"Rails"}
              key={11}
            />
          </div>
        </div>
        <div className="tech-card">
          <h5>Projets, déploiement</h5>
          <div className="tech-card-box">
            <TechTag
              customClass={"tech-tag"}
              SVG={<NotionSvg height={18} width={18} />}
              name={"Notion"}
              key={12}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<SlackSvg height={18} width={18} />}
              name={"Slack"}
              key={13}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<HerokuSvg height={18} width={18} />}
              name={"Heroku"}
              key={14}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<GitSvg height={18} width={18} />}
              name={"Git"}
              key={15}
            />
            <TechTag
              customClass={"tech-tag"}
              SVG={<FirebaseSvg height={18} width={18} />}
              name={"Firebase"}
              key={18}
            />
          </div>
        </div>
      </div>
    </TechListStyle>
  );
};

export default TechList;
