const projectsData = [
  {
    id: 1,
    name: 'ExpoPlus',
    notice: "ExpoPlus propose à l'utilisateur une sélection des meilleures expositions (selon les notes attribuées par la communauté) correspondant à ses goûts et sa géolocalisation. Une fois l'expo trouvée, il peut la mettre en favori et lancer une proposition de sortie aux autres utilisateurs. Les données des expositions sont parsées depuis d'API de la Mairie de Paris. ExpoPlus a été développée à quatre dans le cadre des deux dernières semaines de formation au Wagon. L'app est uniquement adaptée au format mobile.",
    date: 'Juin 2022',
    features: ['requête API', 'Geolocalisation', 'Authentification', 'Filtres multicritères', 'Search'],
    tech: ['RubyOnRails', 'Ruby', 'Stimulus', 'PostgreSQL', 'Bootstrap', 'Scss'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "expoplus-cover.png",
    illustration: "expo-plus-screen.png",
    github: "https://github.com/Linabemu/expo-plus",
    url: "https://expo-plus.herokuapp.com/"
  },
  {
    id: 2,
    name: 'PaperApp',
    notice: "PaperApp est un projet personnel. J'ai voulu créer une app permettant de regrouper ses articles de presse préférés en un seul endroit, et de les partager aux autres utilisateurs en déposant simplement l'url source. Après vérification regex de la validité de l'url, les données (titre, contenu, photo, source) sont automatiquement scrappées. Le design est très simple, mais l'appli est bien responsive.",
    date: 'Août 2022',
    features: ['Scrapping', 'Authentification'],
    tech: ['RubyOnRails', 'Ruby', 'Bootstrap'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "paperapp-cover.png",
    illustration: "paper-app-pic.png",
    github: "https://github.com/noleni/rails-papers-app",
  },
  {
    id: 3,
    name: 'DreamYourMeal',
    notice: "J'ai codé Dream Your Meal pendant mon apprentissage de React. Il n'y a aucune base de donnée, simplement un front permettant d'ajouter des articles au panier. Le panier s'ouvre dans une modal (portal). Un contexte gère l'ensemble des données du panier.",
    date: 'Septembre 2022',
    features: [],
    tech: ['React', 'JavaScript'],
    packages: ['Devise', 'Pundit', 'Cloudinary', 'FlatPicket', 'Mapbox'],
    poster: "dreamyourmeal-cover.png",
    illustration: "expo-plus-two-screens.png",
    github: "https://github.com/noleni/react-fake-marketplace"
  },
  {
    id: 4,
    name: 'Portfolio',
    notice: "Vous y êtes ! Mon portfolio est développé entièrement en React. J'ai utilisé styledComponents et Sass pour le design.",
    date: 'Octobre 2022',
    features: [],
    tech: ['React', 'JavaScript', 'Scss', 'StyledComponents'],
    packages: [],
    poster: "paper-app-screen.png",
    illustration: "expo-plus-two-screens.png",
    github: "https://github.com/noleni/portfolio"
  },
]

export default projectsData;
