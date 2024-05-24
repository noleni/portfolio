import React from "react";
import styled from "styled-components";
import ExternalLink from "../icons/SVG/ExternalLink";
import moment from "moment";
moment.locale("fr");

const ProXpStyle = styled.ul`
  padding-left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .card {
    width: 100%;
    height: 180px;
    margin: 12px 0;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }

  .card-job-title {
    ${"" /* background-color: var(--dark-blue); */}
    ${"" /* color: var(--pure-white); */}
    font-size: 14px;
    margin-top: 0;
    ${"" /* text-align: center; */}
    padding: 0;
    border-radius: 4px 4px 0 0;
    font-weight: lighter;
  }

  .card-job-infos {
    align-self: center;
    align-content: center;
    flex-grow: 1;
  }

  .card-job-infos-item {
    border: 0.5px solid var(--dark-blue);
    color: (--dark-blue);
    border-radius: 22px;
    padding: 2px 6px;
    margin: 4px;
    font-size: 12px;
    display: inline-block;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 16px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    .card {
      margin: 0 12px;
      width: calc(50% - 24px); /* 24px = margin-left + margin-right */
      margin: 12px 12px 12px 0;
    }

    .card-dev {
      width: calc(50% - 24px); /* 24px = margin-left + margin-right */
    }

    .card-no-dev {
      width: calc(33% - 24px); /* 24px = margin-left + margin-right */
    }
  }
`;

const ProXpItem = ({ data, cardClass }) => {
  return (
    <ProXpStyle>
      {data.map((card, index) => (
        <li className={`card ${cardClass}`} key={index}>
          <div className="front">
            <span className="small">
              {moment(card.dateFrom).format("MMM yy")}
            </span>
            <span className="small"> - </span>
            <span className="small">
              {moment(card.dateTo).format("MMM yy")}
            </span>
            <div>
              <span className="card-job-title">
                {card.job} | {card.society}
              </span>
              <a href={card.website} target="_blank" rel="noreferrer">
                <span>
                  <ExternalLink height={14} width={14} className="hover-neon" />
                </span>
              </a>
              <p className="small">{card.societyDescription}</p>
            </div>
            <div className="card-job-infos">
              <p className="card-job-infos-item">{card.contract}</p>
              <p className="card-job-infos-item">{card.cityCountry}</p>
            </div>
          </div>
          <div>
            <div className="card-job-name"></div>
          </div>
        </li>
      ))}
    </ProXpStyle>
  );
};

export default ProXpItem;
