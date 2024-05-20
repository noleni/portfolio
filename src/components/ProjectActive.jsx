import styled from "styled-components";


const ProjectSelectedStyle = styled.div`
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  display: flex;
  height: fit-content;
  width: 100%;
  flex-wrap: wrap;

  & .project-informations {
    display: flex;
    justify-content: space-between;
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

  }

  @media(min-width: 768px) {
    box-shadow: 0 0 0px rgba(0,0,0,0);

    .project-informations {
      justify-content: start;
    }

    .tags-container, .project-links {
      justify-content: start;
    }

    .img-selected {
      margin-left: 0;
    }
  }
`;

const Image = styled.div`
    width: 50%;
    min-width: 400px;
    height: 300px;
    background-size: cover;
    background-image: url(${props => props.bgSrc});

    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    transition: all 0.5s, -webkit-filter 0.5s, filter 0.5s;

    :hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      z-index: 1;
    }
`;


const ProjectActive = ({data}) => {
  return (
    <ProjectSelectedStyle className="selected-project">
      {data.map((project) => (

          <Image
            key={project.id}
            bgSrc={`${process.env.PUBLIC_URL}/images/${project.poster[1]}`}
            alt={project.name}
            id={project.id}
          >
          <div>Hello</div>
          </Image>


      ))}
    </ProjectSelectedStyle>
  );
};

export default ProjectActive;
