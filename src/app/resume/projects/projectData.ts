export type Years = {
    start: number;
    end?: number;
    continuing: boolean;
}

export enum Employers {
    ACCENTURE = 'Accenture',
    GENSUITE = 'Gensuite / Benchmark',
    CORNERSTONE = 'Cornerstone / Tetratech',
    FREELANCE = 'Freelance',
}

export enum DevelopmentMethodologies {
    WATERFALL = 'Waterfall',
    AGILE = 'Agile',
    TICKETS = 'Information Technology Infrastructure Library (ITIL)',
    TOP_DOWN = 'Chain of Command',
}

export enum TechSkills {
    A11Y = 'Accessibility (a11y)',
    MMS = 'Accenture Manage MySales (MMS)',
    ANGULAR = 'Angular',
    API = 'API',
    AWS_AMPLIFY = 'AWS Amplify',
    AWS_CLOUDWATCH = 'AWS Cloudwatch',
    AWS_DYNAMO = 'AWS Dynamo',
    AWS_LAMDBA = 'AWS Lamdba',
    AWS_S3 = 'AWS S3',
    AWS_SCHEDULER = 'AWS Scheduler',
    COLDFUSION = 'ColdFusion',
    CONTINUOUS_DATA_INTEGRATION = 'Continuous data integration',
    CONTINUOUS_MONITORING_SYSTEMS = 'Continuous monitoring systems',
    CYPRESS = 'Cypress',
    DATATABLES = 'DataTables',
    DEV_OPS = 'Dev ops',
    HTML_FORM_VALIDATION = 'HTML form validation',
    JAVASCRIPT = 'JavaScript',
    JEST = 'Jest',
    JQUERY = 'JQuery',
    LEGACY_CODE = 'Legacy code',
    LODASH = 'LoDash',
    PANDAS = 'Pandas',
    PREPROCESSING = 'Preprocessing',
    PROMISES = 'Promises',
    PYTHON = 'Python',
    QUICKBOOKS = 'QuickBooks',
    REACT = 'React',
    REACT_ARIA = 'React-Aria',
    REDUX = 'Redux',
    REFACTORING = 'Refactoring',
    REST_API = 'REST API',
    RXJS = 'RxJs',
    SALESFORCE = 'Salesforce',
    SQL = 'SQL',
    STORYBOOK = 'Storybook',
    SUB_PUB = 'Sub-Pub',
    TERRAFORM = 'Terraform',
    TYPESCRIPT = 'Typescript',
    VBA = 'Visual Basic for Applications (VBA)',
    VITEST = 'Vitest'
}

export enum SoftSkills {
    COMPLIANCE_REPORTING = 'Compliance reporting',
    CONSULTING = 'Consulting',
    ENGINEERING_STANDARDS = 'Engineering standards',
    FEDERAL_REGULATIONS = 'Federal regulations',
    OHIO_STATE_REGULATIONS = 'Ohio state regulations',
    DIGITAL_SECURITY = 'Digital Security',
    HEALTH_AND_SAFETY = 'Health and safety',
    LIVE_DOCUMENT = 'Live document',
    LIVE_TESTING = 'Live testing',
    RISK_MANAGEMENT = 'Risk management',
    SPRINT_PLANNING = 'Sprint Planning',
    PROCESS_ALIGNMENT = 'Process alignment'
}

export type Project = {
    employer: Employers;
    title: string, 
    techSkills?: string[],
    softSkills?: string[],
    methodology?: DevelopmentMethodologies[],
    years: Years,
    description: string
}

export const myProjects: Project[] = [
    {
        employer: Employers.ACCENTURE,
        title: "Bid optimization",
        techSkills:['React', 'Typescript', 'AWS Dynamo', 'AWS Cloudwatch', 'AWS Lamdba', 'AWS Amplify', 'AWS Scheduler', 'Python', 'Pandas', 'Vitest', 'Cypress', 'Accenture Manage MySales (MMS)', 'Salesforce', 'Dev ops'],
        softSkills: ['Flat team', 'Continuous improvement'],
        methodology: [DevelopmentMethodologies.AGILE],
        years: {start: 2024, continuing: true},
        description: 'Created an internal SAAS tool to optimize the creation of early stage deals, minimize the amount bonus stuffing, and maximize the bid price. We used AI powered tools to predict and suggest selections for our users.',
    },
    {
        employer: Employers.ACCENTURE,
        title: "Branded component library",
        techSkills: ['React', 'Typescript', 'React-Aria', 'a11y', 'Storybook'],
        softSkills: ['Flat team', 'Continuous improvement'],
        methodology: [DevelopmentMethodologies.AGILE],
        years: {start: 2024, continuing: true},
        description: 'Beutified a headless UI library to match the color, tone, and feel of Accenture branding to save internal teams development time.',
    },
    {
        employer: Employers.ACCENTURE,
        title: "E2E testing warehouse utilization",
        techSkills: ['React', 'Typescript', 'AWS S3', 'Terraform', 'Jest', 'Cypress'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TOP_DOWN, DevelopmentMethodologies.AGILE],
        years: {start: 2024, continuing: false},
        description: 'Thoroughly tested an applications usage paths by utilizing Cypress to process, annotate, and complete warehouse utilization scans; ensuring 100% coverage of application functionality.',
    },
    {
        employer: Employers.ACCENTURE,
        title: "Employee project utilization planner",
        techSkills: ['Angular', 'Typescript', 'RxJs', 'Redux', 'Sub-Pub', 'Continuous data integration'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.AGILE],
        years: {start: 2022, end: 2023, continuing: false},
        description: 'Created an integrated tool that fed off a deal publication pipeline to fill out employee headcounts, timelines, and costs; continuously monitoring the pipeline to ensure any update is pushed through to the user for incorporation in their planning session.',
    },
    {
        employer: Employers.FREELANCE,
        title: "Data migration",
        techSkills: ['Salesforce', 'QuickBooks', 'API', 'Consulting'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TOP_DOWN],
        years: {start: 2020, continuing: false},
        description: 'Advised a client on how best to upload disparate legacy data sources into Salesforce through their online portal.',
    },
    {
        employer: Employers.GENSUITE,
        title: "TANKS Calculations",
        techSkills: ['SQL', 'Refactoring', 'Coldfusion', 'Legacy code', 'Federal regulations'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TOP_DOWN],
        years: {start: 2020, continuing: false},
        description: 'Followed the letter of the law by utilizing SQL calculations that fed into SQL reports for each slice of data recieved about chemical storage tanks on client sites. We had to merge old calculations with new calculations and fill federally defined equation sets with the correct information to estimate chemical loss through natural processes.',
    },
    {
        employer: Employers.GENSUITE,
        title: "Refactoring",
        techSkills: ['JavaScript', 'Promises', 'ColdFusion', 'JQuery', 'HTML form validation', 'DataTables', 'REST API', 'Refactoring', 'Legacy code', 'Health and safety', 'Live testing'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TICKETS],
        years: {start: 2019, end: 2022, continuing: false},
        description: 'I worked to update untested legacy code files to follow modern class-based standards. Each modification was tested in parallel with the unmodified code to ensure that no functionality was lost. I broke up files, centralized data flows, added data classes, added static operations, removed duplication, added variability, and created REST APIs.',
    },
    {
        employer: Employers.GENSUITE,
        title: "Security Updates",
        techSkills: ['HTML form validation', 'SQL', 'ColdFusion', 'LoDash', 'JavaScript', 'Legacy code', 'Digital Security', 'Risk management'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TICKETS],
        years: {start: 2019, end: 2022, continuing: false},
        description: 'Working with the Action Tracking System (ATS) team, I updated our code base to prevent security vulnerabilities as we became aware of them. Our primary fixes included, but were by noe means limited to, SQL injection, cross platform script injection, HTML form manipulation, and broken access control.',
    },
    {
        employer: Employers.CORNERSTONE,
        title: "Flare data anlysis system",
        techSkills: ['Visual Basic for Applications (VBA)', 'Consulting', 'Live document', 'Compliance reporting', 'Federal regulations', 'Ohio state regulations', 'Engineering standards', 'Continuous data integration', 'Continuous monitoring systems'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.WATERFALL],
        years: {start: 2019, end: 2019, continuing: false},
        description: 'I harvested data from continuous monitoring systems attached to landfill gas flares and analyzed the data to make sure that the operation of the flare met federal and state requirements. Any violations or deviances from the prescribed operations were logged and a report generated for the proper authorities.',
    },
    {
        employer: Employers.CORNERSTONE,
        title: "Well data anlysis system",
        techSkills: ['Visual Basic for Applications (VBA)', 'Consulting', 'Live document', 'Compliance reporting', 'Federal regulations', 'Ohio state regulations', 'Engineering standards', 'Preprocessing'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.WATERFALL],
        years: {start: 2019, end: 2019, continuing: false},
        description: 'I harvested data from gas wells in landfills and analyzed the data to make sure that the landfill gas system met federal and state requirements. Any violations or deviances from the prescribed operations were logged and a report generated for the proper authorities.',
    },
    {
        employer: Employers.CORNERSTONE,
        title: "Leachate generation prediction",
        techSkills: ['Visual Basic for Applications (VBA)', 'API', 'Consulting'],
        softSkills: [],
        methodology: [DevelopmentMethodologies.TOP_DOWN],
        years: {start: 2016, continuing: false},
        description: `I was tasked to predict the amount of leachate that would be generated at our client's sites so that they could plan for any extra shipments that would need to be made to their treatment facility. By marrying historical weather data, the area of uncovered / under construction cells, historical leachate generation, and material runoff percentages I was able to come up with a working equation. When applied our clients were able to predict the total leachate generation based on rainfall and area of the working areas on their landfill.`,
    },
];