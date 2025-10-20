export const StandardResumeSection = ({title, children}: {title: string, children: React.ReactNode}) => {
    return (
        <div className="border-1 p-4">
            <HorizontalRuleWithTitle title={title} />
            <div className="hover:border-lime-500 hover:font-semibold">
                {children}
            </div>
        </div>
    )
}

export const HorizontalRuleWithTitle = ({title}: {title: string}) => {
    return (
        <div className="flex w-full items-center">
            <hr className="w-full border" />
            <h1 className="p-1 w-full text-center">
                {title}
            </h1>
            <hr className="w-full border"/>
        </div>
    )
}