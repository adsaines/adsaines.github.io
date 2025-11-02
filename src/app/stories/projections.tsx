export const StorySegment = ({segment, isFirstSection = false}: {segment:string, isFirstSection: boolean}) => {
    return (
        <>
            <p>
                {segment}
            </p>
            <br />
            <hr 
                data-show={isFirstSection}
                className="w-full data-[show='false']:hidden" 
                />
            <br 
                data-show={isFirstSection}
                className="data-[show='false']:hidden" 
                />
        </>
    )
}

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
