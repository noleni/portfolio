import Social from './Social';

import styled from 'styled-components';

const StyleSide = styled.div`
  width: 40px;
  position: fixed;
  bottom: 10px;
  right: 40px;
  left: auto;
  z-index: 10;

  @media(max-width : 576px) {
    display : none;
  }
`;

const SideBarLinks = () => {
  return (
    <StyleSide>
      <Social />
    </StyleSide>
  )
};

export default SideBarLinks;
