import React, { useState, useEffect } from 'react';

import Button from '../UI/Button';

import projectsData from "../../data/projectsData";
import styled from 'styled-components';
import ExternalLink from '../atoms/SVG/ExternalLink';
import Github from '../atoms/SVG/Github';

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
  ${'' /* display: grid;
  grid-template-columns: 1fr 1fr; */}
  display: flex;
  justify-items: center;
  max-height: 100vh;
  margin-top: 22px;
  padding: 0;
  width: 15%;

  li {
    padding-left: 0;
  }

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
    flex-direction: column;
    width: 33%;
    padding-right: 0px;
    border-right: 1px solid var(--black);
  }

`

// const ProjectCardStyle = styled.li`
//   width: 45px;
//   height: 45px;
//   border-radius: 4px;
//   margin-bottom: 6px;
//   margin-top: 4px;
//   ${'' /* margin-left: 12px;
//   margin-right: 12px; */}
//   opacity: 1;
//   position: relative;
//   cursor: pointer;
//   border: 1px solid var(--black);
//   transition: all 200ms ease-in-out;

//   img {
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     position: absolute;
//     object-fit: cover;
//     opacity: 0.6;
//     transition: all 200ms ease-in-out;
// }

//   .img-active {
//     opacity: 0.9;
//   }

//   &.active {
//     border: 1.5px solid var(--neon-pink);
//     transform: scale(1.04)
//     ${'' /* width: 110px;
//     height: 110px; */}
//   }

//   @media(min-width: 768px) {
//     width: 120px;
//   height: 120px;
//   margin-left: 12px;
//   margin-right: 12px;


//   }
// `

const ProjectSelectedStyle = styled.div`

  display: flex;
  width: 85%;

  ${'' /* padding-left: 80px; */}


  .img-selected {
    width: 200px;
    ${'' /* height: 60%; */}
    position: relative;
    opacity: 1;
  ${'' /* border: 1px solid var(--black); */}
  }

  img {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.8;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  }

  .project-informations {
    width: 30%;
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

  @media(min-width: 768px) {
    margin-left: 80px;

  }

`


const Projects = () => {

  const [active, setActive] = useState(1);
  console.log(active)


  return (
    <section id="projects">
        <p className='section-title'>Mes projets</p>
      <ProjetsListContainerStyle>
        <ProjectListStyle>
          {projectsData.map(project => (
            <li><Button className={project.id === +active ? "active" : ""} onClick={(e) => setActive(e.target.id)} id={project.id}>{project.name}</Button></li>
          ))}
        </ProjectListStyle>
        {/* <ProjectListStyle>
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
        </ProjectListStyle> */}
        <ProjectSelectedStyle className='selected-project'>
          {projectsData.filter(selected => selected.id === +active).map(project => (
            <>
              <div className='img-selected'>
                <img src={`${process.env.PUBLIC_URL}/images/${project.poster}`} alt={project.name} id={project.id}/>
              </div>
              <div>
                <h3>{project.name} / {project.date}</h3>
                <div className='project-informations'>
                  <a href={project.url}><ExternalLink height={24} width={24}/></a>
                  <a href={project.github}><Github height={24} width={24} /></a>
                </div>
                <div className='tags-container'>
                  {project.tech.map(techno => (<p className='techno-tag'>{techno}</p>))}
                </div>
                <p>{project.notice}</p>
              </div>
            </>
          ))}
        </ProjectSelectedStyle>
      </ProjetsListContainerStyle>
    </section>
  )
};

export default Projects;

        // style={{backgroundImage: `linear-gradient(to bottom, rgba(28,26,28,0.5), rgba(247,31,102,0.2)), url(${`${process.env.PUBLIC_URL}/images/${project.illustration}`})`}}>
