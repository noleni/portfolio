import React, { ForwardedRef } from "react";
import styled from "styled-components";

import ProXpItem from "../professionnalXP/ProfessionalExpItem";
import professionalXpData from "../../data/professionalXpData";

const ProfessionalSection = styled.section`
  align-items: baseline;
  padding: 60px 30px;
  box-sizing: border-box; /* Ajouté ici */
  width: 100%;
  margin: 0 auto;

  .professionnal-xp-content {
    max-width: 600px;
  }
`;

const ProfessionalExp = React.forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <ProfessionalSection id="professional" ref={ref}>
        <ul className="professionnal-xp-content">
          {professionalXpData.map((data, i) => (
            <ProXpItem key={i} card={data}></ProXpItem>
          ))}
        </ul>
      </ProfessionalSection>
    );
  }
);

export default ProfessionalExp;
