import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 22px;
  color: var(--black);
  border: 1px solid var(--neon-pink);
  border-radius: 4px;
  background-color: transparent;
  animation: pulse 1s;
  transition: all 200ms ease-in-out;
  font-family: var(--texts);
  font-size: 16px;
  background-color: transparent;

  &:hover {
  background-color: rgba(247,31,102, 0.35);
  color: var(--black);
  cursor: pointer;
  transform: scale(1.06);
}

  &.active {
    background-color: rgba(247,31,102, 0.35);
  }

  @media(max-width: 764px) {
    background-color: rgba(247,31,102, 0.35);
  }
`

export default Button;
