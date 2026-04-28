export type Years = {
    start: number;
    end?: number;
    continuing: boolean;
}

export const Project = ({
    title, 
    techStack,
    children,
    years
}:{
    title: string, 
    techStack: string[],
    children: React.ReactNode,
    years: Years,
}) => {
    return (
        <div className="flex flex-col sm:p-2 max-sm:py-4 gap-2">
            <h3 className="font-bold text-(--light-secondary) text-xl max-sm:underline">
                {title} ({yearsTag(years)})
            </h3>
            <div className="flex ">
                {children}
            </div>
            <p className="text-(--light-tertiary)">
                {techStack.join(', ')}
            </p>
        </div>
    )
}

const yearsTag = (years: Years) => {

    if (years.continuing){
        return `${years.start} - Present`;
    }
    
    if (!years.continuing && !years.end){
        return `${years.start}`;
    }

    return `${years.start} - ${years.end}`;
}

export const Employer = ({title, children}:{title: string, children: React.ReactNode}) => {
    return (
        <div className="flex flex-col p-6 max-sm:p-8 gap-2 border-1 border-dashed rounded-sm border-(--dark-primary) border-rounded hover:border-(--light-primary)">
            <h2 className="font-bold text-2xl underline">
                {title}
            </h2>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}