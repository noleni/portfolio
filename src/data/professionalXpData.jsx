import { differenceInMonths } from 'date-fns';

const professionalXpData = [
  {
    isFlipped : false,
    current : true,
    logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_rakuten.jpg/1598px-Logo_rakuten.jpg",
    society : "Rakuten France",
    contract : "CDI",
    job : "Full Stack developer",
    cityCountry : "Paris, France",
    website: "https://fr.shopping.rakuten.com/",
    duration : `${differenceInMonths(new Date(), new Date('2022-11-07'))} mois`
  },
  {
    isFlipped : false,
    current : false,
    logo : "https://www.colline.fr/sites/default/files/inline-images/logo-cinemateque-francaise.jpg",
    society : "La Cinémathèque française",
    contract : "CDI",
    job : "Responsable billetterie / Etude des publics",
    cityCountry : "Paris, France",
    website: "https://www.cinematheque.fr/",
    duration : "7 ans"
  },
  {
    isFlipped : false,
    current : false,
    logo : "https://www.lighthousecinema.co.nz/typo3conf/ext/site/Resources/Public/Images/logo.svg",
    society : "LightHouse Cinema Cuba",
    contract : "CDD",
    job : "Chargée de billetterie / Location d'espaces",
    cityCountry : "Wellington, Nouvelle-Zélande",
    website: "https://www.lighthousecinema.co.nz/",
    duration : "6 mois"
  },
  {
    isFlipped : false,
    current : false,
    logo : "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/LogoLigueEnseignement.svg/langfr-440px-LogoLigueEnseignement.svg.png",
    society : "Ligue de l'enseignement",
    contract : "Service civique",
    job : "Médiatrice culturelle",
    cityCountry : "Paris, France",
    website: "https://ligueparis.org/",
    duration : "1 an"
  }
]

export default professionalXpData;
