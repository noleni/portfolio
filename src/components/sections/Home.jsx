import More from "../More";
import Button from "../UI/Button";
import styled from 'styled-components';

const HomesGreetingStyles = styled.p`
  @media(max-width: 576px) {
    display : none;
  }
`;

const Home = (props) => {
  return (
    <section>
      <div>
        <HomesGreetingStyles>Bonjour, je suis</HomesGreetingStyles>
        <h1 className={props.h1Class}>Marine Ramillon,</h1>
        <h2 className={props.h2Class}>Développeuse web en quête d'opportunités.</h2>
      </div>
      <Button className={props.btnClass}>Me contacter</Button>
      <More
        className={props.projectsClass}
        arrowClassName="down-effect"
        text="Pour en savoir plus">
      </More>
    </section>
  )
};

export default Home;
