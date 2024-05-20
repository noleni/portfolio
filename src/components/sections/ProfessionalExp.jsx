import React from "react";
import styled from "styled-components";

import ProXpItem from "../professionnalXP/ProfessionalExpItem";
import professionalXpData from "../../data/professionalXpData";

const ProfessionalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 60px;
  padding: 60px 30px;
  box-sizing: border-box; /* Ajouté ici */
  background-image: url("/images/pattern-randomized.svg");
  background-repeat: no-repeat;
  background-size: cover;

  .professionnal-xp-content {
    width: 100%;
  }

  @media (min-width: 576px) {
    padding: 60px 60px;
  }
`;

const ProfessionalExp = React.forwardRef((props, ref) => {
  return (
    <ProfessionalSection id="professional" ref={ref}>
      <div className="professionnal-xp-content">
        <p className="section-title">02. Expériences pro</p>
        <ProXpItem
          data={professionalXpData.dev}
          cardClass={"card-dev"}
        ></ProXpItem>
        <ProXpItem
          data={professionalXpData.noDev}
          cardClass={"card-no-dev"}
        ></ProXpItem>
      </div>
    </ProfessionalSection>
  );
});

export default ProfessionalExp;
