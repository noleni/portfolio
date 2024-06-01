import React from "react";
import styled from "styled-components";
import ProXpItem from "../professionnalXP/ProfessionalExpItem";
import professionalXpData from "../../data/professionalXpData";

const ProfessionalSection = styled.section`
  align-items: baseline;
  padding: 60px 30px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;

  .professionnal-xp-content {
    --col-gap: 2rem;
    --row-gap: 2rem;
    --line-w: 0.25rem;
    display: grid;
    grid-template-columns: var(--line-w) 1fr;
    grid-auto-columns: max-content;
    column-gap: var(--col-gap);
    list-style: none;
    width: min(60rem, 90%);
    margin-inline: auto;

    &:before {
      content: "";
      grid-column: 1;
      grid-row: 1 / span 20;
      background: rgb(225, 225, 225);
      border-radius: calc(var(--line-w) / 2);
    }
  }

  @media (min-width: 40rem) {
    .professionnal-xp-content {
      grid-template-columns: 1fr var(--line-w) 1fr;

      &:before {
        grid-column: 2;
      }
    }
  }
`;

const ProfessionalExp = () => {
  return (
    <ProfessionalSection id="professional">
      <ul className="professionnal-xp-content">
        {professionalXpData.map((data, i) => (
          <ProXpItem key={i} card={data}></ProXpItem>
        ))}
      </ul>
    </ProfessionalSection>
  );
};

export default ProfessionalExp;
