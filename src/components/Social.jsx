import styled from "styled-components";

import Linkedin from "./icons/SVG/Linkedin";
import Github from "./icons/SVG/Github";

const SocialStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: #1A1C1A;
  }

  & li {
    padding-bottom: 12px;
  }

  .bump {
    transition: all 200ms ease-out;
  }

  .bump:hover {
    transform: translateY(-10px);
  }
`

const Social = () => {
  return (
    <SocialStyle>
      <li key={'linkedin'}>
        <a href={'https://www.linkedin.com/in/marine-ramillon'} target="_blank" rel="noreferrer">
          <Linkedin width={36} height={36} className='bump'/>
        </a>
      </li>
      <li key={'github'}>
        <a href={'https://github.com/noleni'} target="_blank" rel="noreferrer">
          <Github width={36} height={36} className='bump' />
        </a>
      </li>
    </SocialStyle>
  )
};

export default Social
