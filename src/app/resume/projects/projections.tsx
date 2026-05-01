import { Years, Project, SoftSkills, TechSkills, myProjects, Employers } from "./projectData";

export const ProjectDisplay = ({
    children,
    project
}:{
    children: React.ReactNode,
    project: Project
}) => {
    return (
        <div className="flex flex-col sm:p-2 max-sm:py-4 gap-2">
            <h3 className="font-bold text-(--light-secondary) text-xl max-sm:underline">
                {project.title} ({yearsTag(project.years)})
            </h3>
            <div className="flex ">
                {children}
            </div>
            <SkillDisplay skillTitle="Tech skills"  skills={project.techSkills}/>
            <SkillDisplay skillTitle="Soft skills"  skills={project.softSkills}/>
        </div>
    )
}

const SkillDisplay = ({skills, skillTitle}:{skills?: SoftSkills[] | TechSkills[], skillTitle: string}) => {

    if(!skills || skills.length === 0){
        return null
    }

    return (
        <div className="flex px-8 py-2">
            <div className="text-(--light-secondary) font-bold flex w-1/5 justify-end items-center border-r-2 border-(--light-primary) pr-3 mr-3">
                {skillTitle}
            </div>
            <hr dir="vertical" />
            <div className="text-(--light-tertiary) w-4/5 flex flex-wrap justify-start gap-3">
                {skills?.map((skill) => {
                    return (
                        <span>{skill}</span>
                    )
                })}
            </div>
        </div>
    )
}

const yearsTag = (years: Years) => {

    if (years.continuing){
        return `${years.start} - Present`;
    }
    
    if (!years.continuing && !years.end){
        return `${years.start}`;
    }

    if(years.start === years.end){
        return years.start;
    }

    return `${years.start} - ${years.end}`;
}

export const Employer = ({title, children}:{title: string, children: React.ReactNode}) => {
    return (
        <div className="flex flex-col p-6 max-sm:p-8 gap-2 border-1 border-dashed rounded-sm border-(--dark-primary) border-rounded hover:border-(--light-primary)">
            <h2 className="font-bold text-2xl underline">
                {title}
            </h2>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}

export const EmployerWithProjects = ({company}:{company: Employers}) => {
    return (
        <Employer title={company}>
            {
                myProjects
                    .filter(proj => proj.employer === company)
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
    )
}