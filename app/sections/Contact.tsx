import ContactBtn from "@/components/ContactBtn";
import Icon from "@/components/icons/Icon";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const contactItems = [
  { icon: <FaGithub />, text: "Github", url: "https://github.com/amannv" },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/aman-verma-473645328/",
  },
  { icon: <FaXTwitter />, text: "Twitter", url: "https://x.com/amanntwt" },
  { icon: <FaMedium />, text: "Medium", url: "https://medium.com/@amannv" },
  {
    icon: <FaEnvelope />,
    text: "Email",
    url: "mailto:amanworkstuff@gmail.com",
  },
  {
    icon: <GrDocumentText />,
    text: "Resume",
    url: "https://drive.google.com/file/d/106tYK4iO6S3NlLYigosKgYl38_Ysg-_A/view?usp=drive_link",
  },
];

export default function Contact() {
  return (
    <div className="relative w-full px-4 md:px-8">
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="grid w-full grid-cols-6">
        {contactItems.map((contact, index) => {
          let borderClasses = "border-border";
          if (index !== 5) borderClasses += " border-r";
          return (
            <ContactBtn
              key={index}
              icon={<Icon icon={contact.icon} />}
              text={contact.text}
              url={contact.url}
              className={borderClasses}
            />
          );
        })}
      </div>
    </div>
  );
}
