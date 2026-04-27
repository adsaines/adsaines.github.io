export const Project = ({
    title, 
    techStack,
    children
}:{
    title: string, 
    techStack: string[],
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col p-2 gap-2">
            <h3 className="font-bold text-(--light-secondary) text-xl">
                {title}
            </h3>
            <div className="flex ">
                {children}
            </div>
        </div>
    )
}

export const Employer = ({title, children}:{title: string, children: React.ReactNode}) => {
    return (
        <div className="flex flex-col gap-2 border-1 border-dashed rounded-sm border-(--dark-primary) border-rounded hover:border-(--light-primary)">
            <h2 className="font-bold text-(--light-tertiary) text-2xl">
                {title}
            </h2>
            <div className="flex ">
                {children}
            </div>
        </div>
    )
}