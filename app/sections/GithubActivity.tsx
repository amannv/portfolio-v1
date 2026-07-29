import GithubActivity from "@/components/GithubActivity";

export default function GithubCalendar() {
  return (
    <>
      <div className="relative flex scrollbar-none items-center justify-start overflow-x-auto py-5 pr-12 pl-8 md:justify-center md:px-12">
        <div className="relative z-10 w-200 shrink-0 md:w-auto">
          <GithubActivity />
        </div>
      </div>
    </>
  );
}
