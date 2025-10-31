'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { StorySegment, StorySelection } from "./projections";
import { StoryDetails } from "../api/stories/route";


const StoriesPage: NextPage = () => {
    const [selectedStory, setSelectedStory] = useState<string>('Just the beginning...')
    const [selectedTitle, setSelectedTitle] = useState('Default message')
    const [storyList, setStoryList] = useState<StoryDetails[]>([]);
    const [storiesFetched, setStoriesFetched] = useState(false);

    const fetchMyStories = () => {
        fetch('/api/stories', {method: 'GET'})
            .then(async (response) => {
                const stories = await response.json();

                setStoryList(stories);
                setTimeout(() => setStoriesFetched(true), 2000);
            })
    }

    useEffect(() => {
        if(!storiesFetched){
            fetchMyStories();
        }
    }, [storiesFetched])

    return (
        <div className="h-full flex overflow-hidden">
            {/* TODO: need a media query here for when the screen is small to give the selection pane more room, 1/5 big, 3/8 small */}
            <div 
                // data-show={true} 
                data-show={!storiesFetched} 
                className="data-[show='false']:hidden flex justify-around w-2/5 border-r-2 p-4 gap-2"
                >
                <div className="w-1/2 p-4 animate-ping bg-(--text-theme-primary) opacity-50"></div>
            </div>
            <div 
                data-show={storiesFetched} 
                className="data-[show='false']:hidden flex flex-col w-2/5 border-r-2 p-4 gap-2"
                >
                {
                    storyList.map(({story, title}: StoryDetails, index) => {
                        const onClick = () => {
                            setSelectedTitle(title);
                            setSelectedStory(story)
                        }
                        const selected = title === selectedTitle
                        return (
                            <StorySelection 
                                key={`storyName-${index}`} 
                                onClick={onClick} 
                                title={title} 
                                selected={selected}
                                />
                        )
                    })
                }
            </div>
            <div className="overflow-auto flex flex-col w-full p-6">
                <h1 className="font-semibold text-2xl pb-4">{selectedTitle}</h1>
                {
                    selectedStory.split('<SPLIT>').map((segment, index) => <StorySegment key={`segment-${index}`} segment={segment}/> )
                }
            </div>
        </div>
    )
}

export default StoriesPage;