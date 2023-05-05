import React, {useState} from "react";
import styled from "styled-components";


const BackFlipCard = styled.li`

  .hidden {
    display: ${(props) => (props.isHidden ? 'none' : 'block')};
  }

  @media (min-width: 768px) {
    /* styles for larger screens */
  }
`;

const FrontFlip = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  console.log('isHidden', isHidden);

  const cardId = `${props.societyName}back`;

  return (
    <BackFlipCard
      id={cardId}
      onClick={(e) => setIsHidden(!isHidden)} // set isHidden to true on click
   // set the display style based on isHidden
    >
      <p isHidden={isHidden} className="hidden">HELLO</p>
    </BackFlipCard>
  );
};

export default FrontFlip;
