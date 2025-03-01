import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/garvit-bansal-736233226/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/garv0601" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/garv_b_06/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
