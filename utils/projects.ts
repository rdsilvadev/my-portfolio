import { Project } from "../interface";
import AmazonClone from "./../public/static/images/projects/amazon-clone.png";
import Covid from "./../public/static/images/projects/covid.png";
import Cryptobase from "./../public/static/images/projects/cryptobase.png";
import NextMovies from "./../public/static/images/projects/next-movies.png";
import PomodoroApp from "./../public/static/images/projects/pomo-app.png";
import WeatherApp from "./../public/static/images/projects/weather-app.png";
import Pizzahub from "./../public/static/images/projects/pizzahub.png";
import Portfolio from "./../public/static/images/projects/portfolio.png";

export const projects: Project[] = [
  {
    name: "next-movies",
    heading: "Next-Movies - All about movies",
    paragraphs: [
      "This is a Movies App built using Next.js, React and The Movie Database (TMDB) API."
    ],
    tech: [
      "Nextjs",
      "Redux",
      "Redux Thunk",
      "React",
      "API",
      "Redaxios",
    ],
    source: "https://github.com/rdsilvadev/next-movies",
    live: "https://rdsilvadev-next-movies.netlify.app/",
    image: NextMovies,
  },

  {
    name: "covidtracker",
    heading:
      "Covid Tracker - Covid details for countries, continents, and the world in general.",
    paragraphs: [
      "Covid Tracker gives short covid information of countries, continents, and the world in general. It is a 5-page project in which one of the pages compares data.",
    ],
    tech: ["Nextjs", "SCSS", "Tailwindcss", "API"],
    source: "https://github.com/rdsilvadev/covidtracker",
    live: "https://rdsilvadev-covidtracker.netlify.app/",
    image: Covid,
  },

  {
    name: "cryptobase",
    heading:
      "Cryptobase - Home of cryptocurrencies, NFTs, exchanges, and crypto news",
    paragraphs: [
      "CryptoBase provides basic information about popular coins in the world, the latest crypto news and popular exchanges website.",
      "Users can filter out coins and check the coin's history in form of a simple graph.",
    ],

    tech: ["Nextjs", "Express.js", "Firebase", "Tailwindcss", "API"],
    source: "https://github.com/rdsilvadev/cryptobase/",
    live: "https://rdsilvadev-cryptobase.netlify.app/",
    image: Cryptobase,
  },

  {
    name: "amazon-clone",
    heading: "Amazon Clone",
    paragraphs: [
      "An Amazon Clone with Firebase Authentication used to create account and login + stripe js payment gateway.",
    ],
    tech: ["React", "Styled-Components", "Redux", "Contax API", "Firebase", "Material UI", "Stripe js"],
    source: "https://github.com/rdsilvadev/amazon-clone",
    live: "https://rdsilvadev-amazon-clone.netlify.app/",
    image: AmazonClone,
  },

  {
    name: "Weather App",
    heading: "Weather App - Weather in your current location.",
    paragraphs: [
      "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
    ],
    tech: ["Nextjs", "Express.js", "Tailwindcss", "API"],
    source: "https://github.com/rdsilvadev/weather-app",
    live: "https://rdsilvadev-weather-app.netlify.app/",
    image: WeatherApp,
  },
  {
    name: "Pomodoro App",
    heading: "Pomodoro App - Bring structure to your workflow using the time blocking technique.",
    paragraphs: [
      "Time blocking is an effective strategy for using time wisely and getting better results. Blocking out time for specific activities allows you to focus on one task at a time, limit distractions and procrastination.",
    ],
    tech: ["React", "Apex Component Library", "Context API", "UseReducer Hook", "LocalStorage"],
    source: "https://github.com/rdsilvadev/pomo-app",
    live: "https://rdsilvadev-pomo-app.netlify.app/",
    image: PomodoroApp,
  },
  {
    name: "Pizzahub",
    heading: "Pizzahub - A web application for a fake pizzeria",
    paragraphs: [
      "This is a simple pizza ordering application created with React, Nextjs and Tailwind css.",
    ],
    tech: ["Nextjs", "Tailwindcss", "Context-API", "React"],
    source: "https://github.com/rdsilvadev/pizzahub",
    live: "https://rdsilvadev-pizzahub.netlify.app/",
    image: Pizzahub,
  },
  {
    name: "My Portfolio",
    heading: "My Portfolio",
    paragraphs: [
      "Showcasing my skills and projects.",
    ],
    tech: ["React", "TypeScript", "Styled-Components"],
    source: "https://github.com/rdsilvadev/my-portfolio",
    live: "https://rdsilvadev-portfolio.netlify.app/",
    image: Portfolio,
  },
];
