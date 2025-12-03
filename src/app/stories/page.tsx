'use client'

import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { MobileStoryDisplay, StoryDisplay, StorySelection } from "./projections";
import { SettingsContext } from "@/structures/settings-context";
import {default as devStories} from '@/app/stories/stories/dev-stories.json';
import {default as busStories} from '@/app/stories/stories/business-stories.json';

export type Story = {
    lvl: string;
    abstract: string;
    contents: string[];
    title: string;
}

const StoriesPage: NextPage = () => {
    const {settings} = useContext(SettingsContext);
    const [selectedStory, setSelectedStory] = useState<Story | null>(null)
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

    useEffect(() => {
        setStoryList(settings.devMode ? devStories as Story[] : busStories as Story[])
        setSelectedStory(settings.devMode ? devStories[0] : busStories[0])
        setStoriesFetched(true);
    }, [])

    return (
        <div className="h-full overflow-hidden">
            <div id="small & mobile screen variant" className="md:hidden h-full flex flex-col pb-6">
                {
                    storyList
                        .sort(sortGreatestFirst)
                        .map((story, index) => {
                            const storySelected = selectedStory?.title === story.title;
                            return (
                                <MobileStoryDisplay 
                                    isSelected={storySelected} 
                                    story={story}
                                    toggleStory={setSelectedStory}
                                    key={`mobile-story-${index}`}
                                    />
                            )
                        })
                }
            </div>
            <div id="medium & up screen variant" className="max-sm:hidden h-full flex">
                <div 
                    data-show={!storiesFetched} 
                    className="data-[show='false']:hidden flex justify-around w-2/5 border-r-2 p-4 gap-2"
                    >
                    <div className="w-1/2 p-4 animate-ping bg-(--light-primary) opacity-50"></div>
                </div>
                <div 
                    data-show={storiesFetched} 
                    className="data-[show='false']:hidden flex flex-col w-2/5 border-r-2 p-4 gap-2"
                    >
                    {
                        storyList
                            .sort(sortGreatestFirst)
                            .map((story: Story, index: number) => {
                                const selected = story.title === selectedStory?.title
                                return (
                                    <StorySelection 
                                        key={`desktop-story-${index}`} 
                                        onClick={() => setSelectedStory(story)} 
                                        title={`${story.lvl} - ${story.title}`} 
                                        selected={selected}
                                        />
                                )
                            })
                    }
                </div>
                <StoryDisplay story={selectedStory} />
            </div>
        </div>
    )
}

export default StoriesPage;