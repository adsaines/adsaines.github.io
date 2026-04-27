import { NextPage } from "next";
import { Employer, Project } from "./projections";

const Projects: NextPage = () => {
    return (
        <div className="h-full overflow-auto flex justify-center mb-4">
            <article className={`resume flex flex-col md:p-4 gap-6 m-2 md:max-w-4/5 sm:w-full text-lg`}>
                <Employer title="Accenture">
                    <Project 
                        title="Bid Optimization" 
                        techStack={['React', 'Typescript', 'AWS Dynamo', 'AWS Cloudwatch', 'AWS Lamdba', 'AWS Amplify', 'AWS Scheduler', 'Python', 'Pandas', 'Vitest', 'Cypress', 'Accenture Manage MySales (MMS)', 'Salesforce']}
                        >
                        Some details about clio.
                    </Project>
                </Employer>
                <hr className="sm:invisible" />
                <div className="w-full">
                    Gensuite / Benchmark
                </div>
                <hr className="sm:invisible" />
                <div className="w-full">
                    Cornerstone
                </div>
            </article>
        </div>
    )
}

export default Projects;