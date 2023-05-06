import React, {useState} from 'react';
import styled from 'styled-components';
import RibbonEl from '../UI/Ribbon';

const ProXpStyle = styled.ul`

  padding-left: 0;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .card {
    width: 100%;
    height: 190px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    margin : 12px 0;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
    cursor: pointer;
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
    border: 1px solid var(--neon-pink);
    border-radius: 4px;
  }

  .card-job-title {
    background-color: rgba(255,87,88, 0.35);
    font-size: 14px;
  }

  .card-job-infos {

    justify-content: center;
    align-content: center;
  }

  .card-job-infos-item {
    border : 0.5px solid var(--dark-blue);
    color: (--dark-blue);
    border-radius: 22px;
    padding: 2px 6px;
    margin: 4px;
    font-size: 12px;
    display: inline-block;
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
    flex-direction: row;
    margin-top: 16px;

    .card {
      margin : 0 12px;
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
          <li
            className={`card ${flippedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
             /* onMouseEnter={() => handleCardClick(index)} */
            key={index}
          >
          {card.current && !flippedCards[index] &&
            <RibbonEl/>
          }
            <div className="front">
              <img src={card.logo} alt={card.society}/>
            </div>
            <div className="back">
              <h4>{card.society}</h4>
              <p className='card-job-title'>{card.job}</p>
              <div className="card-job-infos">
                <p className='card-job-infos-item'>{card.contract}</p>
                <p className='card-job-infos-item'>{card.duration}</p>
                <p className='card-job-infos-item'>{card.cityCountry}</p>
              </div>
            </div>
          </li>
        ))}
    </ProXpStyle>

  )
};

export default ProXpItem;
