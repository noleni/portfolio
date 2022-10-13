import TechTag from "../components/icons/TechTag/TechTag";

import RubySvg from "../components/icons/SVG/RubySvg";
import RailsSvg from "../components/icons/SVG/RailsSvg";
import StimulusSvg from "../components/icons/SVG/StimulusSvg";
import Bootstrap from "../components/icons/SVG/BootstrapSvg";
import SassSvg from "../components/icons/SVG/SassSvg";
import PostgreSvg from "../components/icons/SVG/PostgreSvg";
import ReactSvg from "../components/icons/SVG/React";
import JavaScriptSvg from "../components/icons/SVG/JavaScriptSvg";
import StyledComponentsSVG from "../components/icons/SVG/StyledComponentsSVG";


const projectsData = [
  {
    id: 1,
    name: 'ExpoPlus',
    notice: "ExpoPlus propose à l'utilisateur une sélection des meilleures expositions (selon les notes attribuées par la communauté) correspondant à ses goûts et sa géolocalisation. Une fois l'expo trouvée, il peut la mettre en favori et lancer une proposition de sortie aux autres utilisateurs. Les données des expositions sont parsées depuis l'API de la Mairie de Paris. ExpoPlus a été développée à quatre dans le cadre des deux dernières semaines de formation au Wagon. L'app est uniquement adaptée au format mobile.",
    date: 'Juin 2022',
    features: ['requête API', 'Geolocalisation', 'Authentification', 'Filtres multicritères', 'Search'],
    tech: [
      <TechTag SVG={<RubySvg height={22} width={22} />} name={'Ruby'} />,
      <TechTag SVG={<RailsSvg height={22} width={22} />} name={'Rails'} />,
      <TechTag SVG={<StimulusSvg height={22} width={22} />} name={'Stimulus'} />,
      <TechTag SVG={<Bootstrap height={22} width={22} />} name={'Bootstrap'} />,
      <TechTag SVG={<SassSvg height={22} width={22} />} name={'Sass'} />,
      <TechTag SVG={<PostgreSvg height={22} width={22} />} name={'PostgreSQL'} />,
      ],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: ["expoplus-cover.png", "expoplus-cover-large.png"],
    github: "https://github.com/Linabemu/expo-plus",
    url: "https://expo-plus.herokuapp.com/"
  },
  {
    id: 2,
    name: 'PaperApp',
    notice: "PaperApp est un projet personnel. J'ai voulu créer une app permettant de regrouper ses articles de presse préférés en un seul endroit, et de les partager aux autres utilisateurs en déposant simplement l'url source. Après vérification regex de la validité de l'url, les données (titre, contenu, photo, source) sont automatiquement scrappées. Le design est très simple, mais l'appli est bien responsive.",
    date: 'Août 2022',
    features: ['Scrapping', 'Authentification'],
    tech: [
      <TechTag SVG={<RubySvg height={22} width={22} />} name={'Ruby'} />,
      <TechTag SVG={<RailsSvg height={22} width={22} />} name={'Rails'} />,
      <TechTag SVG={<Bootstrap height={22} width={22} />} name={'Bootstrap'} />,
    ],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: ["paperapp-cover.png", "paperapp-cover-large.png"],
    github: "https://github.com/noleni/rails-papers-app",
  },
  {
    id: 3,
    name: 'DreamYourMeal',
    notice: "J'ai codé Dream Your Meal pendant mon apprentissage de React. Il n'y a aucune base de donnée, simplement un front permettant d'ajouter des articles au panier. Le panier s'ouvre dans une modal (portal). Un contexte gère l'ensemble des données du panier.",
    date: 'Septembre 2022',
    features: [],
    tech: [
      <TechTag SVG={<ReactSvg height={22} width={22} />} name={'React'} />,
      <TechTag SVG={<JavaScriptSvg height={22} width={22} />} name={'JavaScript'} />,],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: ["dreamyourmeal-cover.png", "dreamyourmeal-cover-large.png"],
    github: "https://github.com/noleni/react-fake-marketplace"
  },
  {
    id: 4,
    name: 'Portfolio',
    notice: "Vous y êtes ! Mon portfolio est développé entièrement en React. J'ai utilisé styledComponents et Sass pour le design.",
    date: 'Octobre 2022',
    features: [],
    tech: [
      <TechTag SVG={<ReactSvg height={22} width={22} />} name={'React'} />,
      <TechTag SVG={<JavaScriptSvg height={22} width={22} />} name={'JavaScript'} />,
      <TechTag SVG={<SassSvg height={22} width={22} />} name={'Sass'} />,
      <TechTag SVG={<StyledComponentsSVG height={22} width={22} />} name={'Styled Components'} />,
    ],
    packages: [],
    poster: ["portfolio-cover-large.png", "portfolio-cover-large.png"],
    github: "https://github.com/noleni/portfolio"
  },
]

export default projectsData;
