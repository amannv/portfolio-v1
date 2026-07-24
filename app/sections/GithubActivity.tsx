import GithubActivity from "@/components/GithubActivity";

export default function GithubCalendar() {
  return (
    <>
      <div className="relative flex scrollbar-none items-center justify-center px-12 py-5">
        <div className="relative z-10">
          <GithubActivity />
        </div>
      </div>
    </>
  );
}
