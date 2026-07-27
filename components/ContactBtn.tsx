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
      <div className="border-x p-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button className={"px-3 py-5 shadow-none"} variant={"outline"}>
            {icon} {text}
          </Button>
        </a>
      </div>
    </>
  );
}
