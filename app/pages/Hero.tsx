import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import { FlipWords } from "@/components/ui/flip-words";

const words = ["Full-Stack Engineer", "Backend Developer", "Indie Hacker"];

export default function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto]">
        <div>
          <h1 className="border-b p-2 px-4 text-2xl font-bold">Aman Verma</h1>
          <div className="flex border-b px-2 py-2 text-sm">
            <FlipWords
              className="text-muted-foreground dark:text-muted-foreground"
              words={words}
            />
          </div>
          <div className="text-muted-foreground flex border-b px-4 py-2 text-sm">
            <p>20 • Punjab • India</p>
          </div>
          <div className="text-muted-foreground flex px-4 py-2 text-sm">
            <p>
              I enjoy building tools people
              <span className="bg-primary text-primary-foreground mx-2 rounded-sm">
                {" "}
                actually{" "}
              </span>
              use.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center border-l px-10">
          <img
            src="/avatar.jpeg"
            className="ring-primary h-28 w-28 rounded-2xl object-cover ring-4"
            alt="Avatar"
          />
        </div>
      </div>
      <ScaleX />
    </>
  );
}
