const projectsData = [
  {
    id: 1,
    name: 'ExpoPlus',
    notice: "ExpoPlus propose à l'utilisateur une sélection des meilleures expositions (selon les notes attribuées par la communauté) correspondant à ses goûts et sa géolocalisation. Une fois la pépite trouvée, il peut la mettre en favori et lancer une proposition de sortie aux autres utilisateurs. Les données des expositions sont parsées depuis d'API de la Mairie de Paris. ExpoPlus a été développée en équipe de quatre dans le cadre des deux dernières semaines de formation au Wagon.",
    date: 'Juin 2022',
    features: ['requête API', 'Geolocalisation', 'Authentification', 'Filtres multicritères', 'Search'],
    tech: ['Ruby On Rails', 'Ruby', 'Stimulus', 'PostgreSQL', 'Bootstrap', 'Scss'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "expo-plus-cover.png",
    illustration: "expo-plus-screen.png",
    github: "https://github.com/Linabemu/expo-plus",
    url: "https://expo-plus.herokuapp.com/"
  },
  {
    id: 2,
    name: 'PaperApp',
    notice: "PaperApp est un projet personnel. J'ai voulu créer une app permettant de partager ses articles de presse préférés, en déposant simplement l'url source. Après vérification regex de la validité de l'url, les données (titre, contenu, photo, source) sont automatiquement scrappées. L'app est responsive.",
    date: 'Août 2022',
    features: ['Scrapping', 'Authentification'],
    tech: ['Ruby On Rails', 'Ruby', 'Stimulus'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "paper-app-screen.png",
    illustration: "paper-app-pic.png",
    github: "https://github.com/noleni/rails-papers-app",
  },
  {
    id: 3,
    name: 'Dream Your Meal',
    notice: "J'ai codé Dream Your Meal pendant mon apprentissage de React. Il n'y a aucune base de donnée, simplement un front permettant d'ajouter des articles au panier. Le panier s'ouvre dans une modal (portal). Un contexte gère l'ensemble des données du panier.",
    date: 'Septembre 2022',
    features: [],
    tech: ['React', 'JavaScript'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "paper-app-screen.png",
    illustration: "expo-plus-two-screens.png",
    github: "https://github.com/noleni/react-fake-marketplace"
  },
  {
    id: 4,
    name: 'Portfolio',
    notice: "Vous y êtes ! Mon portfolio est développé entièrement en React.",
    date: 'Octobre 2022',
    features: [],
    tech: ['React', 'JavaScript', 'Scss'],
    packages: [],
    poster: "paper-app-screen.png",
    illustration: "expo-plus-two-screens.png",
    github: "https://github.com/noleni/portfolio"
  },
]

export default projectsData;
