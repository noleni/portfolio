import React from "react";
import styled from 'styled-components';

import ProXpItem from "../professionnalXP/ProfessionalExpItem";
import professionalXpData from "../../data/professionalXpData";

const ProfessionalSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  margin-bottom: 60px;

  .project {
    display: flex;
  }
`;

const ProfessionalExp = React.forwardRef((props, ref) => {
  return (
    <ProfessionalSection id="professional" ref={ref}>
    <p className='section-title'>02. Expériences pro</p>
    <ProXpItem
      data={professionalXpData.dev}
    ></ProXpItem>
    <ProXpItem
      data={professionalXpData.noDev}
    ></ProXpItem>
    </ProfessionalSection>
  )
})

export default ProfessionalExp
