import { Story } from "./page"

export const StorySelection = ({onClick, title, selected}: {onClick: ()=>void, title: string, selected: boolean}) => {
    return (
        <button data-selected={selected} onClick={onClick} className="flex group justify-between data-[selected='true']:text-(--text-theme-secondary)">
            {title}
            <div className="invisible group-hover:visible group-data-[selected='true']:visible">
                <span className="material-icons">keyboard_double_arrow_right</span>
            </div>
        </button>
    )
}

export const StoryDisplay = ({story}:{story:Story}) => {
    return (
        <div className="overflow-auto flex flex-col w-full p-6 gap-4">
            <h1 className="font-semibold text-2xl">{story.title}</h1>
            <h2 className="font-semibold text-xl text-(--text-theme-secondary)">{story.lvl}</h2>
            <p>
                {story.abstract}
            </p>
            <hr className="w-full" />
            {
                story.contents.map((section, index) => ( <p key={`story-section-${index}`}>{section}</p> ))
            }
        </div>
    )
}