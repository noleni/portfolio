import styled from "styled-components";

const Ribbon = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  right: 0;

  & :before,
  & :after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 2px solid var(--neon-pink);
  }
  & span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 10px 0;
    background-color: var(--neon-pink);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    z-index: 1000;
    left: -10px;
    top: 30px;
    transform: rotate(45deg);
    font-family: var(--title);
  }

  .ribbon-top-right {
    top: -5px;
    right: -5px;
  }
  .ribbon-top-right::before,
  .ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  .ribbon-top-right::before {
    top: 0;
    left: 0;
  }
  .ribbon-top-right::after {
    bottom: 0;
    right: 0;
  }
`;

const RibbonEl = () => {
  return (
    <Ribbon className="ribbon-top-right">
      <span>Poste actuel</span>
    </Ribbon>
  );
};

export default RibbonEl;
