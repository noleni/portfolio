import { differenceInMonths } from 'date-fns';

const professionalXpData = {
   dev: [
    {
      isFlipped : false,
      current : true,
      logo : "https://cdn.daily.paris/apps/daily.paris/600/600/daily.paris-16",
      society : "Daily d'initiés",
      contract : "CDI",
      job : "Frontend developer",
      cityCountry : "Paris, France",
      website: "https://www.daily.paris/home",
      duration : `${differenceInMonths(new Date(), new Date('2023-10-02'))} mois`,
      societyDescription: "Daily d’initiés est l’éditeur indépendant de logiciels de consultation et d’analyse des audiences pour les médias."
    },
    {
      isFlipped : false,
      current : false,
      logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_rakuten.jpg/1598px-Logo_rakuten.jpg",
      society : "Rakuten France",
      contract : "CDI",
      job : "Full Stack developer",
      cityCountry : "Paris, France",
      website: "https://fr.shopping.rakuten.com/",
      duration : `${differenceInMonths(new Date('2023-09-30'), new Date('2022-11-07'))} mois`,
      societyDescription: "Rakuten France est une filiale du groupe japonais Rakuten, Inc. qui opère dans le e-commerce, les services financiers, les médias et les communications."
    },
],
  noDev: [
    {
      isFlipped : false,
      current : false,
      logo : "https://www.colline.fr/sites/default/files/inline-images/logo-cinemateque-francaise.jpg",
      society : "La Cinémathèque française",
      contract : "CDI",
      job : "Responsable billetterie / Etude des publics",
      cityCountry : "Paris, France",
      website: "https://www.cinematheque.fr/",
      duration : "7 ans",
      societyDescription: "La Cinémathèque française est un organisme culturel consacré au cinéma."
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
      duration : "6 mois",
      societyDescription: "Le LightHouse Cinema Cuba est un cinéma indépendant situé à Wellington, en Nouvelle-Zélande."
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
      duration : "1 an",
      societyDescription: "La Ligue de l'enseignement est une fédération d'associations laïques complémentaires de l'enseignement public."
    }
  ]
}

export default professionalXpData;
