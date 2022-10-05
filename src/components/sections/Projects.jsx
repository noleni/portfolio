import projectsData from "../../data/projectsData";
import styled from 'styled-components';

const ProjetsListStyle = styled.ul`
  width: 90%;
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items:center;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ProjectCardStyle = styled.li`
  width: 90%;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 12px;
  margin-top: 22px;
  ${'' /* display: flex; */}
  background-color: #141414;
  opacity: 0.7;
  position: relative;
  cursor: pointer;

  @media(min-width: 768px) {
    width: 260px;

  }


  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
    transition: filter 0.5s ease-in-out;
    filter: saturate(10%);
  }
`

const Projects = () => {
  return (
  <section id="projects">
  <ProjetsListStyle>
    {projectsData.map((project) => (
      <ProjectCardStyle key={project.id}>
        <img src={`${process.env.PUBLIC_URL}/images/${project.illustration}`} alt={project.name}/>
        <div className="project-info">
        </div>
        <div className="project-img">
        </div>
        {project.name}
      </ProjectCardStyle>
    ))}
  </ProjetsListStyle>
  </section>
  )
};

export default Projects;

        // style={{backgroundImage: `linear-gradient(to bottom, rgba(28,26,28,0.5), rgba(247,31,102,0.2)), url(${`${process.env.PUBLIC_URL}/images/${project.illustration}`})`}}>
