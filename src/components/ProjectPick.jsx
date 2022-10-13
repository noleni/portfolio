import Button from './UI/Button';

import styled from 'styled-components';

const ProjectPicStyle = styled.ul`
  display: none;
  padding-left: 0;


  li {
    padding: 10px 60px 10px 0;
  }

  @media(min-width: 768px) {
    display: flex;
    width: 180px;
    flex-direction: column;
    padding-right: 0px;
  }
`;

const ProjectPic = ({data, activeState, onClick}) => {
  return (

    <ProjectPicStyle>
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
