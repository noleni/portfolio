import React, { useState } from 'react';

import projectsData from "../../data/projectsData";
import ProjectPic from '../ProjectPick';

import ExternalLink from '../atoms/SVG/ExternalLink';
import Github from '../atoms/SVG/Github';
import LeftSvg from '../atoms/SVG/LeftSvg';
import RightSvg from '../atoms/SVG/RightSvg';

import styled from 'styled-components';

const ProjetsListContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  align-items: baseline;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectSelectedStyle = styled.div`
  padding-left: 0;

  & .img-selected {
    width: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    position: relative;
    margin: 12px 0 32px 0px;
  }

  & img {
    width: 100%;
    object-fit: cover;
    opacity: 0.9;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    padding: 4px 0 4px 0;
  }

  & .project-informations {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .project-informations-title {
    margin-top: 16px;
    padding-right: 12px;
    color: var(--neon-pink);
  }

  & .project-links {
    margin-top: 12px;
    display: flex;
  }

  & .tags-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
  }

  & .techno-tag {
    width: fit-content;
    font-size: 12px;
    border: 1px solid var(--dark-blue);
    color: var(--off-white);
    background-color: var(--dark-blue);
    border-radius: 4px;
    margin-right: 8px;
    padding: 0 8px;
  }

  @media(min-width: 768px) {
    margin-left: 80px;

    .project-informations {
      justify-content: start;
    }

    .tags-container {
    display: flex;
    }

    .img-selected {
      width: 60%;
      margin-left: 0;
    }
  }
`;


const Projects = () => {

  const [active, setActive] = useState(1);

  const leftProjectHandler = () => {
    +active === 1 ? setActive(projectsData.length) : setActive(+active -1);
  };

  const rightProjectHandler = () => {
    +active === projectsData.length ? setActive(1) : setActive(+active +1);
  };

  return (
    <section id="projects">
      <ProjetsListContainerStyle>

        <ProjectPic
          data={projectsData}
          activeState={+active}
          onClick={(e) => setActive(e.target.id)}
        />

        <ProjectSelectedStyle className='selected-project'>
        {projectsData.filter(selected => selected.id === +active).map(project => (
          <>
            <div className="project-informations" >
              <LeftSvg
                heigth={30}
                width={30}
                onClick={leftProjectHandler}
                className="left-effet hover-neon"
              />
              <h3 className='project-informations-title'>{project.name}</h3>
              <p>{project.date}</p>
              <RightSvg
                heigth={30}
                width={30}
                onClick={rightProjectHandler}
                className="right-effet hover-neon"
              />
            </div>
            <div className='img-selected'>
              <img
                src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
                alt={project.name}
                id={project.id}
              />
            </div>

            <div className='tags-container'>
              {project.tech.map(techno =>(techno))}
            </div>
            <p>{project.notice}</p>
            <div className='project-links'>
              {project.url !== undefined &&
                <a href={project.url} target="_blank" rel="noreferrer">
                  <ExternalLink height={24} width={24} className="hover-neon"/>
                </a>
              }
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github height={24} width={24} className="hover-neon" />
              </a>
            </div>

          </>
        ))}
          </ProjectSelectedStyle>
      </ProjetsListContainerStyle>
    </section>
  )
};

export default Projects;
