import React, {useState} from 'react';
import styled from 'styled-components';

const ProXpStyle = styled.ul`

  padding-left: 0;
  margin: auto;
  width: 90%;

  li {
    width: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    margin : 12px;
    padding: 6px 0;
  }

  img {
    max-width: 100%;
    max-height: 80px;
    display: block;
    margin : auto;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  @media(min-width: 768px) {
    display: flex;
    width: 180px;
    flex-direction: column;
    padding-right: 0px;
  }
`;

const ProXpItem = ({data, activeState}) => {

  const [flip, setFlip] = useState(false);

  return (
    <ProXpStyle>
      {flip &&
        data.map(project => (
          <li key={project.id} onClick={() => setFlip(!flip)}>
            <p>{project.duration}</p>
          </li>
        ))
      }
      {!flip &&
        data.map(project => (
          <li key={project.id} onClick={() => setFlip(!flip)}>
            <img src={project.logo} alt={project.society}/>
          </li>
        ))
      }
    </ProXpStyle>

  )
};

export default ProXpItem;
