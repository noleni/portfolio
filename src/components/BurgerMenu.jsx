import styled from "styled-components";

const BurgerMenuContainer = styled.div`
  height: 100%;
`;

const BurgerMenuStyle = styled.div`
    position: relative;
    display: flex;
    height: 60px;
    justify-content: end;
    align-items: center;
    width: 80%;
    height: 80%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

  ._burger {
    width: 30px;
    height: 3px;
    background-color: var(--black);
    color: var(--black);
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
  }

  ._burger::before,
  ._burger::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: var(--black);
    color: var(--black);
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
  }

  ._burger::before {
    transform: translateY(-10px);
  }

  ._burger::after {
    transform: translateY(10px);
  }

  &.open ._burger {
    transform: translateX(-50px);
    background: transparent;
  }

  &.open ._burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  &.open ._burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media(min-width: 768px) {
    display: none;
  }
`;

const BurgerMenu = ({menuState, onClick}) => {
  return (
    <BurgerMenuContainer onClick={onClick}>
      <BurgerMenuStyle
        className={menuState ? 'open' : ''}>
        <div
          className= "_burger">
        </div>
      </BurgerMenuStyle>
    </BurgerMenuContainer>
  )
};

export default BurgerMenu;
