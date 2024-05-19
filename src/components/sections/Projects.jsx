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


  return (
    <ProjectsSection id="projects" ref={ref}>
      <p className='section-title'>03. Mes projets</p>
      <div className="project">
      <ProjectActive
        data={projectsData}
        activeState={true}
      />
      </div>
    </ProjectsSection>
  )
});

export default Projects;
