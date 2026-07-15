export default function Icon({ icon }: {
    icon: React.ReactNode
}) {
    return (
        <div className="border-2 rounded-md p-2">
            {icon}
        </div>
    )
}