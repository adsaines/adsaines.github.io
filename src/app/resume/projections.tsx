import { dateRangeToMonthAndYearRange, datesToYearRange } from "@/projections/dateStuff"

export const StandardResumeSection = ({title, children, show=true}: {title: string, children: React.ReactNode, show?: boolean}) => {
    return (
        <div data-show={show} className="border-1 border-dashed rounded-sm border-(--background-theme-primary) border-rounded hover:border-(--text-theme-primary) p-4 data-[show='false']:hidden">
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
        <div className="flex flex-col h-full border-4 rounded-md border-double border-(--text-theme-primary) p-4 max-w-[500px] min-w-[300px]">
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
    link?: {
        title: string;
        href: string;
    }
}


export const ItemWithExplanations = ({
    title, 
    startDate, 
    endDate, 
    subTitle, 
    talkingPoints, 
    justUseYear = false,
    link
}:ItemWithExplanations) => {
    return (
        <div className="flex py-4 max-sm:flex-col max-sm:px-1 md:px-6 gap-6">
            <div className="md:w-2/5 flex flex-col justify-start md:border-r-1">
                <span className="font-semibold text-lg text-(--text-theme-secondary)">
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
            <div className="max-sm:pl-4 md:w-3/5 flex flex-col gap-2">
                {
                    talkingPoints.map((point, index) => <FormatTalkingPoint key={`exp-point-${index}`} point={point} />)
                }
                {
                    link &&
                    <a 
                        href={link.href} 
                        target="_blank" 
                        className="text-(--text-theme-secondary) flex items-center underline"
                        >
                        {link.title}
                        <div className="w-2">
                            <span className="material-icons">arrow_outward</span>
                        </div>
                    </a>
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
                className="p-2 m-1 text-(--text-theme-secondary) flex items-center gap-1 underline flex justify-center items-center"
                >
                {brick.title}
                <div className="w-2">
                    <span className="material-icons">arrow_outward</span>
                </div>
            </a>
        )
    }

    return (
        <div className="p-2 m-1">
            {brick.title}
        </div>
    )
}

export const TitleWithBricks = ({title, subTitle, bricks}:{ title: string, subTitle?: string, bricks: Brick[]}) => {
    return (
        <div className="flex max-sm:flex-col md:justify-start md:items-center w-full px-6">
            <div className="md:w-2/5 flex md:flex-col md:justify-start border-double md:border-r-4">
                <div className="font-semibold text-lg text-(--text-theme-tertiary) text-end pr-4">
                    {title}
                </div>
                <div 
                    data-show={subTitle !== undefined} 
                    className="data-[show='false']:hidden text-end pr-4"
                    >
                    {subTitle}
                </div>
            </div>
            <div className="flex flex-wrap max-sm:pl-4 md:w-3/5 p-2">
                {
                    bricks.map((brick, index) => <MakeBrick brick={brick} key={`brick-${index}`} />)
                }
            </div>
        </div>
    )
}