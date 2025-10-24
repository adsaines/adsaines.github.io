import { dateRangeToMonthAndYearRange, datesToYearRange, dateToMMYYYY } from "@/projections/dateStuff"

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

export type TalkingPoint = {
    bolded: string
    followUp: string
}

export type ItemWithExplanations = {
    title: string, 
    subTitle: string, 
    startDate: string, 
    endDate?: string, 
    justUseYear?: boolean
    talkingPoints: TalkingPoint[]
}


export const ItemWithExplanations = ({
    title, 
    startDate, 
    endDate, 
    subTitle, 
    talkingPoints, 
    justUseYear = false
}:ItemWithExplanations) => {
    return (
        <div className="flex py-4 px-6 gap-6">
            <div className="w-2/5 flex flex-col justify-start border-r-1">
                <span className="font-semibold text-lg text-(--text-theme-secondary)">
                    {/* TODO: add a linked in link for each company */}
                    {title}
                </span>
                <span>
                    {subTitle}
                </span>
                <span data-show={justUseYear} className="data-[show='false']:hidden">
                    {datesToYearRange(startDate,endDate)}
                </span>
                <span data-show={!justUseYear} className="data-[show='false']:hidden">
                    {dateRangeToMonthAndYearRange(startDate,endDate)}
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
        <div className="flex flex-col">
            <span className="font-semibold text-(--text-theme-tertiary)">{point.bolded}</span>
            <span>{point.followUp}</span>
        </div>
    )
}

export type Brick = {
    title: string,
    link?: string
}

export const MakeBrick = ({brick}: {brick: Brick}) => {

    if (brick.link){
        return (
            <a 
                href={brick.link} 
                target="_blank" 
                className="p-2 m-1 border-(--must-see-me) border-r-double border-r-4 border-1 border-(--text-theme-tertiary) hover:text-(--text-theme-secondary) flex items-center gap-1"
                >
                {brick.title}
                {/* TODO: figure out how to make this a bit smaller */}
                <span className="material-icons text-xs">open_in_new</span>
            </a>
        )
    }

    return (
        <div className="p-2 m-1 border-(--must-see-me) border-1">
            {brick.title}
        </div>
    )
}

export const TitleWithBricks = ({title, subTitle, bricks}:{ title: string, subTitle?: string, bricks: Brick[]}) => {
    return (
        <div className="flex justify-start items-center w-full px-6">
            <div className="w-2/5 flex flex-col justify-start border-double border-r-4">
                <div className="font-semibold text-lg text-(--text-theme-secondary)">
                    {title}
                </div>
                <div data-show={subTitle !== undefined} className="data-[show='false']:hidden">
                    {subTitle}
                </div>
            </div>
            <div className="flex flex-wrap w-3/5 p-2">
                {
                    bricks.map((brick, index) => <MakeBrick brick={brick} key={`brick-${index}`} />)
                }
            </div>
        </div>
    )
}