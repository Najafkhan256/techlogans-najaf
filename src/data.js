import { AiFillHtml5 } from "react-icons/ai";
import { BsCodeSlash, BsEye, BsRocketTakeoff } from "react-icons/bs";
import { FaReact, FaNodeJs, FaSass, FaHandHoldingUsd } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import {
  RiBootstrapLine,
  RiGatsbyLine,
  RiJavascriptLine,
} from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import DeepExprtiese from "./images/icons/deep-expertise.png";
import AddValues from "./images/icons/add-value.png";
import RespectTime from "./images/icons/respect-time.png";
import TakeOwnership from "./images/icons/take-ownership.png";
import LiveHealth from "./images/icons/live-healthy.png";
import HaveFun from "./images/icons/have-fun.png";
// services intro imports
import CloudNativeImage from "./images/cloud-native.png";
import ServerlessImage from "./images/serverless.jpg";
import MicroserviceImage from "./images/microservice-architectures.jpg";

// engagement modal
import PorjectOutsourcingImage from "./images/project-outsourcing.jpg";
import EmbeddedTeamImage from "./images/embedded-teams.jpg";
import ConsultingImage from "./images/consulting.jpg";
// all case studdy images

import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import Image from "next/image";

// team image data
import TeamOne from "@/images/staff/muharrem.webp";
import TeamTwo from "@/images/staff/muharrem.webp";
import TeamThree from "@/images/staff/muharrem.webp";
import TeamFour from "@/images/staff/muharrem.webp";

export const ServicesData = [
  {
    icon: <RiJavascriptLine />,
    title: "Javascript",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <FaReact />,
    title: "React js",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next JS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <RiGatsbyLine />,
    title: "gatsby js",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <FaNodeJs />,
    title: "node js",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <SiMongodb />,
    title: "mongo db",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <FaSass />,
    title: "SASS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
  {
    icon: <RiBootstrapLine />,
    title: "Bootstrap 4/5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonRoute: "services",
  },
];

export const coreValuesData = [
  {
    icon: DeepExprtiese,
    title: "Deep Expertise",
    description:
      "We believe in deep expertise and our knowledge is based on a solid understanding of the fundamentals as we go the extra mile to truly understand",
  },
  {
    icon: AddValues,
    title: "Add Value",
    description:
      "Our processes are lean, only focused on adding real value. We strive to add value with each opportunity, improve everything we touch",
  },
  {
    icon: RespectTime,
    title: "Respect Time",
    description:
      "Time is a non-renewable resource, it cannot be created or purchased. We treat time with respect and treat every moment as unique and every deadline with the utmost seriousness",
  },
  {
    icon: TakeOwnership,
    title: "Take Ownership",
    description:
      "We own our work and we see things through. We don’t defer responsibility, we own the outcome of our work",
  },
  {
    icon: LiveHealth,
    title: "Live Healthy",
    description:
      "A healthy mind in a healthy body. We believe we must have a good work-life balance and we believe we are our best selves when we have a healthy physical, social, and personal life",
  },
  {
    icon: HaveFun,
    title: "Have Fun",
    description:
      "We love what we do and we are good at it. We achieve the best outcomes when we enjoy the work",
  },
];
export const servicesIntroData = [
  {
    image: CloudNativeImage,
    title: "Cloud-Native Application Development",
    description:
      "Cloud-native applications are designed to take full advantage of every benefit the cloud has to offer. While most applications developed for or migrated to the cloud focus on the elasticity offered by the cloud, cloud-native applications focus on minimizing the development scope to only the business domain, and leverage cloud managed services or third-party APIs for everything else. This approach offers",
    bullets: [
      "Smaller footprint in the cloud as custom application code is only focused on the business domain",
      "Lower costs of operation due to the smaller footprint and lower demand for operational support beyond the business domain",
      "Industry strength capabilities such as authentication and logging through managed services",
      "Higher scalability, reliability, and performance due to the fact that all non-business domain functions execute in their own environments separately and outsource scalability and reliability",
    ],
  },
  {
    image: ServerlessImage,
    title: "Serverless Deployments",
    description:
      "Cloud computing introduced the premise of outsourced physical server management and a pay-per-use model. Organizations went from having to acquire, own, and maintain infrastructure, whether they used it or not, to only paying for it when they use it, fine-tuned to the minute. Serverless takes this model to the next level by further abstracting the infrastructure and making it possible for organizations to only pay while their code is being executed, fine-tuned to the second. With Serverless",
    bullets: [
      "You pay nothing while your application is not in use even though it is still available",
      "You need to have no knowledge of the infrastructure it is executing on",
      "Your application can scale to any demand, on-demand without provisioning or auto-provisioning of additional infrastructure",
    ],
  },
  {
    image: MicroserviceImage,
    title: "Microservice Architectures",
    description:
      "Imagine a large mission-critical application, serving millions of users. Adding a simple enhancement to such an application requires testing a significant number of potentially impacted features, potential audit and compliance checks on the entire application, user acceptance testing, and finally a major deployment within a predetermined downtime window. Then, imagine such an enhancement introducing a memory leak that takes the entire application down. Microservice architectures dictate the breakdown of such large monolithic applications into a large number of smaller independent but related applications",
    bullets: [
      "Allowing a single team to own and be accountable for all aspects of a single microservice ensuring such teams can resolve any issue within their domain",
      "Allowing microservices to scale independently to their own needs",
      "Reducing time-to-market, a microservice is easier to build, enhance, test, and deploy",
      "Reducing the risk of negative impacts from a single component to the entire application",
      "Allowing multiple technologies to ensure each domain is free to leverage technologies best suited to that domain and team skills",
    ],
  },
];
export const engagementModelData = [
  {
    image: PorjectOutsourcingImage,
    title: "Project Outsourcing",
    description:
      "When you outsource your project to us, we are accountable for every aspect of the delivery, which allows us to have the greatest impact. Our delivery model consists of assembling small high performing teams with the following structure",
  },
  {
    image: EmbeddedTeamImage,
    title: "Embedded Teams",
    description:
      "Should you require additional capacity, but do not want or need to outsource the entire project, we can embed our staff within your team, giving you additional capacity and skills, while maintaining management control of the project. In this model, Tech Logans offers",
    bullets: [
      "Work quality oversight from our office management, continuous training through internal training programs, and offers access to peer experts for problem-solving",
      "Ensures staff works per client expectations",
    ],
    secDescription:
      "In this model, project and work management are the responsibility of the client while our experts execute",
  },
  {
    image: ConsultingImage,
    title: "Consulting",
    description:
      "In case you are looking for advice, we can offer our decades of experience in multiple domains, such as",
    bullets: [
      "Cloud, agile, or DevOps transformation",
      "Serverless or microservice transformation",
      "System integration",
      "Application Architecture Design or assessment",
      "Service-Oriented Architecture transformation or assessment",
      "Enterprise architecture road mapping, planning, or assessment",
    ],
    secDescription:
      "If you are exploring any of these topics, or any new related technology, reach out to us to learn about our fixed fee workshops, where we research the topic you are interested in and present it to your stakeholders on-site",
  },
];

export const AllPorjectsData = [
  {
    title: "The Phenix Group (Gatsbyjs, Contentful)",
    description:
      "The Phenix Group has a deep passion for helping individuals fix bad credit and achieve financial security. We built their marketing website using Gatsbyjs, Contentful, and helped them with their technical SEO. They are now getting tons of traffic, and users feel a better smooth UI/UX.",
    image: (
      <Image
        className="header-img img-fluid"
        src={PhenixImage}
        alt="The Phenix Group"
        width={600}
        height={300}
      />
    ),
    // link: "/all-case-studies/https://thephenixgroup.com/",
    link: "/all-case-studies/phenix",
    technologiese: ["React", "Next", "Gatsby", "MongoDB"],
  },
  {
    title: "HyCasino (Nextjs, REST API)",
    description:
      "Choosing The Best Online Casinos. A directory website built with Nextjs and REST API.",
    image: (
      <Image
        className="header-img img-fluid"
        src={CasinoImage}
        alt="HyCasino"
        width={600}
        height={300}
      />
    ),
    link: "/all-case-studies/https://hycasino.com/",
    technologiese: ["React", "Next", "Gatsby", "MongoDB"],
  },
];

export const TeamData = [
  {
    profileImage: TeamOne,
    name: "Najaf Zaman",
    designation: "Front End Developer",
    links: [""],
  },
  {
    profileImage: TeamTwo,
    name: "Najaf Zaman",
    designation: "Front End Developer",
    links: [""],
  },
  {
    profileImage: TeamThree,
    name: "Najaf Zaman",
    designation: "Front End Developer",
    links: [""],
  },
  {
    profileImage: TeamFour,
    name: "Najaf Zaman",
    designation: "Front End Developer",
    links: [""],
  },
];

export const MissionData = [
  {
    icon: <BsRocketTakeoff />,
    heading: "mission",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui magnam amet ipsa tenetur.",
  },
  {
    icon: <BsEye />,
    heading: "vissions",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui magnam amet ipsa tenetur.",
  },
  {
    icon: <FaHandHoldingUsd />,
    heading: "value",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui magnam amet ipsa tenetur.",
  },
];
export const StackLogosData = [
  {
    icon: <RiJavascriptLine />,
    title: "Javascript",
  },
  {
    icon: <FaReact />,
    title: "React js",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next JS",
  },
  {
    icon: <RiGatsbyLine />,
    title: "gatsby js",
  },
  {
    icon: <FaNodeJs />,
    title: "node js",
  },
  {
    icon: <SiMongodb />,
    title: "mongo db",
  },
  {
    icon: <FaSass />,
    title: "SASS",
  },
  {
    icon: <RiBootstrapLine />,
    title: "Bootstrap 4/5",
  },
];
