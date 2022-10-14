import React, { useState } from 'react';

import projectsData from "../../data/projectsData";
import ProjectPic from '../ProjectPick';
import ProjectActive from '../ProjectActive';

import styled from 'styled-components';


const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  margin-bottom: 60px;

  .project {
    display: flex;
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
    <ProjectsSection id="projects" ref={ref}>
      <p className='section-title'>02. Mes projets</p>
      <div className="project">
      <ProjectPic
        data={projectsData}
        activeState={+active}
        onClick={(e) => setActive(e.target.id)}
      />
      <ProjectActive
        data={projectsData}
        activeState={+active}
        onLeftClick={leftProjectHandler}
        onRightClick={rightProjectHandler}
      />
      </div>
    </ProjectsSection>
  )
});

export default Projects;
