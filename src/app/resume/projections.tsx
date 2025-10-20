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
            <hr className="grow border" />
            <h1 className="px-2 grow-0 text-center text-xl font-bold no-wrap">
                {title}
            </h1>
            <hr className="grow border"/>
        </div>
    )
}

export const BlurbWithTitle = ({title, blurb}: {title: string, blurb: string}) => {
    return (
        <div className="flex flex-col h-full border-4 rounded-md border-double border-(--text-theme-primary) p-4 max-w-[500px]">
            <div className="font-semibold text-lg pb-2 mb-2 border-b border-(--text-theme-primary) text-(--text-theme-secondary)">
                {title}
            </div>
            <div>
                {blurb}
            </div>
        </div>
    )
}

export const EducationChunk = ({name, tagline, started, graduated, blurb}:{name: string, tagline: string, started?: number, graduated: number, blurb: string}) => {
    return (
        <div className="flex py-4 px-6 gap-6">
            <div className="w-2/5 flex flex-col justify-start border-r-1">
                <span className="font-semibold text-lg text-(--text-theme-secondary)">
                    {name}
                </span>
                <span>
                    {tagline}
                </span>
                <span>
                    {started ?? ''}{started ? ' - ' : ''}{graduated}
                </span>
            </div>
            <div className="w-full">
                {blurb}
            </div>
        </div>
    )
}

export type TalkingPoint = {
    bolded: string
    followUp: string
}

export const DateToMMYYYY = (date: string) => {
    const dateObj = new Date(date);

    const month = dateObj.getMonth() +1;
    const year = dateObj.getFullYear();

    return `${month < 10 ? '0' : ''}${month}-${year}`;
}

export const ProffessionalExperience = ({company, startDate, endDate, positionTitle, talkingPoints}:{company: string, startDate: string, endDate?: string, positionTitle: string, talkingPoints: TalkingPoint[]}) => {
    return (
        <div className="flex py-4 px-6 gap-6">
            <div className="w-2/5 flex flex-col justify-start border-r-1 gap-1">
                <span className="font-semibold text-lg text-(--text-theme-secondary)">
                    {/* TODO: add a linked in link for each company */}
                    {company}
                </span>
                <span>
                    {positionTitle}
                </span>
                <span>
                    {DateToMMYYYY(startDate)} to {endDate ? DateToMMYYYY(endDate) : 'Present'}
                </span>
            </div>
            <div className="w-3/5 flex flex-col gap-2">
                {
                    talkingPoints.map((point, index) => <FormatTalkingPoint key={`exp-point-${index}`} point={point} />)
                }
            </div>
        </div>
    )
}

export const FormatTalkingPoint = ({point}: {point: TalkingPoint}) => {
    return (
        <div>
            <span className="font-semibold text-(--text-theme-tertiary)">{point.bolded}</span>
            <span>, {point.followUp}</span>
        </div>
    )
}