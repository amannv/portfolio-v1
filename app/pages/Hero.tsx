import Icon from "@/components/Icon";
import ScaleX from "@/components/ScaleX";
import { FlipWords } from "@/components/ui/flip-words";
import {  IoLocationOutline, IoMail } from "react-icons/io5";

const words = ["Full-Stack Engineer", "I love doing backend", "wanna be an Indie Hacker", "I think from first principles"];

export default function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto]">
        <div>
          <h1 className="border-b p-2 px-5 text-2xl font-bold">Aman Verma</h1>
          <div className="flex border-b px-3 py-2 text-sm">
            <FlipWords
              className="text-muted-foreground dark:text-muted-foreground"
              words={words}
            />
          </div>
          <div className="text-muted-foreground border-b flex px-4 py-2 text-sm items-center gap-2">
            <Icon icon={<IoLocationOutline />} />
            <p>20 • Punjab • India</p>
          </div>
          <div className="text-muted-foreground flex px-4 py-2 text-sm items-center gap-2">
            <Icon icon={<IoMail />} />
            <p>amanworkstuff@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center justify-center border-l px-6">
          <div className="p-1 border-3 rounded-4xl">
            <img
              src="/avatar.jpeg"
              className="h-32 w-32 rounded-2xl object-cover"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <ScaleX />
    </>
  );
}
