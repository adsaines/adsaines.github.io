import { NextRequest } from "next/server"
import * as fs from "node:fs";
import path from "node:path";

export type StoryDirections = {
    name: string;
    file: string;
}

export type StoryDetails = {
    title: string;
    story: string;
    lvl: string;
}

export async function GET(request: NextRequest) {

    const storyDetails: string[] = [
        'data-buried-deep.txt',
        'lodash-hell.txt',
        'data-back-door.txt',
        'legacy-code-base.txt',
        'marble-hell.txt',
    ]

    const myStories = await Promise.all(storyDetails.map((story) => {
        return new Promise((resolve, reject) => {
            const fetchPath = path.resolve(`src/app/api/stories/${story}`);
            const storyName = story.replaceAll('.txt','').replaceAll('-','_');

            const processTextFile = (data: string) => {
                return data.split('\n')
                    .filter(line => line !== '' && line !== '\r')
                    .map(line => line.replaceAll('\r',''))
                    .join('<SPLIT>')
            }

            const retrieveExperienceLvl = (data: string) => {
                return data.split('\n')[0].replaceAll('\r','');
            }

            const readFileContents = (err: Error | undefined, data: string) => {
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


    return new Response(
        JSON.stringify(myStories),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}