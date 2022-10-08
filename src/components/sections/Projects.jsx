import React, { useState } from 'react';

import projectsData from "../../data/projectsData";

import Button from '../UI/Button';
import ExternalLink from '../atoms/SVG/ExternalLink';
import Github from '../atoms/SVG/Github';
import LeftSvg from '../atoms/SVG/LeftSvg';
import RightSvg from '../atoms/SVG/RightSvg';

import styled from 'styled-components';

const ProjetsListContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  max-height: 100vh;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectListStyle = styled.ul`
  display: none;
  padding-left: 0;

  li {
    padding-left: 0;
  }

  @media(min-width: 768px) {
    display: flex;
    width: 150px;
    flex-direction: column;
    padding-right: 0px;
    border-right: 1px solid var(--black);
  }
`;

const ProjectSelectedStyle = styled.ul`
  padding-left: 0;

  .img-selected {
    width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
  }

  .project-informations {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .project-informations-title {
    margin-top: 16px;
    padding-right: 12px;
    color: var(--neon-pink);
  }

  .project-links {
    flex-grow: 1;
    display: flex;
    justify-content: end;
  }

  .selected-project-title {
    display: flex;
  }

  .tags-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .techno-tag {
    width: fit-content;
    font-size: 12px;
    border: 1px solid var(--dark-blue);
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
        <ProjectListStyle>
          <p className='section-title'>Mes projets</p>
          {projectsData.map(project => (
            <li key={project.id}>
              <Button
                className={project.id === +active ? "active" : ""}
                onClick={(e) => setActive(e.target.id)}
                id={project.id}>
                {project.name}
              </Button>
            </li>
          ))}
        </ProjectListStyle>

          {projectsData.filter(selected => selected.id === +active).map(project => (
            <ProjectSelectedStyle className='selected-project' key={project.id}>
              <div className="project-informations" >
                <LeftSvg
                  heigth={30}
                  width={30}
                  onClick={leftProjectHandler}
                  className="left-effet"
                />
                <h3 className='project-informations-title'>{project.name}</h3>
                <p>{project.date}</p>
                <RightSvg
                  heigth={30}
                  width={30}
                  onClick={rightProjectHandler}
                  className="right-effet"
                />
              </div>
              <div className='img-selected'>
                <img src={`${process.env.PUBLIC_URL}/images/${project.poster}`} alt={project.name} id={project.id}/>
              </div>
              <div className='project-links'>
                <a href={project.url}>
                  <ExternalLink height={24} width={24}/>
                </a>
                <a href={project.github}>
                  <Github height={24} width={24} />
                </a>
              </div>
              <div>
                <div className='tags-container'>
                  {project.tech.map(techno => (<p className='techno-tag'>{techno}</p>))}
                </div>
                <p>{project.notice}</p>
              </div>
            </ProjectSelectedStyle>
          ))}
      </ProjetsListContainerStyle>
    </section>
  )
};

export default Projects;
