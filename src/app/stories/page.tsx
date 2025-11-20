'use client'

import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { StoryDisplay, StorySelection } from "./projections";
import { SettingsContext } from "@/structures/settings-context";

import {default as devStories} from '@/app/stories/stories/dev-stories.json';
import {default as busStories} from '@/app/stories/stories/business-stories.json';

export type Story = {
    lvl: string;
    abstract: string;
    contents: string[];
    title: string;
}

const defaultBusStory: Story = {
    lvl: 'LVL_000 to LVL_100 => beginner to master',
    abstract: 'This is a story detailing one of my life experiences in the world of software development & engineering.',
    title: 'Example title',
    contents: ['Experience and anecdotes show up here.']
}

const defaultDevStory: Story = {
    lvl: `I used to have a l33t code level.`,
    abstract: `This is an entertaining and informative story: from my start to my end I don't know if I've found a friend quite as fickle as VBA.`,
    title: `You'll only see me once per page load.`,
    contents: ['Experience and anecdotes show up here.']
}


const StoriesPage: NextPage = () => {
    const {settings} = useContext(SettingsContext);
    const [selectedStory, setSelectedStory] = useState<Story>(settings.devMode ? defaultDevStory : defaultBusStory)
    const [storyList, setStoryList] = useState<Story[]>([]);
    const [storiesFetched, setStoriesFetched] = useState(false);

    const [showMobileStoryList, setShowMobileStoryList] = useState(false);

    const sortGreatestFirst = (first: Story, second: Story): number => {
        if(first.lvl > second.lvl){
            return -1
        }

        if (first.lvl < second.lvl){
            return 1
        }

        return 0
    }

    const createStorySelection = (story: Story, index: number) => {
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
        setStoryList(settings.devMode ? devStories as Story[] : busStories as Story[])
        setStoriesFetched(true);
    }, [])

    return (
        <div className="h-full overflow-hidden">
            {/* 
                TODO: selection button is being pushed off the screen to the bottom on mobile devices

                cassie doesn't like it on bottom
            */}
            <div id="small & mobile screen variant" className="md:hidden h-full flex flex-col justify-between">
                <StoryDisplay story={selectedStory} />
                <div 
                    data-show={showMobileStoryList} 
                    className="data-[show=false]:hidden flex flex-col gap-2 p-4 h-2/3 overflow-y-auto  border-t-2"
                    >
                    {
                        storyList
                            .sort(sortGreatestFirst)
                            .map((story, index) => {
                                return (
                                    <button 
                                        key={`mobile-story-selection-${index}`} 
                                        className="flex justify-between"
                                        onClick={() => {
                                            setShowMobileStoryList(!showMobileStoryList)
                                            setSelectedStory(story)
                                        }}
                                        >
                                        <div 
                                            data-visible={story.title === selectedStory.title} 
                                            className="data-[visible=false]:invisible material-icons"
                                            >
                                            keyboard_double_arrow_right
                                        </div>
                                        {story.title}
                                        <div 
                                            data-visible={story.title === selectedStory.title} 
                                            className="data-[visible=false]:invisible material-icons"
                                            >
                                            keyboard_double_arrow_left
                                        </div>
                                    </button>
                                )
                            })
                    }
                </div>
                <button 
                    disabled={showMobileStoryList} onClick={() => {
                        setShowMobileStoryList(!showMobileStoryList)
                    }} 
                    className="w-full flex justify-between items-center p-2 border-t-2"
                    >
                    <div className="material-icons">keyboard_double_arrow_up</div>
                    <div className="flex flex-col justify-center items-center">
                        <div>{selectedStory.lvl}</div>
                        <div className="truncate">{selectedStory.title}</div>
                    </div>
                    <div className="material-icons">keyboard_double_arrow_up</div>
                </button>
            </div>
            <div id="medium & up screen variant" className="max-sm:hidden h-full flex">
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
                <StoryDisplay story={selectedStory} />
            </div>
        </div>
    )
}

export default StoriesPage;