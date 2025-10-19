import { NextPage } from "next";
import { HorizontalRuleWithTitle, StandardResumeSection } from "./projections";

const Resume: NextPage = () => {
    return (
        <article className={`resume flex flex-col p-4 gap-4 m-2 max-w-4/5 text-lg`}>
            <HorizontalRuleWithTitle title="Personal Details" />
            <StandardResumeSection>
                <h1>
                    Alex Saines
                </h1>
            </StandardResumeSection>
            <StandardResumeSection>
                <h2>
                    <a href="mailto:adsaines@gmail.com" aria-label="Email me at adsaines@gmail.com">
                        adsaines@gmail.com
                    </a>
                </h2>
            </StandardResumeSection>
            <StandardResumeSection>
                <h2>
                    740-279-5560
                </h2>
            </StandardResumeSection>
            <HorizontalRuleWithTitle title="Methodologies" />
            <StandardResumeSection>
                <p>
                    Test Driven Development (TDD) keeps side effects to a minimum and helps reduce later confusion. 
                </p>
                <p>
                    Agile keeps engineers on task and avoids over development of unneeded features. 
                </p>
            </StandardResumeSection>
            <HorizontalRuleWithTitle title="Technology" />
            <StandardResumeSection>
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
            <HorizontalRuleWithTitle title="Education" />
            <StandardResumeSection>
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
            <HorizontalRuleWithTitle title="Professional Experience" />
            <StandardResumeSection>
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