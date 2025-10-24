'use client'

import { NextPage } from "next";
import { useState } from "react";
import { StorySegment, StorySelection } from "./projections";
import { Stories, myStories } from "./stories";

// TODO: need to find out how to keep the screen height from creating a little extra scroll space on pages where it I want it to be the size of the screen and scroll in the container, like here
const StoriesPage: NextPage = () => {
    const [myStory, setMyStory] = useState<string[]>(['Just the beginning...'])
    const [title, setTitle] = useState('Default message')
    
    const storyList = Object.keys(myStories);

    return (
        <div className="h-screen flex">
            {/* TODO: need a media query here for when the screen is small to give the selection pane more room, 1/5 big, 3/8 small */}
            <div className="flex flex-col w-3/8 overflow-auto border-r-2 p-4 gap-2">
                {
                    storyList.map((storyName, index) => {
                        const onClick = () => {
                            setTitle(storyName);
                            setMyStory(myStories[storyName as keyof Stories])
                        }
                        const selected = title === storyName
                        return (
                            <StorySelection 
                                key={`storyName-${index}`} 
                                onClick={onClick} 
                                title={storyName} 
                                selected={selected}
                                />
                        )
                    })
                }
            </div>
            <article className="flex flex-col w-full overflow-auto p-6">
                <h1 className="font-semibold text-2xl pb-4">{title}</h1>
                {
                    myStory.map((segment, index) => <StorySegment key={`segment-${index}`} segment={segment}/> )
                }
            </article>
        </div>
    )
}

export default StoriesPage;