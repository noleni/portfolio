import React from "react";

import projectsData from "../../data/projectsData";
import ProjectActive from "../Project";

import styled from "styled-components";

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  margin-bottom: 60px;
  background-color: var(--pure-white);

  .section-title {
    padding: 0 30px;
  }

  @media (min-width: 576px) {
    padding-top: 30px;

    .section-title {
      padding: 0 60px;
    }
  }
`;

const Projects = React.forwardRef((props, ref) => {
  return (
    <ProjectsSection id="projects" ref={ref}>
      <p className="section-title">03. Side projects</p>
      <ProjectActive data={projectsData} activeState={true} />
    </ProjectsSection>
  );
});

export default Projects;
