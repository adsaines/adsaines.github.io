import { Dispatch, SetStateAction } from "react"
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
        <div className="overflow-auto flex flex-col w-full max-sm:py-2 max-sm:px-6 md:p-6 gap-4">
            <h1 className="font-semibold text-2xl max-sm:hidden">{story.title}</h1>
            <h2 className="font-semibold text-xl text-(--text-theme-secondary) max-sm:hidden">{story.lvl}</h2>
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

export const MobileStoryDisplay = ({story, isSelected, toggleStory}:{story:Story, isSelected: boolean, toggleStory: Dispatch<SetStateAction<Story | null>>}) => {
    return (
        <>
            <button 
                data-selected={isSelected}
                className="group grid grid-cols-12 gap data-[selected=true]:text-(--text-theme-secondary) data-[selected=true]:border-t-2 border-(--text-theme-primary) p-2"
                onClick={() => toggleStory(isSelected ? null : story)}
                >
                <div className="group-data-[selected='true']:hidden flex items-center">
                    <span className="material-icons">keyboard_double_arrow_down</span>
                </div>
                <div className="group-data-[selected='false']:hidden flex items-center">
                    <span className="material-icons">keyboard_double_arrow_right</span>
                </div>
                
                <div className="col-span-4 flex justify-center items-center">{story.lvl}</div>
                <div className="col-span-7 flex justify-start items-center">{story.title}</div>
            </button>
            <div
                data-selected={isSelected}
                className="data-[selected=false]:hidden h-[70%] overflow-y-scroll data-[selected=true]:border-b-2 border-(--text-theme-primary)"
                >
                <StoryDisplay story={story} />
            </div>
        </>
    )
}