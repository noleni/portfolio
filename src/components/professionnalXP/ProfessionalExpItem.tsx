import React from "react";
import styled from "styled-components";
import ExternalLink from "../icons/SVG/ExternalLink";
import moment from "moment";
moment.locale("fr");

interface ProXpItemProps {
  key: number;
  card: {
    current: boolean;
    dateFrom: Date;
    dateTo: Date;
    job: string;
    society: string;
    website: string;
    societyDescription: string;
    technos?: React.ReactNode[];
  };
}

const ProXpStyle = styled.li`
  margin-bottom: 20px;

  .card-job-title {
    font-size: 14px;
    margin-top: 0;
    padding: 0;
    border-radius: 4px 4px 0 0;
    font-weight: lighter;
  }

  .card-job-infos {
    display: flex;
  }
`;

const ProXpItem = ({ key, card } : ProXpItemProps) => {
  return (
    <ProXpStyle key={key}>
      <span className="small">{moment(card.dateFrom).format("MMM yy")}</span>
      <span className="small"> - </span>
      <span className="small">{moment(card.dateTo).format("MMM yy")}</span>
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
        {card?.technos?.map((tech, index) => (
          <span key={index} className="">
            {tech}
          </span>
        ))}
      </div>
      <div>
        <div className="card-job-name"></div>
      </div>
    </ProXpStyle>
  );
};

export default ProXpItem;
