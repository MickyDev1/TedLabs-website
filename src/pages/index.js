import { backend, dataAnalytics, frontend } from "../assets";
import Home from "./Home";

export { Home };

export const challenge = [
  {
    id: 1,
    title: "Frontend",
    description:
      "Our frontend developers understand the delicate balance between aesthetics and functionality.",
    image: frontend,
  },

  {
    id: 2,
    title: "Backend",
    description:
      "Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.",
    image: backend,
  },

  {
    id: 3,
    title: "Data Analysts",
    description:
      "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
    image: dataAnalytics,
  },
];
