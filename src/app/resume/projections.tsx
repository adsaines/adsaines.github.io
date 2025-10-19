export const StandardResumeSection = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="hover:bg-slate-50 hover:pl-1 hover:text-xl hover:font-semibold">
            {children}
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