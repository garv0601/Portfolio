import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import { PiCircleThin } from "react-icons/pi";


const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      
      <img
  src="/images/Garvit Bansal photo.png"
  alt="Garvit Bansal"
  className="w-[402px] h-[402px] object-cover object-top" 
  style={{
    borderRadius: "50%", 
  }}
/>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiCircleThin  className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
