export type Job = {
  company: string
  begin: string
  end?: string
  title: string
  description?: string
}

export const jobs: Job[] = [
  {
    company: 'Pluralsight',
    begin: '2021-07-12 07:00:00+00',
    title: 'Software Engineer',
    description:
      "Working as a small mob of engineers, took over the maintenance and feature development of the global navigation module of the company's main product.",
  },
  {
    company: 'PowerSchool',
    begin: '2020-10-15 07:00:00+00',
    end: '2021-05-13 07:00:00+00',
    title: 'Associate DevOps Engineer II',
    description:
      'As a member of the Service Automation team, responsible for supporting engineering teams plan, build, and maintain CI/CD workflows, including Atlassian Bamboo and GitLab Pipelines. Also responsible for identifying candidates for general automation within the organization.',
  },
  {
    company: 'PowerSchool',
    begin: '2019-05-20 07:00:00+00',
    end: '2020-10-15 07:00:00+00',
    title: 'Associate DevOps Engineer I',
    description:
      'Responsible for supporting hosted customers and for software installations and configuration, continuous\r\nsystems analysis, technical customer support, systems administration and database administration for the\r\nSaaS server technologies used in the hosted environment.',
  },
  {
    company: 'River City Petroleum',
    begin: '2018-05-01 07:00:00+000',
    end: '2018-08-31 07:00:00+00',
    title: 'IT Analyst',
    description:
      'IT Support, Systems Administration, and WordPress plugin development.',
  },
  {
    company: 'VSP Global Technology Solutions',
    begin: '2017-05-01 07:00:00+00',
    end: '2018-02-28 08:00:00+00',
    title: 'Software Engineering Intern',
    description: 'Web Application development using Angular, Java, and Spring',
  },
]
