import { differenceInMonths } from 'date-fns';

const professionalXpData = [
  {
    logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_rakuten.jpg/1598px-Logo_rakuten.jpg",
    society : "Rakuten France",
    job : "Full Stack developer",
    cityCountry : "Paris, France",
    duration : differenceInMonths(new Date(), new Date('2022-11-07'))
  },
  {
    logo : "https://www.colline.fr/sites/default/files/inline-images/logo-cinemateque-francaise.jpg",
    society : "La Cinémathèque française",
    job : "Responsable billetterie / Etude des publics",
    cityCountry : "Paris, France",
    duration : "7 ans"
  },
  {
    logo : "https://www.lighthousecinema.co.nz/typo3conf/ext/site/Resources/Public/Images/logo.svg",
    society : "LightHouse Cinema Cuba",
    job : "Chargée de billetterie / Location d'espaces",
    cityCountry : "Wellington, Nouvelle-Zélande",
    duration : "6 mois"
  }
]

export default professionalXpData;
