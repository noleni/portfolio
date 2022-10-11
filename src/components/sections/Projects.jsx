import React, { useState } from 'react';

import projectsData from "../../data/projectsData";
import ProjectPic from '../ProjectPick';

import ExternalLink from '../icons/SVG/ExternalLink';
import Github from '../icons/SVG/Github';
import LeftSvg from '../icons/SVG/LeftSvg';
import RightSvg from '../icons/SVG/RightSvg';

import styled from 'styled-components';


const ProjectsSection = styled.section`

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  margin-bottom: 60px;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`

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
    opacity: 0.8;
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    padding: 4px 0 4px 0;
  }

  & .project-informations {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .project-informations-title-and-date {
    display: flex;
  }

  & .project-informations-title {
    margin-top: 16px;
    padding-right: 12px;
    color: var(--neon-pink);
  }

  & .project-links {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }

  & .tags-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 32px;
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
    border-top: 0;
    border-bottom: 0;

    .project-informations {
      justify-content: start;
    }

    ${'' /* .img-selected-tags-container {
      display: flex;
    } */}

    .tags-container {
      justify-content: start;
    }

    .img-selected {
      width: 50%;
      margin-left: 0;
    }
  }
`;


const Projects = React.forwardRef((props, ref) => {

  const [active, setActive] = useState(1);

  const leftProjectHandler = () => {
    +active === 1 ? setActive(projectsData.length) : setActive(+active -1);
  };

  const rightProjectHandler = () => {
    +active === projectsData.length ? setActive(1) : setActive(+active +1);
  };

  return (
<>
    <ProjectsSection id="projects" ref={ref}>
      <p className='section-title small'>Mes projets</p>

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
                <div className='project-informations-title-and-date'>
                  <h3 className='project-informations-title'>{project.name}</h3>
                  <p>{project.date}</p>
                </div>
                <RightSvg
                  heigth={30}
                  width={30}
                  onClick={rightProjectHandler}
                  className="right-effet hover-neon"
                />
              </div>


              <div className='img-selected-tags-container'>

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
    </ProjectsSection>

    </>
  )
});

export default Projects;
