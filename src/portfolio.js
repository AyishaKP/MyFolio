/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ayisha's Portfolio",
  description:
    "Mobile app development expert with over 10 years of extensive experience designing, building, and maintaining high-quality applications focused on payment systems, CRM systems, real estate, ecommerce, and loyalty platforms",
  og: {
    title: "Ayisha Farhan Portfolio",
    type: "website",
    url: "http://ayishakpgithub.io/",
  },
};

//Home Page
const greeting = {
  title: "Ayisha Farhan",
  logo_name: "ayisha",
  nickname: "ayisha",
  subTitle:
    "Mobile app development expert with over 10 years of extensive experience designing, building, and maintaining high-quality applications focused on payment systems, CRM systems, real estate, ecommerce, and loyalty platforms",
  resumeLink:
    "https://drive.google.com/file/d/1FvySaOrQkHAe-KjJxAFhjvIXclc35Kvr/view?usp=sharing",
  portfolio_repository: "https://github.com/ayishakp/MyFolio",
  githubProfile: "https://github.com/ayishakp",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ayishakp",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayisha-sulaiman-kallan-parambath-ba83329a",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ayishakp12@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/_sayishakp",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/ayishakp/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/sayishakp/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Mobile App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using Flutter, React Native and Native iOS apps using Swift",
        "⚡ Building responsive website front end using Futter Web",
        "⚡ Architecting and implementing application backends using a modern stack of Hasura, GraphQL, and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            backgroundColor: "transparent",
            color: "#147EFB",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            backgroundColor: "transparent",
            color: "#3DDC84",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "transparent",
            color: "#F05138",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#F34F29",
          },
        },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#178600",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
            color: "#FC8D0E",
          },
        },
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
      ],
    },
    {
      "title": "DevOps & Version Control",
      "fileName": "CloudInfraImg",
      "skills": [
        "⚡ Expertise in managing Continuous Integration/Continuous Deployment (CI/CD) pipelines on multiple cloud platforms (Azure, GCP and AWS)",
        "⚡ Proficient in integrating source code management (e.g., Git-based systems) with cloud build services to automate testing and deployment workflows",
        "⚡ Experience with automated code check-ins and triggered build processes within cloud environments",
        "⚡ Diagnosed and implemented appropriate fixes for CI/CD pipeline failures, ensuring continuous integration stability and optimal deployment performance."
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ayishakp12",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ayishakp12",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/ayishakp12",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ayishakp12",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ayishakp12",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajiv Gandhi College of Engineering and Technology",
      subtitle: "B.Tech in Information Technology",
      logo_path: "rgcet.png",
      alt_name: "RGCET",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Programming & Development: Developed proficiency in core programming languages such as C, C++, and Java and applied object-oriented programming (OOP) principles to solve complex problems",
        "⚡ Data Management: Gained extensive experience with Database Management Systems (DBMS), including database design, normalization, and using SQL for data retrieval and management",
        "⚡ Software Engineering: Applied principles of the Software Development Life Cycle (SDLC), including requirements gathering, design, testing, and documentation",
        "⚡ Networking & Systems: Acquired a solid understanding of computer networks, including network protocols (TCP/IP, OSI model), operating systems (Windows/Linux concepts), and basic IT infrastructure management",
        "⚡ Web Technologies: Studied foundational web development technologies like HTML, CSS, and JavaScript"
      ],
      website_link: "https://www.rgcet.edu.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Project Management Professional",
      subtitle: "- 26 June 2025",
      logo_path: "pmp.png",
      certificate_link:
        "https://www.credly.com/badges/739682ec-d963-4d7c-8f1a-4aa991fc9710/linked_in_profile",
      alt_name: "PMP",
      color_code: "#ffffffff",
    },
    {
      title: "Google Project Management Certificate",
      subtitle: "- July 15, 2022",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/243b8274-a1db-4b17-923f-4df948241798?source=linked_in_profile",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "How to Win a Data Science Competition: Learn from Top Kagglers",
    //   subtitle: "- Dmitry Ulyanov",
    //   logo_path: "hse_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/CP9F25PHNPZY",
    //   alt_name: "HSE University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Getting Started with AI using IBM Watson",
    //   subtitle: "- Rav Ahuja",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/8BQNNVCPWZPB",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "The Data Scientist’s Toolbox",
    //   subtitle: "- Jeff Leek, PhD",
    //   logo_path: "jhu_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/8BQNNVCPWZPB",
    //   alt_name: "Johns Hopkins University",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Crash Course on Python",
    //   subtitle: "- Google Career Certificates",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6EE3EMJ2LVX2",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Introduction to Git and GitHub",
    //   subtitle: "- Google Career Certificates",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/3SRFQCP5WFWK",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Intro to ML: Language Processing",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/7b304efc-0b3d-4a62-b1c5-1a775d7be49c/badges/197230",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "BigQuery Basics for Data Analysts",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.cloudskillsboost.google/public_profiles/7b304efc-0b3d-4a62-b1c5-1a775d7be49c/badges/230815",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Flutter Lead",
          company: "",
          company_url: "http://in3.ai",
          logo_path: "in3.png",
          duration: "Dec 2024 - Jun 2025",
          location: "Dubai, United Arab Emirates",
          description: [
            "Engineered a comprehensive, Flutter-based SaaS platform for streamlined property inspections, integrated seamlessly with a Salesforce backend",
            "Implemented state management using BLOC and Streams, optimized performance, and ensured responsive cross-platform UI/UX",
            "Led end-to-end development lifecycle from planning, coding, testing, and UAT to deployment, ensuring compliance and stability",
            "Perfected client operations with offline-capable features, contributing to significant improvement in service adoption and subscription revenues"
          ],
          color: "#0879bf",
        },
        {
          title: "Flutter Developer",
          company: "DScale",
          company_url: "https://dscale.io",
          logo_path: "dscale.png",
          duration: "Oct 2020 - Oct 2024",
          location: "Downtown, Dubai",
          description: [
            "Collaborated with cross-functional teams to identify user-centric features",
            "Engineered a secure mobile banking app integrating novel technologies like Emirates ID OCR, achieving a 30% rise in customer acquisition and transaction volumes",
            "Partnered with UI/UX designers to launch modern, fast mobile experiences, enhancing user engagement",
            "Translated Figma components to reusable Flutter UI libraries, reducing development time and improving project consistency",
            "Led efforts to boost indoor navigation and loyalty features",
            "Participated in R&D on AI-driven technologies, enhancing accessibility in digital banking through advanced voice applications"
          ],
          color: "#9b1578",
        },
        {
          title: "Mobile App Developer",
          company: "Emaar",
          company_url: "https://emaar.com",
          logo_path: "emaar.png",
          duration: "Jan 2020 - Sep 2020",
          location: "DIC, Dubai",
          description: [
            "Built dynamic UIs using Stateless/Stateful Widgets and BLOC architecture, ensuring seamless user interactions",
            "Integrated secure API communication and Firebase suite (Analytics, Crashlytics, Dynamic Links) for enhanced performance, stability, and data-driven decisions",
            "Executed release processes via CI/CD pipelines (Azure DevOps), improving deployment reliability and streamlining cycles, contributing to a 25% increase in app reliability and user retention",
            "Resolved critical production issues and prioritized customer-reported bugs to maintain uninterrupted user experience",
            "Conducted rigorous testing (unit, widget, and golden) for high-quality UI and logic assurance",
            "Managed complex data flows with Redux and Redux Saga, integrating offline storage and third-party libraries for real-time business insights"
          ],
          color: "#9b1578",
        },
        {
          title: "Flutter Developer",
          company: "AWOK.com (ALIFCA DMCC)",
          company_url: "https://www.rimeib.com/show-companies?companyID=10804011",
          logo_path: "awok.jpg",
          duration: "Dec 2019 - Apr 2020",
          location: "JLT, Dubai",
          description: [
            "Revamped the AWOK.com ecommerce mobile app using Flutter and BLoC pattern",
            "Designed and implemented UI adhering to best practices and branding",
            "Integrated Algolia Search for faster product discovery",
            "Managed API communication using REST and participated in Agile Scrum sprints with JIRA"
          ],
          color: "#9b1578",
        },
        {
          title: "Flutter Developer",
          company: "AWOK.com (ALIFCA DMCC)",
          company_url: "https://www.rimeib.com/show-companies?companyID=10804011",
          logo_path: "awok.jpg",
          duration: "Aug 2018 - Dec 2019",
          location: "DMCC, Dubai",
          description: [
            "Enhanced and maintained existing iOS application using Swift 4.2 and Objective-C",
            "Implemented Algolia Search and MoEngage for engagement and personalization",
            "Integrated animations, AutoLayout, AFNetworking, and OCMapper",
            "Supported release management using JIRA and Fabric (crash reporting, beta distribution)"
          ],
          color: "#9b1578",
        },
        {
          title: "Senior iOS Developer",
          company: "Bigeye",
          company_url: "https://www.bigeyeagency.com",
          logo_path: "askedoo.jpg",
          duration: "Sep 2017 - Jul 2018",
          location: "Freelance, USA",
          description: [
            "Developed a complex iOS application in Swift (2.3–4.0), ensuring UI/UX consistency using Auto-Layout",
            "Implemented backend integration using Alamofire, Realm, Object Mapper, and Promise Kit",
            "Visualized data using Scrollable Graph View and refined video streaming for performance"
          ],
          color: "#9b1578",
        },
        {
          title: "Senior iOS Developer",
          company: "Cherry Computers",
          company_url: "https://www.cherry.qa",
          logo_path: "cherry.png",
          duration: "Sep 2017 - Jul 2018",
          location: "Kerala, India",
          description: [
            "Independently launched the iOS application for a toy ecommerce platform",
            "Reduced data load times by 30% using Alamofire for optimized networking and Realm for efficient local storage"
          ],
          color: "#9b1578",
        },
        {
          title: "iOS Developer",
          company: "Focaloid Technologies",
          company_url: "https://www.focaloid.com",
          logo_path: "focaloid.png",
          duration: "Sep 2015 - May 2017",
          location: "Kerala, India",
          description: [
            "Developed banking utility features with Arabic localization, secure input validation, and error handling using Swift, ensuring compliance with bank-grade standards",
            "Increased data security by integrating secure RESTful APIs for real-time financial transactions"
          ],
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Web Developer Intern",
    //       company: "PeopleNTech Institute of IT",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "pnt.png",
    //       duration: "January 2022 -  March 2022",
    //       location: "Dhaka, Bangladesh",
    //       description: [
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       ],
    //       color: "#ee3c26",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description: [
    //         "I am actively contributing to many opensource projects. I have contributed to many open-source projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       ],
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My work focuses on architecting and deploying enterprise-grade Flutter applications across FinTech, retail, real estate and e-commerce domains with clean architecture, CI/CD automation, secure API integration, and hybrid cloud deployment for iOS and Android platforms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_ani.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ayishaintech.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dubai, United Arab Emirates",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:ayishakp12@gmail.com",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+971522652095",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
