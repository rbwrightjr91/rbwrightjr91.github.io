export type Job = {
  company: string
  begin: string
  end?: string
  title: string
  description?: string[]
}

export const jobs: Job[] = [
  {
    company: 'Pluralsight',
    begin: '2021-07-12 07:00:00+00',
    title: 'Software Engineer',
    description:
      ["As part of the Search & Discovery team, completed a full and in-place rewrite of the global navigation of the company’s main application from Hyperapp into Svelte. Technologies used include Svelte, Typescript, NodeJS, and PostgreSQL.", "As a part of the Search & Discovery team, responsible for the development, deployment, and maintenance of the Search/Relevance API, including a migration from GitHub to GitLab, creation of a CICD pipeline in GitLab, and a migration from self-managed instances of Elasticsearch and Apache Airflow in AWS to AWS-managed instances (Open Search and MWAA). Working in a mob with Data Scientists and Machine Learning Engineers, implemented algorithms and models to increase the relevance of results returned when a user searches our platform. Technologies used include Python, Typescript, NodeJS, Open Search, Apache Airflow, and PostgreSQL."],
  },
  {
    company: 'PowerSchool',
    begin: '2020-10-15 07:00:00+00',
    end: '2021-05-13 07:00:00+00',
    title: 'Associate DevOps Engineer II',
    description:
      ['As a member of the Service Automation team, responsible for supporting engineering teams plan, build, and maintain CI/CD workflows, including Atlassian Bamboo and GitLab Pipelines. Also responsible for identifying candidates for general automation within the organization.'],
  },
  {
    company: 'PowerSchool',
    begin: '2019-05-20 07:00:00+00',
    end: '2020-10-15 07:00:00+00',
    title: 'Associate DevOps Engineer I',
    description:
      ['Responsible for supporting hosted customers and for software installations and configuration, continuous systems analysis, technical customer support, systems administration and database administration for the SaaS server technologies used in the hosted environment.'],
  },
  {
    company: 'River City Petroleum',
    begin: '2018-05-01 07:00:00+000',
    end: '2018-08-31 07:00:00+00',
    title: 'IT Analyst',
    description:
      ['IT Support, Systems Administration, and WordPress plugin development.'],
  },
  {
    company: 'VSP Global Technology Solutions',
    begin: '2017-05-01 07:00:00+00',
    end: '2018-02-28 08:00:00+00',
    title: 'Software Engineering Intern',
    description: ['Web Application development using Angular, Java, and Spring'],
  },
]
