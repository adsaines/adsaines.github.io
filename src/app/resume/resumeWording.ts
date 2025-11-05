import { TalkingPoint } from "./projections"


const tddBlurb = `I've been using TDD for a while and I've found that I prefer to use it in two very specific cirumstances. The first is for refactoring; it makes it considerably easier to work on large classes and components with complex side-effects. The second is for time sensitive development; starting with the outcome keeps the focus on easy and direct logical steps.`

const accentureTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Engineered and optimized full-stack applications',
        followUp: 'I Lead critical refactoring initiatives to enhance functionality, user experience, and overall maintainability across diverse frameworks.'
    },
    {
        bolded: 'Designed and implemented scalable architectural solutions',
        followUp: `These solutions were deployed across microservices and API's to drive significant efficiency gains.`
    },
    {
        bolded: 'Developed and integrated robust data solutions',
        followUp: 'Development included secure data processing, storage, and reporting, ensuring data integrity and compliance.'
    },
    {
        bolded: 'Mentored and guided team members on advanced development workflows',
        followUp: 'I fostered skill development and collaborative success.'
    },
    {
        bolded: 'Built, deployed, and maintained internal component library',
        followUp: 'Our library standardized development practices and increased overall project efficiency.'
    },
]

const benchmarkTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Enhanced software quality and reliability',
        followUp: 'I achieved this through comprehensive testing strategies and proactive identification of system vulnerabilities.'
    },
    {
        bolded: 'Streamlined data management processes',
        followUp: 'We accomplished this with a thorough plan to transition from manual methods to automated, user-friendly interfaces and robust backend systems.'
    },
    {
        bolded: 'Successfully managed complex data integrations for high-profile clients',
        followUp: 'I ensured seamless workflows and enhanced data accessibility via rigorous vetting of data flows and upscaling of services.'
    },
]

const cornerstoneTalkingPoint: TalkingPoint[] = [
    {
        bolded: 'Applied advanced data extraction and analysis techniques',
        followUp: 'To improve reporting efficiency and derive actionable insights from diverse data sources.'
    }
]

const techElevatorTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Full-stack coding bootcamp',
        followUp: 'To develop dynamic web based software systems using Java & Vue.'
    }
]

const woosterTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Four years of analytical work',
        followUp: 'Studied under Professor Emeritus John Lindner and became the progenitor of a published paper.',
    }
]

export const ResumeWording = {
    tddBlurb,
    benchmarkTalkingPoints,
    cornerstoneTalkingPoint,
    accentureTalkingPoints,
    techElevatorTalkingPoints,
    woosterTalkingPoints,
}