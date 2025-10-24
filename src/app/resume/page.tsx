import { NextPage } from "next";
import { BlurbWithTitle, ItemWithExplanations, StandardResumeSection, TitleWithBricks } from "./projections";
import { ResumeWording } from './resumeWording'

/* this will require a media query for small screen setup, primarily, more horizontal room if the screen is small */
const Resume: NextPage = () => {
    return (
        <div className="flex justify-center">
            <article className={`resume flex flex-col p-4 gap-4 m-2 max-w-4/5 text-lg`}>
                <StandardResumeSection title="Personal Details">
                    <div className="flex flex-wrap gap-4 justify-between text-(--text-theme-secondary)">
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
                <StandardResumeSection title="I subscribe to the agile manifesto">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className="flex flex-col justify-center items-center">
                            <span className="text-center">We are uncovering better ways of developing</span>
                            <span className="text-center">software by doing it and helping others do it.</span>
                            <span className="text-center">Through this work we have come to value:</span>
                        </p>
                        <p className="flex flex-col justify-center items-center">
                            <div className="flex flex-wrap justify-center">
                                <span className="text-2xl text-(--text-theme-secondary)">Individuals and interactions </span>
                                <span className="text-center">over processes and tools</span>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <span className="text-2xl text-(--text-theme-secondary)">Working software </span>
                                <span className="text-center">over comprehensive documentation</span>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <span className="text-2xl text-(--text-theme-secondary)">Customer collaboration </span>
                                <span className="text-center">over contract negotiation</span>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <span className="text-2xl text-(--text-theme-secondary)">Responding to change </span>
                                <span className="text-center">over following a plan</span>
                            </div>
                        </p>
                        <p className="flex flex-col justify-center items-center">
                            <span className="text-center">That is, while there is value in the items on</span>
                            <span className="text-center">the right, we value the items on the left more.</span>
                        </p>
                        <a
                            href="https://agilemanifesto.org/"
                            target="_blank"
                            className="pt-2 text-(--text-theme-secondary) font-semibold flex items-center"
                            >
                                The Agile Manifesto
                                <span className="material-icons text-xs pl-2">open_in_new</span>
                        </a>
                    </div>
                </StandardResumeSection>
                <StandardResumeSection title="Methodologies" >
                    <div className="flex flex-wrap gap-4 justify-around">

                        <BlurbWithTitle 
                            title="Test Driven Development (TDD)" 
                            blurb={ResumeWording.tddBlurb}
                            />
                            
                        <BlurbWithTitle 
                            title="Agile" 
                            blurb={`I have had good luck with Agile as it's nature allows my team and I to change focus and work styles as needed during growth.`}
                            />
                    </div>
                </StandardResumeSection>
                <StandardResumeSection title="Technology" >
                    {/* TODO-MAYBE: chart the technologies by experience & preference in a scatter chart */}
                    <TitleWithBricks 
                        title="Languages"
                        bricks={[{title: 'TypeScript'},{title: 'Javascript'},{title: 'Python'},{title: 'CSS'},{title: 'PowerShell'},{title: 'ColdFusion', link: 'https://en.wikipedia.org/wiki/Adobe_ColdFusion'},{title: 'Java'},{title: 'Terraform'},{title: 'YAML'}]}
                        />
                    <TitleWithBricks 
                        title="Javascript Frameworks"
                        bricks={[{title: 'Angular'},{title: 'React'},{title: 'Vue'}]}
                        />
                    <TitleWithBricks 
                        title="DB Languages"
                        bricks={[{title: 'MSSQL'},{title: 'PostgreSQL'},{title: 'SOQL/SOSL (Salesforce)'}]}
                        />
                    <TitleWithBricks 
                        title="CSS"
                        bricks={[{title: 'Basic & SCSS'},{title: 'Tailwind'},{title: 'Bootstrap'}]}
                        />
                    <TitleWithBricks 
                        title="Notable Packages"
                        bricks={[{title: 'RxJS', link: 'https://rxjs.dev/'},{title: 'Cypress'},{title: 'jQuery'}]}
                        />
                    <TitleWithBricks 
                        title="AWS Services"
                        bricks={[{title: 'Dynamo DB'},{title: 'Cloudwatch'},{title: 'Lambda'},{title: 'Amplify'},{title: 'AppConfig'},{title: 'IAM'},{title: 'RDS'},{title: 'WAF'}]}
                        />
                </StandardResumeSection>
                <StandardResumeSection title="Education" >
                    <ItemWithExplanations 
                        startDate="2019/01/01"
                        title="Tech Elevator"
                        subTitle="720 Hrs of Code"
                        talkingPoints={ResumeWording.techElevatorTalkingPoints}
                        justUseYear={true}
                        />
                    <ItemWithExplanations 
                        startDate="2007/01/01"
                        endDate="2011/01/01"
                        title="The College of Wooster"
                        subTitle="Bachelor of Arts in Physics"
                        talkingPoints={ResumeWording.woosterTalkingPoints}
                        justUseYear={true}
                        />
                </StandardResumeSection>
                <StandardResumeSection title="Professional Experience" >
                    {/* TODO: make this a swappable section, you can view it by project or company */}
                    <ItemWithExplanations 
                        title="Accenture"
                        subTitle="Software Engineer"
                        startDate="2022/10/05"
                        talkingPoints={ResumeWording.accentureTalkingPoints}
                        />
                    <ItemWithExplanations 
                        title="Benchmark Digital Partners LLC"
                        subTitle="Software Engineer & Product Owner"
                        startDate="2019/04/01"
                        endDate="2022/04/01"
                        talkingPoints={ResumeWording.benchmarkTalkingPoints}
                        />
                    <ItemWithExplanations 
                        title="Cornerstone Engineering"
                        subTitle="Spreadsheet Engineer and Data Analyst"
                        startDate="2011/09/01"
                        endDate="2019/01/01"
                        talkingPoints={ResumeWording.cornerstoneTalkingPoint}
                        />
                </StandardResumeSection>
            </article>
        </div>
    )
}

export default Resume