import React from "react";

import TechTag from "../components/icons/TechTag/TechTag";
import ReactSvg from "../components/icons/SVG/React";
import JavaScriptSvg from "../components/icons/SVG/JavaScriptSvg";
import SassSvg from "../components/icons/SVG/SassSvg";
import ExpressSvg from "../components/icons/SVG/ExpressSvg";
import TypeScriptSvg from "../components/icons/SVG/TypeScriptSvg";

const professionalXpData = [
  {
    current: true,
    society: "Daily d'initiés",
    contract: "CDI",
    job: "Frontend developer",
    cityCountry: "Paris, France",
    website: "https://www.daily.paris/home",
    dateFrom: new Date("2023-10-02"),
    dateTo: new Date(),
    societyDescription:
      "Daily d’initiés est l’éditeur indépendant de logiciels de consultation et d’analyse des audiences pour les médias.",
    technos: [
      <TechTag SVG={<ReactSvg height={18} width={18} />} name={"React"} />,
      <TechTag
        SVG={<TypeScriptSvg height={18} width={18} />}
        name="TypeScript"
      />,
      <TechTag SVG={<SassSvg height={18} width={18} />} name={"Sass"} />,
    ],
  },
  {
    current: false,
    society: "Rakuten France",
    contract: "CDI",
    job: "Full Stack developer",
    cityCountry: "Paris, France",
    website: "https://fr.shopping.rakuten.com/",
    dateFrom: new Date("2022-11-07"),
    dateTo: new Date("2023-09-30"),
    societyDescription:
      "Rakuten France est une filiale du groupe japonais Rakuten, Inc. qui opère dans le e-commerce, les services financiers, les médias et les communications.",
    technos: [
      <TechTag SVG={<ReactSvg height={18} width={18} />} name={"React"} />,
      <TechTag
        SVG={<JavaScriptSvg height={18} width={18} fillcolor="#FFFF" />}
        name={"JavaScript"}
      />,
      <TechTag SVG={<ExpressSvg height={18} width={18} />} name={"Express"} />,
    ],
  },
  {
    current: false,
    society: "La Cinémathèque française",
    contract: "CDI",
    job: "Responsable billetterie",
    cityCountry: "Paris, France",
    website: "https://www.cinematheque.fr/",
    dateFrom: new Date("2015-02-01"),
    dateTo: new Date("2021-10-31"),
    societyDescription:
      "La Cinémathèque française est un organisme culturel consacré au cinéma.",
  },
  {
    current: false,
    society: "LightHouse Cinema Cuba",
    contract: "CDD",
    job: "Chargée de billetterie",
    cityCountry: "Wellington, Nouvelle-Zélande",
    website: "https://www.lighthousecinema.co.nz/",
    dateFrom: new Date("2014-04-01"),
    dateTo: new Date("2014-11-30"),
    societyDescription:
      "Le LightHouse Cinema Cuba est un cinéma indépendant situé à Wellington, en Nouvelle-Zélande.",
  },
  {
    current: false,
    society: "Ligue de l'enseignement",
    contract: "Service civique",
    job: "Médiatrice culturelle",
    cityCountry: "Paris, France",
    website: "https://ligueparis.org/",
    dateFrom: new Date("2012-10-01"),
    dateTo: new Date("2013-09-30"),
    societyDescription:
      "La Ligue de l'enseignement est une fédération d'associations laïques complémentaires de l'enseignement public.",
  },
];

export default professionalXpData;
