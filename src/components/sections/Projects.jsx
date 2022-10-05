import projectsData from "../../data/projectsData";

const Projects = () => {
  return (
  <section id="projects">
  <ul>
    {projectsData.map((project) => (
      <li key={project.id}>
        {project.name}
      </li>
    ))}
  </ul>
  </section>
  )
};

export default Projects;
