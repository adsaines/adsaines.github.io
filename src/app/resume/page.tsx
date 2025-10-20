import { NextPage } from "next";
import { BlurbWithTitle, EducationChunk, ProffessionalExperience, StandardResumeSection, TalkingPoint } from "./projections";

const Resume: NextPage = () => {

    const tddBlurb = `I've been using TDD for a while, but I've found that I prefer to use it two very specific cirumstances. The first is for refactoring; it makes it considerably easier to work on large classes and components. The second is for time sensitive development; starting with the outcome keeps focus on easy and direct logical steps.`

    const accentureTalkingPoints: TalkingPoint[] = [
        {
            bolded: 'Engineered and optimized full-stack applications',
            followUp: 'leading critical refactoring initiatives to enhance functionality, user experience, and overall maintainability across diverse frameworks.'
        },
        {
            bolded: 'Designed and implemented scalable architectural solutions',
            followUp: 'including microservices and API development, to drive significant efficiency gains.'
        },
        {
            bolded: 'Developed and integrated robust data solutions',
            followUp: 'including secure data processing, storage, and reporting, ensuring data integrity and compliance.'
        },
        {
            bolded: 'Mentored and guided team members on advanced development workflows',
            followUp: 'fostering skill development and collaborative success.'
        },
        {
            bolded: 'Built and utilized reusable component libraries',
            followUp: 'standardizing development practices and increasing overall project efficiency.'
        },
    ]

    const benchmarkTalkingPoints: TalkingPoint[] = [
        {
            bolded: 'Enhanced software quality and reliability',
            followUp: 'through comprehensive testing strategies and proactive identification of system vulnerabilities. '
        },
        {
            bolded: 'Streamlined data management processes',
            followUp: 'by transitioning from manual methods to automated, user-friendly interfaces and robust backend systems.'
        },
        {
            bolded: 'Successfully managed complex data integrations for high-profile clients',
            followUp: 'ensuring seamless workflows and enhanced data accessibility.'
        },
    ]

    const cornerstoneTalkingPoint: TalkingPoint[] = [
        {
            bolded: 'Applied',
            followUp: 'advanced data extraction and analysis techniques to improve reporting efficiency and derive actionable insights from diverse data sources.'
        }
    ]

    return (
        <article className={`resume flex flex-col p-4 gap-4 m-2 max-w-4/5 text-lg`}>
            <StandardResumeSection title="Personal Details">
                <div className="flex gap-4 justify-between text-(--text-theme-secondary)">
                    <span>
                        Alex Saines
                    </span>
                    <span>
                        <a href="mailto:adsaines@gmail.com" aria-label="Email me at adsaines@gmail.com">
                            adsaines@gmail.com
                        </a>
                    </span>
                    <span>
                        740-279-5560
                    </span>
                </div>
            </StandardResumeSection>
            <StandardResumeSection title="Methodologies I Follow" >
                <div className="flex gap-4 justify-around">

                    <BlurbWithTitle 
                        title="Test Driven Development (TDD)" 
                        blurb={tddBlurb}
                        />
                        
                    <BlurbWithTitle 
                        title="Agile" 
                        blurb={`I have had good luck with Agile as it's nature allows my team and I to change focus and work styles as needed during growth.`}
                        />
                </div>
            </StandardResumeSection>
            <StandardResumeSection title="Technology" >
                <div className="flex flex-col gap-4">
                    {/* TODO-MAYBE: chart the technologies by experience & preference in a scatter chart */}
                </div>
                <p>
                    JS Frameworks: Angular, React, and Vue
                </p>
                <p>
                    Languages: Typescript, Javascript, Python, HTML, CSS, PowerShell, ColdFusion, Java
                </p>
                <p>
                    Queries: MSSQL, PostgreSQL, SOQL/SOSL (Salesforce)
                </p>
                <p>
                    Packages: Cypress, jQuery, Vitest
                </p>
                <p>
                    CSS: basic, Tailwind, SCSS, Bootstrap
                </p>
                <p>
                    AWS: I use it
                </p>
                <p>
                    Environmental Languages: Terraform, YAML
                </p>
                <p>
                    Buzzwords: Microservices
                </p>
            </StandardResumeSection>
            <StandardResumeSection title="Education" >
                <EducationChunk 
                    blurb="Full-stack coding bootcamp to develop dynamic web based software systems using Java & Vue."
                    graduated={2019}
                    name="Tech Elevator"
                    tagline="720 Hrs of Code"
                    />
                {/* TODO: work the paper link into the education chunk */}
                <EducationChunk 
                    blurb="Progenitor of the published Order and chaos in the rotation and revolution of two massive line segments paper."
                    started={2007}
                    graduated={2011}
                    name="The College of Wooster"
                    tagline="Bachelor of Arts in Physics"
                    />
            </StandardResumeSection>
            <StandardResumeSection title="Professional Experience" >
                {/* TODO: make this a swappable section, you can view it by project or company */}
                <ProffessionalExperience 
                    company="Accenture"
                    positionTitle="Software Engineer"
                    startDate="2022/10/05"
                    talkingPoints={accentureTalkingPoints}
                    />
                <ProffessionalExperience 
                    company="Benchmark Digital Partners LLC"
                    positionTitle="Software Engineer & Product Owner"
                    startDate="2019/04/01"
                    endDate="2022/04/01"
                    talkingPoints={benchmarkTalkingPoints}
                    />
                <ProffessionalExperience 
                    company="Cornerstone Engineering"
                    positionTitle="Spreadsheet Engineer and Data Analyst"
                    startDate="2011/09/01"
                    endDate="2019/01/01"
                    talkingPoints={cornerstoneTalkingPoint}
                    />
            </StandardResumeSection>
        </article>
    )
}

export default Resume