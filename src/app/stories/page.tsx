'use client'

import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { StorySelection } from "./projections";
import { SettingsContext } from "@/structures/settings-context";

import {default as devStories} from '@/app/stories/stories/dev-stories.json';
import {default as busStories} from '@/app/stories/stories/business-stories.json';

type Story = {
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
            <div className="overflow-auto flex flex-col w-full p-6 gap-4">
                <h1 className="font-semibold text-2xl">{selectedStory.title}</h1>
                <h2 className="font-semibold text-xl text-(--text-theme-secondary)">{selectedStory.lvl}</h2>
                <p>
                    {selectedStory.abstract}
                </p>
                <hr className="w-full" />
                {
                    selectedStory.contents.map((section, index) => ( <p key={`story-section-${index}`}>{section}</p> ))
                }
            </div>
        </div>
    )
}

export default StoriesPage;