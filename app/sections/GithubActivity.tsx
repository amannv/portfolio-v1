import GithubActivity from "@/components/GithubActivity";

export default function GithubCalendar() {
  return (
    <>
      <div className="relative flex scrollbar-none items-center justify-center px-12 py-5">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <div className="relative z-10">
          <GithubActivity />
        </div>
      </div>
    </>
  );
}
