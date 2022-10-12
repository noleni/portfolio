import styled from 'styled-components';

const TechTagStyle = styled.div`
  border: 0.2px solid var(--dark-blue);
  color: var(--dark-blue);
  border-radius: 16px;
  display: flex;
  padding: 4px 8px;
  margin: 6px;

  p {
    margin: 0;
    padding-top: 2px;
    padding-left: 8px;
    font-size: 12px;
  }
`

const TechTag = ({SVG, name, i}) => {
  return (
    <TechTagStyle key={i}>
      {SVG}
      <p>{name}</p>
    </TechTagStyle>
  )
};

export default TechTag;
