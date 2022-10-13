import styled from "styled-components";

import LeftSvg from "./icons/SVG/LeftSvg";
import RightSvg from "./icons/SVG/RightSvg";
import ExternalLink from "./icons/SVG/ExternalLink";
import Github from "./icons/SVG/Github";

const ProjectSelectedStyle = styled.div`
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding-left: 0;

  & .img-selected {
    width: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    position: relative;
    margin: 12px 0 32px 0px;
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

  & .project-notice {
    padding: 8px;
    margin-top: 0;
    font-size: 14px;
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

  @media(min-width: 576px) {
    box-shadow: 0 0 0px rgba(0,0,0,0);
    border-radius: 0;

    .img-selected {
      margin-left: 0;
    }
  }

  @media(min-width: 768px) {
    box-shadow: 0 0 0px rgba(0,0,0,0);
    border-radius: 0;
    border-left: 1.5px solid var(--dark-blue);
    padding-left: 80px;
    border-top: 0;
    border-bottom: 0;
    box-shadow: 0;

    .project-informations {
      justify-content: start;
    }

    .tags-container, .project-links {
      justify-content: start;
    }

    .img-selected {
      width: 80%;
      margin-left: 0;
    }
  }
`;

const Image = styled.img`
    width: 100%;
    backgroundSize: cover;
    object-fit: cover;
    opacity: 1;
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    padding: 4px 0 4px 0;
`


const ProjectActive = ({data, activeState, onLeftClick, onRightClick}) => {
  return (
    <ProjectSelectedStyle className='selected-project'>
    {data.filter(selected => selected.id === +activeState).map(project => (
      <div key={project.id}>
          <div className="project-informations" >
            <LeftSvg
              heigth={40}
              width={40}
              onClick={onLeftClick}
              className="left-effet hover-neon"
            />
            <div className='project-informations-title-and-date'>
              <h3 className='project-informations-title'>{project.name}</h3>
              <p>{project.date}</p>
            </div>
            <RightSvg
              heigth={40}
              width={40}
              onClick={onRightClick}
              className="right-effet hover-neon"
            />
          </div>

          <div className='img-selected-tags-container'>
            <div className='img-selected'>
              <Image
                src={`${process.env.PUBLIC_URL}/images/${project.poster[1]}`}
                alt={project.name}
                id={project.id}
              />
            </div>

            <div className='tags-container'>
              {project.tech.map((techno, i) => (techno))}
            </div>
          </div>

        <p className='project-notice'>{project.notice}</p>

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
      </div>
    ))}

  </ProjectSelectedStyle>
  )
};

export default ProjectActive;
