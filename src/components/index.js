import {
  adobeps,
  adobexd,
  aiken,
  apache,
  aws,
  azure,
  cardano,
  clojure,
  coreldraw,
  datomic,
  django,
  docker,
  dynamodb,
  elasticsearch,
  ethereum,
  etherjs,
  figma,
  firebase,
  flutter,
  foundry,
  gatsby,
  gcp,
  go,
  graphql,
  grpc,
  haskell,
  heroku,
  html,
  ionic,
  java,
  javascript,
  kafka,
  kotlin,
  kubernetes,
  ledger,
  lucid,
  mariadb,
  mongodb,
  mysqldb,
  nativescript,
  netlify,
  nextjs,
  ogmios,
  oracledb,
  oura,
  oxsequence,
  php,
  plutarch,
  plutus,
  postgresql,
  python,
  rabbitmq,
  reactjs,
  redis,
  rest,
  sketch,
  solidity,
  spring,
  teraform,
  trezor,
  typescript,
  undraw,
  visilly,
} from "../assets/tools";
import Navbar from "./Navbar";
import Button from "./button";
import StackSelector from "./stack-selector";

export { Navbar, Button, StackSelector };

export const navLinks = [
  {
    name: "Home",
    href: "/",
    id: 1,
  },

  {
    name: "About Us",
    href: "/aboutus",
    id: 2,
  },

  {
    name: "Blog",
    href: "/blog",
    id: 3,
  },

  {
    name: "Services",
    href: "/services",
    id: 4,
  },

  {
    name: "Contact Us",
    href: "/contactus",
    id: 5,
  },
];

export const selector = [
  {
    id: 1,
    title: "Frontend",
    images: [
      {
        id: 1,
        name: "JavaScript",
        image: javascript,
      },

      {
        id: 2,
        name: "TypeScript",
        image: typescript,
      },

      {
        id: 3,
        name: "Next.js",
        image: nextjs,
      },

      {
        id: 4,
        name: "React",
        image: reactjs,
      },

      {
        id: 5,
        name: "Html/CSS",
        image: html,
      },

      {
        id: 6,
        name: "Gatsby",
        image: gatsby,
      },
    ],                                                                                                                                
  },

  {
    id: 2,
    title: "UI/UX",
    images: [
      {
        id: 1,
        name: "Figma",
        image: figma,
      },

      {
        id: 2,
        name: "Visilly",
        image: visilly,
      },

      {
        id: 3,
        name: "Adobe XD",
        image: adobexd,
      },

      {
        id: 4,
        name: "Adobe Photoshop",
        image: adobeps,
      },

      {
        id: 5,
        name: "CorelDraw",
        image: coreldraw,
      },

      {
        id: 6,
        name: "Sketch",
        image: sketch,
      },

      {
        id: 7,
        name: "UnDraw",
        image: undraw,
      },
    ],
  },

  {
    id: 3,
    title: "Backend",
    images: [
      {
        id: 1,
        name: "JavaScript",
        image: javascript,
      },

      {
        id: 2,
        name: "TypeScript",
        image: typescript,
      },

      {
        id: 3,
        name: "Java",
        image: java,
      },

      {
        id: 4,
        name: "Python",
        image: python,
      },

      {
        id: 5,
        name: "PHP",
        image: php,
      },

      {
        id: 6,
        name: "Django",
        image: django,
      },

      {
        id: 7,
        name: "Golang",
        image: go,
      },

      {
        id: 8,
        name: "Spring",
        image: spring,
      },

      {
        id: 9,
        name: "Kotlin",
        image: kotlin,
      },

      {
        id: 10,
        name: "Haskell",
        image: haskell,
      },

      {
        id: 11,
        name: "Solidity",
        image: solidity,
      },

      {
        id: 12,
        name: "Clojure",
        image: clojure,
      },
    ],
  },

  {
    id: 4,
    title: "Database",
    images: [
      {
        id: 1,
        name: "MongoDB",
        image: mongodb,
      },

      {
        id: 2,
        name: "PostgreSQL",
        image: postgresql,
      },

      {
        id: 3,
        name: "DynamoDB",
        image: dynamodb,
      },

      {
        id: 4,
        name: "Datomic",
        image: datomic,
      },

      {
        id: 5,
        name: "Firebase",
        image: firebase,
      },

      {
        id: 6,
        name: "Redis",
        image: redis,
      },

      {
        id: 7,
        name: "Elasticsearch",
        image: elasticsearch,
      },

      {
        id: 8,
        name: "Oracle Database",
        image: oracledb,
      },

      {
        id: 9,
        name: "MySQL Database",
        image: mysqldb,
      },

      {
        id: 10,
        name: "MariaDB",
        image: mariadb,
      },

      {
        id: 11,
        name: "Apache Cassandra",
        image: apache,
      },
    ],
  },

  {
    id: 5,
    title: "Cloud",
    images: [
      {
        id: 1,
        name: "AWS",
        image: aws,
      },

      {
        id: 2,
        name: "Azure",
        image: azure,
      },

      {
        id: 3,
        name: "GCP",
        image: gcp,
      },

      {
        id: 4,
        name: "Docker",
        image: docker,
      },

      {
        id: 5,
        name: "Heroku",
        image: heroku,
      },

      {
        id: 6,
        name: "Kubernetes",
        image: kubernetes,
      },

      {
        id: 7,
        name: "Terraform",
        image: teraform,
      },

      {
        id: 8,
        name: "Netlify",
        image: netlify,
      },

      {
        id: 9,
        name: "Oracle Database",
        image: oracledb,
      },
    ],
  },

  {
    id: 6,
    title: "Messaging",
    images: [
      {
        id: 1,
        name: "GraphQL",
        image: graphql,
      },

      {
        id: 2,
        name: "Kafka",
        image: kafka,
      },

      {
        id: 3,
        name: "gRPC",
        image: grpc,
      },

      {
        id: 4,
        name: "Rest",
        image: rest,
      },

      {
        id: 5,
        name: "RabbitMQ",
        image: rabbitmq,
      },
    ],
  },

  {
    id: 7,
    title: "Blockchain",
    images: [
      {
        id: 1,
        name: "ether.js",
        image: etherjs,
      },

      {
        id: 2,
        name: "0xSequence",
        image: oxsequence,
      },

      {
        id: 3,
        name: "Cardano",
        image: cardano,
      },

      {
        id: 4,
        name: "Foundry",
        image: foundry,
      },

      {
        id: 5,
        name: "Ethereum",
        image: ethereum,
      },

      {
        id: 6,
        name: "Trezor",
        image: trezor,
      },

      {
        id: 7,
        name: "Plutus",
        image: plutus,
      },

      {
        id: 8,
        name: "Ledger",
        image: ledger,
      },

      {
        id: 9,
        name: "Plutarch",
        image: plutarch,
      },

      {
        id: 10,
        name: "Aiken",
        image: aiken,
      },

      {
        id: 11,
        name: "Oura",
        image: oura,
      },

      {
        id: 12,
        name: "Lucid",
        image: lucid,
      },

      {
        id: 13,
        name: "Ogmios",
        image: ogmios,
      },

      {
        id: 14,
        name: "Solidity",
        image: solidity,
      },
    ],
  },

  {
    id: 8,
    title: "Mobile",
    images: [
      {
        id: 1,
        name: "Flutter",
        image: flutter,
      },

      {
        id: 2,
        name: "React Native",
        image: reactjs,
      },

      {
        id: 3,
        name: "Nativescript",
        image: nativescript,
      },

      {
        id: 4,
        name: "Ionic",
        image: ionic,
      },
    ],
  },
];
