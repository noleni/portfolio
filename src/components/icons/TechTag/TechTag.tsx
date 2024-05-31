import React from "react";
import styled from "styled-components";

const TechTagStyle = styled.div`
  border: 0.1px solid var(--mint);
  border-radius: 16px;
  display: flex;
  padding: 4px 8px;
  margin: 4px 4px 4px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    padding: 2px 0 0 8px;
    font-size: 12px;
    font-weight: 200;
  }
`;

const TechTag = ({ SVG, name, i, customClass } : any) => {
  return (
    <TechTagStyle key={i} className={customClass}>
      {SVG}
      <p>{name}</p>
    </TechTagStyle>
  );
};

export default TechTag;
