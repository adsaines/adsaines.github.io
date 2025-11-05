'use client'

import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { StorySegment, StorySelection } from "./projections";
import { StoryDetails } from "../api/stories/route";
import { SettingsContext } from "@/structures/settings-context";

const defaultBusStory: StoryDetails = {
    lvl: 'LVL_000 to LVL_100 => beginner to master',
    story: 'This is a story detailing one of my life experiences in the world of software development & engineering.',
    title: 'Example title'
}

const defaultDevStory: StoryDetails = {
    lvl: `I used to have a l33t code level.`,
    story: `This is an entertaining and informative story: from my start to my end I don't know if I've found a friend quite as fickle as VBA.`,
    title: `You'll only see me once per page load.`
}


const StoriesPage: NextPage = () => {
    const {settings} = useContext(SettingsContext);
    const [selectedStory, setSelectedStory] = useState<StoryDetails>(settings.devMode ? defaultDevStory : defaultBusStory)
    const [storyList, setStoryList] = useState<StoryDetails[]>([]);
    const [storiesFetched, setStoriesFetched] = useState(false);

    const fetchMyStories = () => {
        fetch(`/api/stories?devMode=${String(settings.devMode)}`, {method: 'GET'})
            .then(async (response) => {
                const stories = await response.json();

                setStoryList(stories);
                setTimeout(() => setStoriesFetched(true), 1000);
            })
    }

    const sortGreatestFirst = (first: StoryDetails, second: StoryDetails): number => {
        if(first.lvl > second.lvl){
            return -1
        }

        if (first.lvl < second.lvl){
            return 1
        }

        return 0
    }

    const createStorySelection = (story: StoryDetails, index: number) => {
        const onClick = () => {
            setSelectedStory(story)
        }
        const selected = story.title === selectedStory.title
        return (
            <StorySelection 
                key={`storyName-${index}`} 
                onClick={onClick} 
                title={`${story.lvl} - ${story.title}`} 
                selected={selected}
                />
        )
    }

    useEffect(() => {
        fetchMyStories();
    }, [])

    return (
        <div className="h-full flex overflow-hidden">
            {/* TODO: need a media query here for when the screen is small to give the selection pane more room, 1/5 big, 3/8 small */}
            <div 
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
                    storyList
                        .sort(sortGreatestFirst)
                        .map(createStorySelection)
                }
            </div>
            <div className="overflow-auto flex flex-col w-full p-6">
                <h1 className="font-semibold text-2xl pb-2">{selectedStory.title}</h1>
                <h2 className="font-semibold text-xl pb-4 text-(--text-theme-secondary)">{selectedStory.lvl}</h2>
                {
                    selectedStory.story
                        .split('<SPLIT>')
                        .map((segment, index) => {
                            return (
                                <StorySegment 
                                    key={`segment-${index}`} 
                                    segment={segment}
                                    isFirstSection={index === 0}
                                    />
                            ) 
                        })
                }
            </div>
        </div>
    )
}

export default StoriesPage;