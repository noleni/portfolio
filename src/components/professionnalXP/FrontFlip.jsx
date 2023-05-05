import React, {useState} from "react";
import styled from "styled-components";


const FrontFlipCard = styled.li`
  .hidden {
    display: ${(props) => (props.isHidden ? 'none' : 'block')};
  }

  @media (min-width: 768px) {
    /* styles for larger screens */
  }
`;

const FrontFlip = (props) => {
  const [isHidden, setIsHidden] = useState(false);

  console.log('isHidden', isHidden);

  const cardId = `${props.societyName}front`;

  return (
    <FrontFlipCard
      id={cardId}
      onClick={(e) => setIsHidden(!isHidden)} // set isHidden to true on click
       // set the display style based on isHidden
    >
      <p isHidden={isHidden} className="hidden">{props.societyName}</p>
    </FrontFlipCard>
  );
};

export default FrontFlip;
