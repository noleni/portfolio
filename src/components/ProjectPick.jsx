import Button from './UI/Button';

import styled from 'styled-components';

const ProjectPicStyle = styled.ul`
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

const ProjectPic = ({data, activeState, onClick}) => {
  return (
    <ProjectPicStyle>
    <p className='section-title'>Mes projets</p>
      {data.map(project => (
        <li key={project.id}>
          <Button
            className={project.id === activeState ? "active" : ''}
            onClick={onClick}
            id={project.id}>
            {project.name}
          </Button>
        </li>
      ))}
    </ProjectPicStyle>
  )
};

export default ProjectPic;
