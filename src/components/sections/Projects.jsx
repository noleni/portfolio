import React, { useState, useEffect } from 'react';

import projectsData from "../../data/projectsData";
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

`

const ProjectListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  max-height: 100vh;
  margin-top: 22px;
  padding: 0;


  .project-title-small {
    font-size: 12px;
    color: var(--black);
    margin-bottom: 0;
    margin-top: 0;
  }

  .project-icon {
    display: flex;
    flex-direction: column;

    p {
      padding-left: 12px;
    }
  }

  @media(min-width: 768px) {
    ${'' /* display: block; */}
    width: 50%;
  }

`

const ProjectCardStyle = styled.li`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-bottom: 6px;
  margin-top: 4px;
  margin-left: 12px;
  margin-right: 12px;
  opacity: 1;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--black);
  transition: all 200ms ease-in-out;

  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.6;
    transition: all 200ms ease-in-out;
}

  .img-active {
    opacity: 0.9;
  }

  &.active {
    border: 1.5px solid var(--neon-pink);
    transform: scale(1.04)
    ${'' /* width: 110px;
    height: 110px; */}
  }

  @media(min-width: 768px) {
    width: 120px;
  height: 120px;

  }
`

const ProjectSelectedStyle = styled.div`
  width: 100%;
  position: relative;
  ${'' /* padding-left: 80px; */}


  img {
    width: 100%;
    object-fit: contain;
  }

  .selected-project-title {
    display: flex;
  }

  .tags-container {
    display: flex;
  }

  .techno-tag {
    width: fit-content;
    font-size: 12px;
    color: var(--off-white);
    background-color: var(--neon-pink);
    border-radius: 4px;
    margin-right: 8px;
    padding: 0 8px;
  }
`


const Projects = () => {

  const [active, setActive] = useState(1);

  return (
    <section id="projects">
        <p className='section-title'>Mes projets</p>
      <ProjetsListContainerStyle>
        <ProjectListStyle>
          {projectsData.map((project) => (
            <div className='project-icon'>
            <p className='project-title-small'>#{project.id} - {project.name}</p>
            <ProjectCardStyle key={project.id} onClick={(e) => setActive(e.target.id)} className={project.id === +active ? "active" : ""}>
                <div className="project-list">
                  <img src={`${process.env.PUBLIC_URL}/images/${project.illustration}`} alt={project.name} id={project.id} className={project.id === +active ? "img-active" : ""}/>
                </div>
            </ProjectCardStyle>
            </div>
          ))}
        </ProjectListStyle>
        <ProjectSelectedStyle className='selected-project'>
          {projectsData.filter(selected => selected.id === +active).map(project => (
            <>


              <h3>{project.name} / {project.date}</h3>
              <div className='tags-container'>
              {project.tech.map(techno => (<p className='techno-tag'>{techno}</p>))}
              </div>
            {/* <img src={`${process.env.PUBLIC_URL}/images/${project.illustration}`} alt={project.name} id={project.id}/> */}
            <p>{project.notice}</p>
            <p>{project.notice}</p>
            <p>{project.notice}</p>


            </>
          ))}
        </ProjectSelectedStyle>
      </ProjetsListContainerStyle>
    </section>
  )
};

export default Projects;

        // style={{backgroundImage: `linear-gradient(to bottom, rgba(28,26,28,0.5), rgba(247,31,102,0.2)), url(${`${process.env.PUBLIC_URL}/images/${project.illustration}`})`}}>
