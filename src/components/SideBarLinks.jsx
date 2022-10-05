import Linkedin from './atoms/SVG/Linkedin';
import Github from './atoms/SVG/Github';

import styled from 'styled-components';

const StyleSide = styled.div`

  width: 40px;
  position: fixed;
  bottom: 10px;
  right: 40px;
  left: auto;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  ul:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: #1A1C1A;
  }

  li {
    padding-bottom: 12px;
  }

  .bump {
    transition: all 200ms ease-out;
  }

  .bump:hover {
    transform: translateY(-10px);
  }

  @media(max-width : 576px) {
    display : none;
  }
`;

const SideBarLinks = () => {
  return (
    <StyleSide>
      <ul>
        <li>
          <a href={'https://www.linkedin.com/in/marine-ramillon'} target="_blank" rel="noreferrer">
            <Linkedin width={42} height={42} className='bump'/>
          </a>
        </li>
        <li>
          <a href={'https://github.com/noleni'} target="_blank" rel="noreferrer">
            <Github width={42} height={42} className='bump' />
          </a>
        </li>
      </ul>
    </StyleSide>
  )
};

export default SideBarLinks;
