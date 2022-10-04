import projectsData from "../../data/projectsData";

const Projects = () => {
  return (
  <ul>
    {projectsData.map((project) => (
      <li key={project.id}>
        {project.name}
      </li>
    ))}
  </ul>
  )
};

export default Projects;
