import styled from 'styled-components';

const TechTagStyle = styled.li`
  border: 0.2px solid var(--dark-blue);
  color: var(--dark-blue);
  border-radius: 16px;
  display: flex;
  padding: 4px 8px;
  margin: 2px;

  p {
    margin: 0;
    padding-top: 2px;
    padding-left: 8px;
    font-size: 12px;
  }
`

const TechTag = ({SVG, name}) => {
  return (
    <TechTagStyle key={name}>
      {SVG}
      <p>{name}</p>
    </TechTagStyle>
  )
};

export default TechTag;
