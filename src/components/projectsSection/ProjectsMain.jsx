import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Mast Mathri",
    year: "Jan2024",
    align: "right",
    image: "/images/mast mathri image.png",
    link: "https://mast-mathri.vercel.app/",
  },
  {
    name: "SOSH",
    year: "Nov2024",
    align: "left",
    image: "/images/sosh image .png",
    link: "https://mern-project-wine.vercel.app/", // Add actual project link
  },
  {
    name: "Travelly ",
    year: "Jun2024",
    align: "right",
    image: "/images/travelly image .png",
    link: "https://travelly-jet.vercel.app/", // Add actual project link
  },
  {
    name: "Rock Paper & Scissors",
    year: "Jun2023",
    align: "left",
    image: "/images/rock paper image.png",
    link: "https://rock-paper-game-puce.vercel.app/", // Add actual project link
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              target="_blank"
              rel="noopener noreferrer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
