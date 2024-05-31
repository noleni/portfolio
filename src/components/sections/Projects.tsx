import React, { ForwardedRef } from "react";

import projectsData from "../../data/projectsData";
import Project from "../Project";

import styled from "styled-components";


const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  margin-bottom: 60px;

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

const Projects = React.forwardRef<HTMLDivElement>(
  ({ ...props }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ProjectsSection id="projects" ref={ref}>
      <p className="section-title">03. Side projects</p>
      <Project data={projectsData} />
    </ProjectsSection>
  );
});

export default Projects;
