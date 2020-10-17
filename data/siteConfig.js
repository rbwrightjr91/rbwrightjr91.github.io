module.exports = {
  siteTitle: 'Richard Wright',
  siteDescription: `Richard Wright Personal Website`,
  keyWords: ['gatsbyjs', 'react', 'developer', 'web dev', 'devops'],
  authorName: 'Richard Wright',
  twitterUsername: 'rbwrightjr91',
  githubUsername: 'rbwrightjr91',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `I'm currently a Senior Associate Cloud Ops Engineer at PowerSchool, located in Folsom, California. In May 2019 I graduated Cum Laude from California State University, Sacramento with a Bachelor of Science in Computer Science and a certificate in Game Engineering. Some of my hobbies include <a href="https://www.goodreads.com/user/show/16552310-richard-wright" target="_blank">reading books</a> and blogs, <a href="https://open.spotify.com/user/123095168?si=q24pdybvRneL2V-VxLWRcg" target="_blank">listening to music</a>, playing board and video games, and watching sports (hockey and baseball being my favorites).`,
  skills: [
    {
      name: 'Javascript',
      level: 60
    },
    {
      name: 'NodeJs',
      level: 65
    },
    {
      name: 'Angular 2+',
      level: 75
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'Python',
      level: 50
    },
    {
      name: 'Ansible',
      level: 35
    },
    {
      name: 'Docker',
      level: 35
    },
    {
      name: 'SQL',
      level: 40
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "PowerSchool",
      begin: {
        month: 'May',
        year: '2019'
      },
      duration: null,
      occupation: "Cloud Ops Engineer",
      description: "Responsible for supporting hosted customers and for software installations and configuration, continuous systems analysis, technical customer support, systems administration and database administration for the SaaS server technologies used in the hosted environment."
  
    },  {
      company: "River City Petroleum",
      begin: {
        month: 'May',
        year: '2018'
      },
      duration: '4 months',
      occupation: "IT Analyst",
      description: "General IT Support & Systems Administration, as well as WordPress plugin development "
  
    }, {
      company: "VSP",
      begin: {
        month: 'May',
        year: '2017'
      },
      duration: '10 months',
      occupation: "Web Development Intern",
      description: "Web Application development using Angular, Java, and Spring."
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/rbwrightjr91",
    linkedin: "https://www.linkedin.com/in/rbwrightjr91",
    github: "https://github.com/rbwrightjr91",
    email: "me@rbwrightjr91.dev"
  },
  siteUrl: 'https://rbwrightjr91.dev',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: '/images/favicon.ico',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}