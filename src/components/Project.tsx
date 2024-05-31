import React from "react";
import styled from "styled-components";


interface ProjectActiveProps {
  data: {
    id: number;
    name: string;
    notice: string;
    date: string;
    features: string[];
    tech: React.ReactNode[];
    packages: string[];
    poster: string[];
    github: string;
    url?: string;
  }[];
}

const ProjectSelectedStyle = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  & .project-links {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 98%;
  height: 300px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3); /* Adjust the opacity here */
    pointer-events: none; /* Ensure that the overlay does not block interactions */
    z-index: 1; /* Position the overlay below the content */
  }

  /* Ensure that the content is above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  .project-informations {
    text-align: center;
    border: 2px solid var(--celadon-2);
    opacity: 1;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-content: center;
    transition: all 0.3s;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
    padding: 0 4px;

    .project-name {
      display: block;
    }

    .project-notice {
      display: none;
    }

    .tags-container {
      display: none;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0;
    }

    .techno-tag {
      width: fit-content;
      color: var(--celadon-2);
      margin-right: 3px;
    }

    :hover {
      border-radius: 6px;
      width: 90%;
      height: 90%;
      background-color: var(--nyanza);

      .project-name {
        display: none;
      }
      .project-notice {
        display: block;
      }

      .tags-container {
        display: flex;
      }
    }
  }
  @media (min-width: 576px) {
    width: 49%;
    height: 280px;
    margin: 2px;

    .project-informations {
      width: 70px;
      height: 70px;
    }
  }
`;

const ProjectActive = ({ data } : ProjectActiveProps) => {
  return (
    <ProjectSelectedStyle className="selected-project">
      {data.map((project) => (
        <Image
          key={project.id}
          // bgSrc={`${process.env.PUBLIC_URL}/images/${project.poster[1]}`}
        >
          <div className="project-informations small">
            <p className="project-name small">{project.name.toUpperCase()}</p>
            <p className="project-notice small">{project.notice}</p>
            <div className="tags-container">
              {project.tech.map((techno, index) => (
                <span key={index} className="techno-tag small">
                  {techno}
                </span>
              ))}
            </div>
          </div>
        </Image>
      ))}
    </ProjectSelectedStyle>
  );
};

export default ProjectActive;
