import { NextRequest } from "next/server"
import { getMyStories } from "./projections";

export type StoryDirections = {
    name: string;
    file: string;
}

export type StoryDetails = {
    title: string;
    story: string;
    lvl: string;
}

const devStoryNames: string[] = [
    'data-buried-deep.txt',
    'lodash-hell.txt',
    'data-back-door.txt',
    'legacy-code-base-01.txt',
    'legacy-code-base-02.txt',
    'marble-hell.txt',
    'how-it-all-began-dev.txt',
    'second-foray.txt',
];

const businessStoryNames: string[] = [
    'when-you-are-not-secure.txt',
    'unnecessary-complexity.txt',
    'abstraction-and-turtles.txt',
    'asyncronicity.txt',
    'how-it-all-began.txt',
    'pre-processing-realization.txt',
];

export async function GET(request: NextRequest) {
    const params: URLSearchParams = request.nextUrl.searchParams
    const devMode = params.get('devMode');
    const isDevMode = devMode ?? 'false';

    const myStories = await getMyStories(isDevMode === 'true' ? devStoryNames : businessStoryNames);

    return new Response(
        JSON.stringify(myStories),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}