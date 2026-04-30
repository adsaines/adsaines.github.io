import { NextPage } from "next"

/*
    TODO: introduce dynamic resume download
    - a thorough one
    - a simple one
    - one with an accepted template header for submissions to jobs
    
    The third option should take url parameters as inputs and generate a resume specific to those inputs. Things to look for...
    - a company name
    - a list of skills that require time amounts with them
    - a customizable forward section that can take a blurb => maybe something that can be bounced off of gemini AI to generate a forward specific to the job in question.
    - when we a person lands on a specified resume page they only see links in the header to the current page, story_time, and settings, the standard resume page should remain hidden behind behind a settings tag, something like "buisinessTime" that defaults to off when you load into the base page

    
*/

const Download: NextPage = () => {
    return (
        <div>
            Check the Gemini chat "Dynami PDF Generation." It describes a way to use my existing page data to download different resume types from the browser.
        </div>
    )
}

export default Download;