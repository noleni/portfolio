import React, {useState} from 'react';
import styled from 'styled-components';
import FrontFlip from './FrontFlip';
import BackFlip from './BackFlip';

const ProXpStyle = styled.ul`

  padding-left: 0;
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  .card {
    width: 100%;
    height: 120px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    margin : 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .front,
  .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card .front {
    z-index: 2;
    transform: rotateY(0deg);
    display: flex;

  }

  .card .back {
    transform: rotateY(180deg);
    text-align: center;
  }

  img {
    max-width: 100%;
    max-height: 80px;
    display: block;
    margin : auto;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  .ribbon {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: absolute;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid var(--neon-pink);
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 10px 0;
    background-color: var(--neon-pink);
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    text-transform: uppercase;
    text-align: center;
    z-index: 1000;
  }

  .ribbon-top-right {
  top: -10px;
  right: -10px;
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
  .ribbon-top-right span {
    left: -40px;
    top: 30px;
    transform: rotate(45deg);
  }

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;



const ProXpItem = ({data, activeState}) => {

  const [flippedCards, setFlippedCards] = useState([]);

  function handleCardClick(index) {
    setFlippedCards(prevState => {
      const newFlippedCards = [...prevState];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  }


  return (
    <ProXpStyle>
        {data.map((card, index) => (
          <li className={`card ${flippedCards[index] ? 'flipped' : ''}`} onClick={() => handleCardClick(index)} key={index}>
          {card.current &&
            <div className="ribbon ribbon-top-right"><span>actuel</span></div>
          }
            <div className="front">
              <img src={card.logo} alt={card.society}/>
            </div>
            <div className="back">
              <h4>{card.society}, {card.contract}</h4>
              <p>durée : {card.duration}</p>
              <p>lieu : {card.cityCountry}</p>
            </div>
          </li>
        ))}
    </ProXpStyle>

  )
};

export default ProXpItem;
