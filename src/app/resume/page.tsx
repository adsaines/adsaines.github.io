import { NextPage } from "next";
import { BlurbWithTitle, StandardResumeSection } from "./projections";

const Resume: NextPage = () => {

    const tddBlurb = `I've been using TDD for a while, but I've found that I prefer to use it two very specific cirumstances. The first is for refactoring; it makes it considerably easier to work on large classes and components. The second is for time sensitive development; starting with the outcome keeps focus on easy and direct logical steps.`

    return (
        <article className={`resume flex flex-col p-4 gap-4 m-2 max-w-4/5 text-lg`}>
            <StandardResumeSection title="Personal Details">
                <div className="flex gap-4 justify-between">
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
                <div>
                    <h3>Tech Elevator | 720 Hrs of Code</h3>
                    <p>2019</p>
                    <p>Full-stack coding bootcamp to develop dynamic web based software systems using Java & Vue.</p>
                </div>
                <div>
                    <h3>The College of Wooster | Bachelor of Arts in Physics </h3>
                    <p>2007-2011</p>
                    <p>Progenitor of the published Order and chaos in the rotation and revolution of two massive line segments paper.</p>
                </div>
            </StandardResumeSection>
            <StandardResumeSection title="Professional Experience" >
                <div>
                    <h3>Accenture</h3>
                    <p>Oct 2022 - Present</p>
                    <p>Software Engineer</p>
                    <ul>
                        <li>
                            Engineered and optimized full-stack applications, leading critical refactoring initiatives to enhance functionality, user experience, and overall maintainability across diverse frameworks.
                        </li>
                        <li>
                            Designed and implemented scalable architectural solutions, including microservices and API development, to drive significant efficiency gains. 
                        </li>
                        <li>
                            Developed and integrated robust data solutions, including secure data processing, storage, and reporting, ensuring data integrity and compliance.
                        </li>
                        <li>
                            Mentored and guided team members on advanced development workflows, fostering skill development and collaborative success. 
                        </li>
                        <li>
                            Built and utilized reusable component libraries, standardizing development practices and increasing overall project efficiency. 
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Benchmark Digital Partners LLC</h3>
                    <p>April 2019 - April 2022</p>
                    <p>Software Engineer | Product Owner</p>
                    <ul>
                        <li>
                            Enhanced software quality and reliability through comprehensive testing strategies and proactive identification of system vulnerabilities. 
                        </li>
                        <li>
                            Streamlined data management processes by transitioning from manual methods to automated, user-friendly interfaces and robust backend systems.
                        </li>
                        <li>
                            Successfully managed complex data integrations for high-profile clients, ensuring seamless workflows and enhanced data accessibility. 
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Cornerstone Engineering</h3>
                    <p>September 2011 - January 2019</p>
                    <p>Spreadsheet Engineer and Data Analyst</p>
                    <ul>
                        <li>
                            Applied advanced data extraction and analysis techniques to improve reporting efficiency and derive actionable insights from diverse data sources. 
                        </li>
                    </ul>
                </div>
            </StandardResumeSection>
        </article>
    )
}

export default Resume