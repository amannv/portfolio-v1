import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center pb-0 pt-20 text-center text-sm text-muted-foreground">
      <div className="mb-20">
        <p className="mb-2">
          Designed & Developed by <span className="font-medium text-foreground">Aman</span>
        </p>
        <p>&copy; 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}
