import * as fs from "node:fs";
import path from "node:path";
import { StoryDetails } from "./route";

export const getMyStories = async (stories: string[]) => {
    return Promise.all(stories.map((story) => {
        return new Promise((resolve, reject) => {
            const fetchPath = path.resolve(`src/app/api/stories/${story}`);
            const storyName = story.replaceAll('.txt','').replaceAll('-','_');
            
            const retrieveExperienceLvl = (data: string) => {
                return data.split('\n')[0].replaceAll('\r','');
            }

            const processTextFile = (data: string) => {
                return data.split('\n')
                    .filter((line, index) => {
                        const isFilledLine = line !== '' && line !== '\r';
                        const isNotExperienceLvl = index !== 0;
                        
                        return isFilledLine && isNotExperienceLvl;
                    }
                    )
                    .map(line => line.replaceAll('\r',''))
                    .join('<SPLIT>')
            }

            const readFileContents = (err: any, data: string) => {
                if(err){
                    console.error(`Story not found: "${story}" at "${fetchPath}"`)
                    console.error(err);

                    reject({
                        story: 'Not found.',
                        title: storyName,
                        lvl: 'N/A'
                    } as StoryDetails)
                }

                resolve({
                    story: processTextFile(data),
                    title: storyName,
                    lvl: retrieveExperienceLvl(data)
                } as StoryDetails)
            }

            // https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
            // NOTE: this isn't an error and works fine
            fs.readFile(fetchPath, 'utf-8', readFileContents)
        })
    }))
}