import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="flex w-full justify-center gap-[0.8rem]">
      <a href="https://www.linkedin.com/in/shane-franklin/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/shaneTF" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
