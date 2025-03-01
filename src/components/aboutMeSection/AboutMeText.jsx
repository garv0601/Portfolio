import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-lg md:text-l text-gray-300">
        👋 Hi, I'm Garvit Bansal, a Computer Science Engineer passionate about software development,
        AI, and problem-solving. I've built projects like Mast Mathri (a retail website) and Travelly (a travel app), integrating Firebase, APIs, and scalable tech. With expertise in C++, DSA, MERN stack, and machine learning, I enjoy crafting efficient solutions. Beyond tech, I'm a chess player, explorer, and event organizer, always eager to learn and connect. 🚀
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
