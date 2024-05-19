import React, {useState} from 'react';
import styled from 'styled-components';
import RibbonEl from '../UI/Ribbon';
import ExternalLink from '../icons/SVG/ExternalLink';

const ProXpStyle = styled.ul`

  padding-left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .card {
    width: 100%;
    height: 180px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    margin : 12px 0;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
    cursor: pointer;
    background-color: var(--pure-white);
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
    flex-direction: column;
  }

  .card .back {
    transform: rotateY(180deg);
    text-align: center;
    border: 1px solid var(--neon-pink);
    border-radius: 4px;
  }

  .card-job-name {
    align-items: center;
    justify-content: center;
  }

  .card-job-title {
    background-color: var(--dark-blue);
    color: var(--pure-white);
    font-size: 14px;
    margin-top: 0;
    text-align: center;
    padding: 8px 0;
    border-radius: 4px 4px 0 0;
  }

  .card-job-infos {
    align-self: center;
    align-content: center;
    flex-grow: 1;
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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    .card {
      margin : 0 12px;
      width: calc(50% - 24px); /* 24px = margin-left + margin-right */
      margin: 12px;
  }

  .card-dev {
    width: calc(50% - 24px); /* 24px = margin-left + margin-right */
  }

  .card-no-dev {
    width: calc(33% - 24px); /* 24px = margin-left + margin-right */
  }
`;



const ProXpItem = ({data, cardClass}) => {

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
            className={`card ${cardClass} ${flippedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
             /* onMouseEnter={() => handleCardClick(index)} */
            key={index}
          >
          {card.current && !flippedCards[index] &&
            <RibbonEl/>
          }
            <div className="front">
              <div>
              <p className='card-job-title'>{card.job} @ {card.society}</p>
              <img src={card.logo} alt={card.society}/>
              </div>
              <div className="card-job-infos">
                <p className='card-job-infos-item'>{card.contract}</p>
                <p className='card-job-infos-item'>{card.duration}</p>
                <p className='card-job-infos-item'>{card.cityCountry}</p>
              </div>
            </div>
            <div className="back">
            <div className='card-job-name'>
                <h4>{card.society}</h4>
                <a href={card.website} target="_blank" rel="noreferrer">
                  <span><ExternalLink height={18} width={18} className="hover-neon"/></span>
                </a>
                <p>{card.societyDescription}</p>
              </div>
            </div>
          </li>
        ))}
    </ProXpStyle>

  )
};

export default ProXpItem;
