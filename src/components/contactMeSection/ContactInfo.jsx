import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="2003garvitb0601@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8209042370" Image={FiPhone} />
      <SingleInfo text="Ajmer,Rajasthan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
