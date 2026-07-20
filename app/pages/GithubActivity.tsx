import GithubActivity from "@/components/GithubActivity"

export default function GithubCalendar() {
    return (
        <>
        <div className="relative flex justify-center items-center py-5 px-12 scrollbar-none">
            <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b pointer-events-none z-0" />
            <div className="relative z-10">
                <GithubActivity />
            </div>
        </div>
        </>
    )
}