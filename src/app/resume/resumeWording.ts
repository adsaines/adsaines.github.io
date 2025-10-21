import { TalkingPoint } from "./projections"


const tddBlurb = `I've been using TDD for a while and I've found that I prefer to use it two very specific cirumstances. The first is for refactoring; it makes it considerably easier to work on large classes and components with complex side-effects. The second is for time sensitive development; starting with the outcome keeps focus on easy and direct logical steps.`

const accentureTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Engineered and optimized full-stack applications',
        followUp: 'Leading critical refactoring initiatives to enhance functionality, user experience, and overall maintainability across diverse frameworks.'
    },
    {
        bolded: 'Designed and implemented scalable architectural solutions',
        followUp: 'Including microservices and API development, to drive significant efficiency gains.'
    },
    {
        bolded: 'Developed and integrated robust data solutions',
        followUp: 'Including secure data processing, storage, and reporting, ensuring data integrity and compliance.'
    },
    {
        bolded: 'Mentored and guided team members on advanced development workflows',
        followUp: 'Fostering skill development and collaborative success.'
    },
    {
        bolded: 'Built and utilized reusable component libraries',
        followUp: 'Standardizing development practices and increasing overall project efficiency.'
    },
]

const benchmarkTalkingPoints: TalkingPoint[] = [
    {
        bolded: 'Enhanced software quality and reliability',
        followUp: 'Through comprehensive testing strategies and proactive identification of system vulnerabilities. '
    },
    {
        bolded: 'Streamlined data management processes',
        followUp: 'By transitioning from manual methods to automated, user-friendly interfaces and robust backend systems.'
    },
    {
        bolded: 'Successfully managed complex data integrations for high-profile clients',
        followUp: 'Ensuring seamless workflows and enhanced data accessibility.'
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
        bolded: 'Four years of analytical work under Professor Emeritus John Lindner.',
        followUp: 'Progenitor of the published Order and chaos in the rotation and revolution of two massive line segments paper.',
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