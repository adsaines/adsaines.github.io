export const StandardResumeSection = ({title, children}: {title: string, children: React.ReactNode}) => {
    return (
        <div className="border-1 border-dashed rounded-sm border-(--background-theme-primary) border-rounded hover:border-(--text-theme-primary) p-4">
            <HorizontalRuleWithTitle title={title} />
            {children}
        </div>
    )
}

export const HorizontalRuleWithTitle = ({title}: {title: string}) => {
    return (
        <div className="flex w-full items-center pb-4">
            <hr className="w-full border" />
            <h1 className="p-1 w-full text-center text-xl font-bold">
                {title}
            </h1>
            <hr className="w-full border"/>
        </div>
    )
}

export const BlurbWithTitle = ({title, blurb}: {title: string, blurb: string}) => {
    return (
        <div className="flex flex-col h-full border-4 rounded-md border-double border-(--text-theme-primary) p-4 max-w-[500px]">
            <div className="font-semibold text-lg pb-2 mb-2 border-b">
                {title}
            </div>
            <div>
                {blurb}
            </div>
        </div>
    )
}