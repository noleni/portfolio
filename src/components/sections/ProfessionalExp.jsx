import React from "react";
import styled from 'styled-components';

import ProXpItem from "../professionnalXP/ProfessionalExpItem";
import professionalXpData from "../../data/professionalXpData";

const ProfessionalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 60px;

  .professionnal-xp-content {
    width: 100%;
    padding: 20px 30px;
  }

  .project {
    display: flex;
  }
`;

const ProfessionalExp = React.forwardRef((props, ref) => {
  return (
    <ProfessionalSection id="professional" ref={ref}>
    <div className="professionnal-xp-content">
    <p className='section-title'>02. Expériences pro</p>
    <ProXpItem
      data={professionalXpData.dev}
    ></ProXpItem>
    <ProXpItem
      data={professionalXpData.noDev}
    ></ProXpItem>
    </div>
    </ProfessionalSection>
  )
})

export default ProfessionalExp
