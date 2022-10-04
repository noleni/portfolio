import More from "../More";

const Home = (props) => {
  return (
    <section >
      <div>
        <p>Bonjour, je suis</p>
        <h1 className={props.h1Class}>Marine Ramillon,</h1>
        <h2 className={props.h2Class}>Développeuse web en quête d'opportunités.</h2>
      </div>
      <button className={props.btnClass}>Me contacter</button>
      <More
        className={props.projectsClass}
        arrowClassName="down-effect"
        text="Pour en savoir plus">
      </More>
    </section>
  )
};

export default Home;
