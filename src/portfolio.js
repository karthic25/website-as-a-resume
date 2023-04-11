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
  username: "Karthic Palaniappan",
  title: "Hello folks! I'm Karthic. Welcome to a website about myself!",
  subTitle: emoji(
    "I'm currently working on Machine Learning projects at AMD, mainly working on enhancing heuristic algorithms with the use of ML, optimizing them to be truely data-driven. I'm also passionate about improving ML infrastructure, having worked on tools to delineate black-box models like Random Forests, integrating experiment tracking and model versioning into the workflow, and packaging models in docker for inference. I have one [research publication](https://www.nature.com/articles/s41598-021-93258-w) in the development of tools to aid Cognitive Enhancement, and have applied for two patents in the field of Machine Learning in Electronic Design Automation. I'm also enthusiastic about full-stack development and staying current with latest trends in the field."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iLIyo4zrcFssVxviNw4Gf2BhG_K0aW3p/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/karthic25",
  linkedin: "https://www.linkedin.com/in/karthicp/",
  gmail: "karthic2507@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I currently work on solving problems in the 'Electronic Design Automation' (EDA) domain using machine learning. The state-of-the-art for most of these problems is otherwise based on heuristic algorithms, since the size of the search space to find the most optimal solution increases exponentially with the number of parameters to tune. The inherent complexity of such problems makes it immensely exciting to formulate and implement solutions using ML techniques, and efficient software pipelines for packaging the same into [Vivado ML Edition](https://www.xilinx.com/products/design-tools/vivado.html) for use by customers.",
  skills: [
    emoji(
      "⚡ Optimizing compute resources of integrated circuit (IC) design runs using Machine Learning (ML)"
    ),
    emoji("⚡ Optimizing placement of IC designs using ML"),
    emoji(
      "⚡ Debug toolkit to automate analysis of behaviour of black-box models"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
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
  schools: [
    {
      schoolName: "Indian Institute of Technology, Kanpur",
      logo: require("./assets/images/IITK.png"),
      subHeader: "B.Tech, Biological Sciences and Bioengineering",
      duration: "July 2016 - May 2020",
      desc: "Worked in Lab of Neural Systems under Prof. Nitin Gupta to develop computational tools to improve working memory of children with ASD.",
      descBullets: [
        "Part of a [research paper](https://www.nature.com/articles/s41598-021-93258-w) published for my work in Lab of Neural Systems",
        "Completed research paper based courses such as Bioinformatics and Computational Biology, Human Molecular Genetics with grade A.",
        "Achieved grade A* in Tissue Engineering, offered to outstanding students."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer II",
      company: "AMD/Xilinx",
      companylogo: require("./assets/images/AMD.png"),
      date: "July 2020 - Present",
      desc: "Work on cutting-edge technologies in the field of Machine Learning in Electronic Design Automation"
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Xilinx",
      companylogo: require("./assets/images/Xilinx.png"),
      date: "Summer 2019",
      desc: "Predicting design compile-time using instruction count."
    },
    {
      role: "Backend Developer Intern",
      company: "Tagalys",
      companylogo: require("./assets/images/Tagalys.png"),
      date: "Winter 2018",
      desc: "Building web-tools to enhance storefront of e-commerce shops on Shopify, by extracting information from user interactions and applying analytics for the same."
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
  title: "Big Projects",
  subtitle: "Some projects that I'm proud of!",
  projects: [
    {
      image: require("./assets/images/labOfNeuralSystems.webp"),
      projectName: "Computational tools for Cognitive Development",
      projectDesc: "Developed interactive, adaptive, minimalistic games to improve working memory of children diagnosed with ASD.",
      footerLink: [
        {
          name: "Read the paper",
          url: "https://www.nature.com/articles/s41598-021-93258-w"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Three impact awards for excellence at work",
      subtitle:
        "Received impact awards from my Manager, Senior Director, and Vice President for outstanding contributions across multiple software release cycles",
      image: require("./assets/images/Xilinx.png"),
      imageAlt: "Xilinx Logo"
    },
    {
      title: "Top 6% among 0.2 million candidates appeared for JEE Advanced, 2016",
      subtitle:
        "One of the toughest, most competitive exams in the world! Results from the exam are used for admission into institutes of national importance such as IITs.",
      image: require("./assets/images/IITK.png"),
      imageAlt: "IIT Kanpur Logo"
    },

    {
      title: "Top 2% among 1.5 million candidates appeared for JEE Mains, 2016",
      subtitle: "Results from the exam are used for admission into institutes of national importance such as NITs and IIITs.",
      image: require("./assets/images/IITK.png"),
      imageAlt: "IIT Kanpur Logo"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: galse // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "karthic2507@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
