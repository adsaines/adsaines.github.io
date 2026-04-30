import { NextPage } from "next";
import { Employer, ProjectDisplay } from "./projections";
import { Employers, myProjects } from "./projectData";

/*
    TODO: objectify all of the project information so that it can be easily re-used for resume generation.
*/

const Projects: NextPage = () => {

    return (
        <div className="h-full overflow-auto flex justify-center mb-4">
            <article className={`resume flex flex-col md:p-4 gap-6 m-2 md:max-w-4/5 sm:w-full text-lg`}>
                <Employer title="Accenture">
                    {
                        myProjects
                            .filter(proj => proj.employer === Employers.ACCENTURE)
                            .map(proj => {
                                return (
                                    <ProjectDisplay 
                                        key={proj.title.split(' ').join('-')} 
                                        project={proj} 
                                        >
                                            {proj.description}
                                    </ProjectDisplay>
                                )
                            })
                    }
                </Employer>
                <Employer title="Gensuite / Benchmark">
                    {
                        myProjects
                            .filter(proj => proj.employer === Employers.GENSUITE)
                            .map(proj => {
                                return (
                                    <ProjectDisplay 
                                        key={proj.title.split(' ').join('-')} 
                                        project={proj} 
                                        >
                                            {proj.description}
                                    </ProjectDisplay>
                                )
                            })
                    }
                </Employer>
                <Employer title="Cornerstone / Tetratech">
                    {
                        myProjects
                            .filter(proj => proj.employer === Employers.CORNERSTONE)
                            .map(proj => {
                                return (
                                    <ProjectDisplay 
                                        key={proj.title.split(' ').join('-')} 
                                        project={proj} 
                                        >
                                            {proj.description}
                                    </ProjectDisplay>
                                )
                            })
                    }
                </Employer>
                <div className="w-full">
                    Cornerstone
                </div>
            </article>
        </div>
    )
}

export default Projects;