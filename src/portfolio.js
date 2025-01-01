/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Nabeel Yousaf",
    title: "Hi all, I'm Nabeel",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Wordpress Shopify, PHP, Laravel, JavaScript / Reactjs / Nodejs / Nestjs / Nextjs / React Native / AWS and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/nabeel244",
    linkedin: "https://www.linkedin.com/in/nabeelyousaf",
    gmail: "nabeelmuhammad244@gmail.com",
    gitlab: "https://gitlab.com/nabeel_yousaf",
    facebook: "https://www.facebook.com/profile.php?id=100064573974950",
    medium: "#",
    stackoverflow: "https://stackoverflow.com/users/15225405/muhammad-nabeel",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
            schoolName: "University of Gujrat",
            logo: require("./assets/images/uog-university-of-gujrat1154.jpg"),
            subHeader: "Bachelors of Science in Computer Science",
            duration: "September 2015 - October 2019",
            desc: "Engaged in academic research and project development, contributing to publications in computing and technology.",
        descBullets: [
            "Collaborated on team projects focusing on web and mobile app development",
            "Conducted research on machine learning applications in real-world scenarios",
            "Organized and participated in university coding competitions and hackathons"
        ]
        },
        {
            schoolName: "information Technology University",
            logo: require("./assets/images/images.jpeg"),
            subHeader: "Masters of Science in Computer Science",
            duration: "April 2020 - April 2022",
            desc: "Graduated in the top 10% of the program. Specialized in advanced topics such as Software Engineering, Web Security, and Operating Systems.",
            descBullets: [
                "Developed a thesis on AI-driven solutions for cybersecurity challenges",
                "Collaborated on projects involving cloud computing and distributed systems",
                "Actively participated in seminars and workshops on emerging technologies"
            ]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "90%"
        },
        {
            Stack: "Deployment",
            progressPercentage: "70%"
        },
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "CTO at DK-Indeklima",
            company: "DK Indeklima",
            companylogo: require("./assets/images/dk_logo.webp"),
            date: "Nov 2023 , Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Web Developer",
            company: "Barontech Private limited",
            companylogo: require("./assets/images/barontech.webp"),
            date: "Dec 2022 – Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            role: "Front-End Developer",
            company: "Pixellete Technologies Inc",
            companylogo: require("./assets/images/Pixelette-Logo-06.png"),
            date: "June 2022 – Nov 2022",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Software Engineer Intern",
            company: "Rapid Fire Solutions",
            companylogo: require("./assets/images/final-logo.png"),
            date: "Dec 2019 – March 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Recent Projects",
    // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/guard_metrics.jpg"),
            projectName: "Guard Metrics",
            projectDesc: "The GuardMetrics officer management system is an affordable security guard tour system and app that can be used with any mobile smart device. Includes GPS officer tracking, perimeter and exception alerts, daily activity logs, incident reporting, time and attendance, an operations management calendar, & a neighborhood watch system called the Community Security App",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://guardmetrics.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/elite_soccer.png"),
            projectName: "Elite Soccer",
            projectDesc: "occer transcends being just a sport; it’s a captivating game that blends individual technical prowess with collaborative teamwork. To excel in soccer, one needs to master an array of technical skills while also understanding the nuances of tactical gameplay.",
            footerLink: [{
                name: "Visit Website",
                url: "https://churchbase.com/"
            }]
        },
        {
            image: require("./assets/images/church_base.png"),
            projectName: "Church Base",
            projectDesc: "Church Base is an all-in-one church software suite designed for leaders who want to grow their ministry, engage their community, and impact their world",
            footerLink: [{
                name: "Visit Website",
                url: "https://churchbase.com/"
            }]
        },
        {
            image: require("./assets/images/naseebi.webp"),
            projectName: "Naseebi",
            projectDesc: "A trusted platform designed to help individuals find meaningful connections and lifelong partnerships. We understand that finding the right match is one of the most important decisions in life, and that’s why we are here to simplify the process while respecting your values, preferences, and privacy.",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.naseebi.com/"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [{
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
    display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",

    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3204751593",
    email_address: "nabeelmuhammad244@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable,
    resumeSection
};