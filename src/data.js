import { DiReact } from "react-icons/di";
import { SiPhp, SiTypescript, SiGit } from "react-icons/si";

const header = {
  homepage: "",
  title: "AM",
};

const about = {
  name: "Amel",
  role: "Développeuse Fullstack JS",
  description:
    "Salut moi c'est Amel 😃 Développeuse web, j'ai travailler sur pendant 2 ans sur des projets Drupal. Maintanant je me lance dans le Javascript, mon langage de coeur ❤️‍🔥 ",
  social: {
    linkedin: "https://www.linkedin.com/in/amel-mennad/",
    github: "https://github.com/amelmennad",
  },
  skillsDescription:
    "J'ai eu l'occasion de travailler sur de nombreux projets aux langages et aux technologies différentes. Retrouver ici certaines de ces technologies ",
  email: "mennad.amel@icloud.com",
};

const projects = [
  {
    title: "Marvel",
    description:
      "Site recensant les comics et personnages Marvel via l'API Marvel le réacteur. Les utilisateurs peuvent créer un compte pour l'enregistrement et la gestion de leurs favoris.",
    tags: ["React", "Express", "MongoDB", "API Marvel"],
    image: "/images/portfolio.jpg",
    sourceCode: "https://github.com/amelmennad/marvel-font-react",
    livePreview: "https://marvel-font-react.netlify.app/",
    id: 1,
  },
  {
    title: "Frangibus",
    description:
      "Développement du site web d'un restaurant de A à Z avec un backoffice permet la gérer du menu, un calendrier d'événement et un système de réservation en ligne.",
    tags: ["Gatsby", "Tailwind css", "Express", "MongoDB"],
    image: "/images/portfolio.jpg",
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    title: "Générateur d'idée de projet dev",
    description:
      " Développement d'un site proposant des idées de projets de manière aléatoire ou selon des filtres défini par l'utilisateur. Compte utilisateur permettant le suivis des projets",
    tags: ["Next.js", "React", "PHP", "Express", "MySQL"],
    image: "/images/portfolio.jpg",
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const languages = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => (
      <>Currently working with Dart & Flutter for app development. </>
    ),
  },
  {
    slug: "typeScript",
    Component: SiTypescript,
    title: "TypeScript",
  },
  {
    slug: "php",
    Component: SiPhp,
    title: "PHP",
  },
];

const tools = [
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
  },
];

const timeLineData = [
  { year: 2018, text: "Mes début en développement web" },
  { year: 2019, text: "Mon premier poste en temps que développeuse" },
  { year: 2022, text: "Lancement de la spécialisation Javascript " },
  { year: 2022, text: "🤞 Poste de déveleloppeuse JavaScript" },
  { year: "after", text: "🔮 seule l'avenir le sait " },
];
export { header, about, projects, languages, tools, timeLineData };
