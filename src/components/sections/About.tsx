import React from "react";
import styled from "styled-components";
import TechList from "../TechList";

interface AboutProps {
  presentationClass: string;
}

const AboutStyle = styled.section`
  background-color: var(--neon-pink);

  .about-content {
    padding: 20px 30px;
  }

  .pic-n-tech {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4px 0 0 4px;
    margin-top: 30px;
  }

  .presentation {
    text-align: center;
  }

  .btn-show-more {
    width: 100%;
  }

  @media (min-width: 576px) {
    .about-content {
      padding: 20px 100px 40px 100px;
    }

    .presentation {
      text-align: left;
    }

    .pic-n-tech {
      flex-direction: row;
      margin-top: 60px;
    }
  }
`;

const ProfilPicStyle = styled.div`
  text-align: -webkit-center;

  .img-border {
    position: relative;
    border-radius: 4px;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--celadon-2);
    background-color: hsla(147, 43%, 71%, 0.3);
    margin-bottom: 38px;
  }

  img {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 100%;
    height: 100%;
    -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
    filter: grayscale(50%);

    border-radius: 4px;
    margin: 0 60px 0 0;
    transition: all 200ms ease-in-out;
  }

  @media (min-width: 768px) {
    .img-border {
      width: 240px;
      height: 240px;
      margin-bottom: 0;
    }
  }
`;

const Brush = styled.div`
  width: 100%;
  background-image: url("/images/brush.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  transform: translateY(-1px);
`;

const About = ({ presentationClass }: AboutProps) => {
  return (
    <>
      <AboutStyle id="about">
        <div className="about-content">
          <p className="presentation">
            Je développe des applications web et mobiles depuis 2022. Après une
            carrière dans le secteur marketing et culturel, je me suis
            reconvertie dans l'optique de créer des outils numériques intuitifs,
            accessibles et répondants aux besoins des utilisateurs. Après un
            passage au sein du pôle User Care de Rakuten France, je développe
            actuellement des applications de data visualisation chez Daily
            d'initiés.
          </p>

          <div className="pic-n-tech">
            <ProfilPicStyle>
              <div className="img-border">
                <img
                  src={process.env.PUBLIC_URL + `images/profil.jpg`}
                  alt="profil"
                />
              </div>
            </ProfilPicStyle>
            <TechList />
          </div>
        </div>
      </AboutStyle>
      <Brush />
    </>
  );
};

export default About;
