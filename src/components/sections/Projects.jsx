import React, { useState, useEffect } from 'react';

import projectsData from "../../data/projectsData";
import styled from 'styled-components';

const ProjetsListContainerStyle = styled.div`

  display: flex;
  align-items:center;
  width: 100%;
  max-height: 100vh;

  @media(min-width: 768px) {

  }

`

const ProjectCardStyle = styled.li`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-bottom: 12px;
  margin-top: 22px;
  ${'' /* display: flex; */}
  background-color: var(--off-white);
  opacity: 0.9;
  position: relative;
  cursor: pointer;

  .project-list-round-background {
    background-color: var(--offwhite);
    border-radius: 50%;
  }

  @media(min-width: 768px) {


  }
`

const ProjectListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
    transition: filter 0.5s ease-in-out;
}
`

const ProjectSelectedStyle = styled.div`
  width: 100%;
  position: relative;
  padding-left: 40px;


  img {
    width: 100%;
    object-fit: contain;
  }
`


const Projects = () => {

  const [active, setActive] = useState(1);

  return (
    <section id="projects">
      <ProjetsListContainerStyle>
        <ProjectListStyle>
          {projectsData.map((project) => (
            <ProjectCardStyle key={project.id} onClick={(e) => setActive(e.target.id)}>
                <div className="project-list">
                  <img src={`${process.env.PUBLIC_URL}/images/${project.illustration}`} alt={project.name} id={project.id}/>
                  <p className='project-list-round-background'>{project.name}</p>
                </div>
            </ProjectCardStyle>
          ))}
        </ProjectListStyle>
        <ProjectSelectedStyle className='selected-project'>
          {projectsData.filter(selected => selected.id === +active).map(project => (
            <>
            <p>{project.date}</p>
            <h3>{project.name}</h3>
            <img src={`${process.env.PUBLIC_URL}/images/${project.illustration}`} alt={project.name} id={project.id}/>
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
