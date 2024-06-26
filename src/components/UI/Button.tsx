import styled from "styled-components";

const Button = styled.button`
  padding: 6px 22px;
  color: var(--nyanza);
  border: 1px solid var(--celadon-2);
  border-radius: 4px;
  animation: pulse 1s;
  transition: all 200ms ease-in-out;
  font-family: var(--texts);
  font-size: 16px;
  background-color: var(--celadon-2);

  &:hover {
    background-color: rgba(255, 87, 88, 0.35);
    color: var(--black);
    cursor: pointer;
    transform: scale(1.06);
  }

  &.active {
    background-color: rgba(255, 87, 88, 0.35);
  }

  @media (max-width: 764px) {
    background-color: rgba(255, 87, 88, 0.35);
  }
`;

export default Button;
