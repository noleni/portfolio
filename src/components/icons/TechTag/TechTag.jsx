import styled from 'styled-components';

const TechTagStyle = styled.div`
  border: 0.5px solid var(--dark-blue);
  color: var(--dark-blue);
  border-radius: 16px;
  display: flex;
  padding: 4px 8px;
  margin: 4px;
  background-color: props.bgcolor || var(--super-light-pink);
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-5px);
  }

  & {
    transition: transform 0.2s ease-in-out;
  }

  p {
    margin: 0;
    padding: 2px 0 0 8px;
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
