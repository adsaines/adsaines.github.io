import { NextPage } from "next";
import { EmployerWithProjects } from "./projections";
import { Employers } from "./projectData";

const Projects: NextPage = () => {

    return (
        <div className="h-full overflow-auto flex justify-center mb-4">
            <article className={`resume flex flex-col md:p-4 gap-6 m-2 md:max-w-4/5 sm:w-full text-lg`}>
                <EmployerWithProjects company={Employers.ACCENTURE} />
                <EmployerWithProjects company={Employers.FREELANCE} />
                <EmployerWithProjects company={Employers.GENSUITE} />
                <EmployerWithProjects company={Employers.CORNERSTONE} />
            </article>
        </div>
    )
}

export default Projects;