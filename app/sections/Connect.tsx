import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ConnectBtn from "@/components/ConnectBtn";
import Heading from "@/components/Heading";

const connectHandle = [
  {
    icon: <FaXTwitter />,
    title: "X",
    href: "https://x.com/amanntwt",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/amannv",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    href: "mailto:amanworkstuff@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/aman-verma-473645328/",
  },
];

export default function Connect() {
  return (
    <>
      <Heading title="Work With Me" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-4 text-center md:p-8">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            Feel free to reach out through any of these platforms
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:gap-3">
            {connectHandle.map((handle, idx) => (
              <ConnectBtn
                key={idx}
                title={handle.title}
                icon={handle.icon}
                href={handle.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
