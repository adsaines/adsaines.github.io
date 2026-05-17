import { TalkingPoint } from "./projections"


const tddBlurb = `I've been using TDD for a while and I've found that I prefer to use it in two very specific cirumstances. The first is for refactoring; it makes it considerably easier to work on large classes and components with complex side-effects. The second is for time sensitive development; starting with the outcome keeps the focus on easy and direct logical steps.`

const accentureTalkingPoints: TalkingPoint[] = [
    {
        bolded: "Integrated GitHub Copilot into daily workflows",
        followUp: "Using AI-assisted tools like GitHub Copilot, I accelerated daily code generation, automated technical reviews, and streamlined our research processes."
    },
    {
        bolded: "Engineered and optimized full-stack applications",
        followUp: "I led critical refactoring initiatives across diverse frameworks to enhance functionality and maintainability, relying on AI-driven diagnostics for rapid troubleshooting."
    },
    {
        bolded: "Designed and implemented scalable architectural solutions",
        followUp: "I deployed microservices and APIs, leveraging generative AI to fast-track the initial system design phases and drive significant efficiency gains."
    },
    {
        bolded: "Developed and integrated robust data solutions",
        followUp: "Through AI pair-programming, I streamlined secure data processing, storage, and reporting to guarantee both delivery speed and strict compliance."
    },
    {
        bolded: "Mentored and guided team members on advanced development workflows",
        followUp: "I boosted collaborative team velocity and fostered modern skills by championing the adoption of AI-assisted coding practices across the organization."
    },
    {
        bolded: "Built, deployed, and maintained internal component library",
        followUp: "I standardized development practices and increased overall project delivery speed by generating highly reusable UI components with generative AI tools."
    }
]

const benchmarkTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Enhanced software quality and reliability',
        followUp: 'I achieved this through comprehensive testing strategies and proactive identification of system vulnerabilities.'
    },
    {
        bolded: 'Streamlined data management processes',
        followUp: 'I accomplished this with a thorough plan to transition from manual methods to automated, user-friendly interfaces and robust backend systems.'
    },
    {
        bolded: 'Successfully managed complex data integrations for high-profile clients',
        followUp: 'I ensured seamless workflows and enhanced data accessibility via rigorous vetting of data flows and upscaling of services.'
    },
]

const cornerstoneTalkingPoint: TalkingPoint[] = [
    {
        bolded: 'Applied advanced data extraction and analysis techniques',
        followUp: 'I bent my intellect to improve efficiency and derive actionable insights from diverse data sources.'
    },
    {
        bolded: 'Data Automation for Regulatory Compliance',
        followUp: 'I engineered and utilized automated data pipelines that guaranteed the timely and accurate population of tables and figures required for mandatory quarterly, semi-annual, and annual regulatory reporting deadlines.'
    },
    {
        bolded: 'Custom Analytical Solution Design',
        followUp: 'Leveraging cross-functional input from co-workers and superiors, I designed custom spreadsheets to provide immediate, consistent answers to complex, recurring questions asked by multiple clients.'
    },
]

const freelanceTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Architected and delivered independent Python projects',
        followUp: 'I developed personal solutions using Python, solving complex technical challenges in my personal laboratory environment.',
    },
    {
        bolded: 'Freelance data migration consulting',
        followUp: 'I advised a client on data integrity and transformation requirements for a high-volume historical data upload to the Salesforce platform, ensuring accurate schema mapping and compliance.',
    }
]

const techElevatorTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Full-stack coding bootcamp',
        followUp: 'I completed intensive training focused on developing dynamic, full-stack web applications, utilizing Java Spring Boot for robust APIs and Vue.js for component-based front-end systems.'
    }
]

const woosterTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Four years of analytical work',
        followUp: 'I studied under Professor Emeritus John Lindner, applying statistical methods to original research that ultimately led to the publication of a peer-reviewed paper.',
    }
]

export const ResumeWording = {
    tddBlurb,
    benchmarkTalkingPoints,
    cornerstoneTalkingPoint,
    accentureTalkingPoints,
    techElevatorTalkingPoints,
    woosterTalkingPoints,
    freelanceTalkingPoints
}