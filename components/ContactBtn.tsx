import { Button } from "./ui/button";

export default function ContactBtn({
  icon,
  text,
  url,
}: {
  icon?: React.ReactNode;
  text: string;
  url: string;
}) {
  return (
    <>
      <div className="border-x p-1 sm:p-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button
            className={"px-1.5 py-5 shadow-none sm:px-3 sm:py-5"}
            variant={"outline"}
          >
            {icon} <span className="hidden sm:inline">{text}</span>
          </Button>
        </a>
      </div>
    </>
  );
}
