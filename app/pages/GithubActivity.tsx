import Heading from "@/components/Heading"
import ScaleX from "@/components/ScaleX"
import GithubActivity from "@/components/GithubActivity"

export default function GithubCalendar() {
    return (
        <>
        <Heading title="Github Activity" />
        <div className="flex justify-center items-center py-4 px-0 scrollbar-none">
            <GithubActivity />
        </div>
        <ScaleX />
        </>
    )
}