import Heading from "@/components/Heading";
import ContactBtn from "@/components/ContactBtn";
import Icon from "@/components/icons/Icon";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { GrDocumentText } from "react-icons/gr";
import ScaleX from "@/components/ScaleX";

const contactItems = [
  { icon: <FaGithub />, text: "Github", url: "https://github.com/amannv" },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/aman-verma-473645328/",
  },
  { icon: <FaXTwitter />, text: "Twitter", url: "https://x.com/amanntwt" },
  { icon: <FaMedium />, text: "Medium", url: "https://medium.com/@amannv" },
  { icon: <Mail />, text: "Email", url: "mailto:amanworkstuff@gmail.com" },
  {
    icon: <GrDocumentText />,
    text: "Resume",
    url: "https://drive.google.com/file/d/106tYK4iO6S3NlLYigosKgYl38_Ysg-_A/view?usp=drive_link",
  },
];

export default function Contact() {
  return (
    <>
      <Heading title="Contact" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {contactItems.map((contact, index) => (
          <ContactBtn
            key={index}
            icon={<Icon icon={contact.icon} />}
            text={contact.text}
            url={contact.url}
          />
        ))}
      </div>
      <ScaleX />
    </>
  );
}
