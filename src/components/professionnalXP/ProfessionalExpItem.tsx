import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ExternalLink from "../icons/SVG/ExternalLink";
import moment from "moment";
moment.locale("fr");

interface ProXpItemProps {
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
  opacity: 0; /* Elements are hidden by default */
  transition: opacity 0.5s, transform 0.5s;

  &.visible {
    animation: fadeInUp 0.5s forwards;
  }

  /* row gaps */
  :not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;

  /* date */
  .card-job-date {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);
    text-align: center;
    background-color: var(--celadon-2);
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    display: grid;
    place-content: center;
    position: relative;
    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
  }

  /* date flap */
  .card-job-date::before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background: var(--celadon-2);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
  }

  /* circle */
  .card-job-date::after {
    content: "";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    background: var(--pure-white);
    border: 0.3rem solid red;
    border-radius: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  /* title and description */
  .card-job-title,
  .card-job-infos {
    background: var(--bgColor);
    position: relative;
    padding-inline: 1.5rem;
  }

  .card-job-title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
    font-weight: 500;
  }

  .card-job-infos {
    display: flex;
    padding-block-end: 1.5rem;
    font-weight: 300;
  }

  /* shadows */
  .card-job-title::before,
  .card-job-infos::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%);
  }

  .card-job-title::before {
    bottom: calc(100% + 0.125rem);
  }

  .card-job-infos::before {
    z-index: -1;
    bottom: 0.25rem;
  }

  @media (min-width: 40rem) {
    :nth-child(odd) {
      grid-column: 1;
    }
    :nth-child(even) {
      grid-column: 3;
    }

    :nth-child(2) {
      grid-row: 2 / 4;
    }

    :nth-child(odd) .card-job-date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }

    :nth-child(odd) .card-job-date::after {
      transform: translate(-50%, -50%);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }

    :nth-child(odd) .card-job-date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;

const ProXpItem = ({ card }: ProXpItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ProXpStyle ref={ref}>
      <h4 className="card-job-date">
        {moment(card.dateFrom).format("MMM yy")} - {moment(card.dateTo).format("MMM yy")}
      </h4>
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
        {card.technos?.map((tech, index) => (
          <span key={index} className="">
            {tech}
          </span>
        ))}
      </div>
    </ProXpStyle>
  );
};

export default ProXpItem;
