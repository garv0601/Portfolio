import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll"; // Ensure this is imported
import { LuArrowDownRight } from "react-icons/lu";
import { RiArrowRightUpLine } from "react-icons/ri";


const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Garvit <br className="sm:hidden md:block" />
        Bansal
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-0"
      >
        Aspiring Web & Software Developer 🚀<br /> Crafting Innovative Solutions with Passion & Precision!
      </motion.p>

      {/* Hire Me Button */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-6"
      >
        <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
  <a 
    href="https://drive.google.com/file/d/1UflscZlxYspaYv4fpmTnYCmg8li5t6Gp/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-1"
  >
    Resume 
    <div className="sm:hidden md:block">
      <RiArrowRightUpLine />
    </div>
  </a>
</button>

      </motion.div>
    </div>
  );
};

export default HeroText;
