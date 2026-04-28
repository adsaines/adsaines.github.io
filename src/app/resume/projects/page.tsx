import { NextPage } from "next";
import { Employer, Project } from "./projections";

/*
    TODO: objectify all of the project information so that it can be easily re-used for resume generation.
*/

const Projects: NextPage = () => {
    return (
        <div className="h-full overflow-auto flex justify-center mb-4">
            <article className={`resume flex flex-col md:p-4 gap-6 m-2 md:max-w-4/5 sm:w-full text-lg`}>
                <Employer title="Accenture">
                    <Project 
                        title="Bid optimization" 
                        techStack={['React', 'Typescript', 'AWS Dynamo', 'AWS Cloudwatch', 'AWS Lamdba', 'AWS Amplify', 'AWS Scheduler', 'Python', 'Pandas', 'Vitest', 'Cypress', 'Accenture Manage MySales (MMS)', 'Salesforce']}
                        years={{start: 2024, continuing: true}}
                        >
                        Some details about clio.
                    </Project>
                    <Project 
                        title="Branded component library" 
                        techStack={['React', 'Typescript', 'React-Aria', 'a11y']}
                        years={{start: 2024, continuing: true}}
                        >
                        Some details about muse.
                    </Project>
                    <Project 
                        title="E2E testing warehouse utilization" 
                        techStack={['React', 'Typescript', 'AWS S3', 'Terraform', 'Jest', 'Cypress']}
                        years={{start: 2024, continuing: false}}
                        >
                        Some details about How I tested the rastorization process.
                    </Project>
                    <Project 
                        title="Employee project utilization planner" 
                        techStack={['Angular', 'Typescript', 'RxJs', 'Redux', 'Sub-Pub']}
                        years={{start: 2022, end: 2023, continuing: false}}
                        >
                        Talk about online spreadsheets.
                    </Project>
                </Employer>
                <div className="w-full">
                    Gensuite / Benchmark
                </div>
                <div className="w-full">
                    Cornerstone
                </div>
            </article>
        </div>
    )
}

export default Projects;