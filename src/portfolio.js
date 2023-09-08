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
  username: "Manthan Sharma",
  title: "Hi all, I'm Manthan",
  subTitle: emoji(
    "A passionate Data Science enthusiast. Collaborative team player skilled in solving complex challenges. Customer-focused Software Engineer with a knack for innovation, aligning user needs and product requirements. Adaptable to new technologies and tools, applying creative solutions to drive impact."
  ),

  
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manthanhs16",
  linkedin: "https://linkedin.com/in/manthan-sharmab53b711b2/",
  gmail: "manthansharma1626@gmail.com",
  instagram: "https://www.facebook.com/saad.pastahttps://instagram.com/manthan_sharma0606?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ A Tech Savvy who loves to explore new technologies and leverage them to solve real-life problems."
    ),
    emoji(""),
    emoji(
      ""
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    
    {
      skillName: "DBMS",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharishi Dayanand Saraswati University, Ajmer",
      logo: require("./assets/images/mdsulogo.png"),
      subHeader: "Bachelor of in Computer Applications (Hounors)",
      duration: "2020-2023",
      desc: "Data Science, Machine Learning, Data Mining Software Engineering, Operating Systems, ...",
    },
    {
      schoolName: "[D.A.V] D.B.N Sr. Sec. School, Ajmer",
      logo: require("./assets/images/davlogo.png"),
      subHeader: "Computer Science",
      duration: "2019-2020",
      desc: "Senior Secondary School",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ML-Ops",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Science",
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
      role: "Technical Consulting Internship",
      company: "SAP",
      companylogo: require("./assets/images/SAP.png"),
      
      desc: "Assemble the Data, Data Analysis",
     
    },
    {
      role: "Software Development Virtual Experience Program",
      company: "Datacom",
      companylogo: require("./assets/images/datacom.png"),
      
      desc: "Software review Identifying root cause and fixing bugs"
    },
    {
      role: "Data Science Intern",
      company: "YHills",
      companylogo: require("./assets/images/yhills.png"),
      
      desc: "Data Visualization, Data Analysis, Data Cleaning, Data Preprocessing, Machine Learning, Predictive Modelling, Python",
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
  title: "Microsoft Learn Student Ambassador",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/image008.png"),
      projectName: "New MLSA Milestone",
      
    },
    {
      image: require("./assets/images/alpha.png"),
      projectName: "Alpha MLSA Milestone",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "End-to-end machine learning operations (MLOps) with Azure Machine Learning",
      subtitle:
        "Microsoft",
      image: require("./assets/images/mlops (2).png"),
     
      footerLink: [
        
        
        
      ]
    },
    {
      title: "Azure Machine Learning Workspace",
      subtitle:"Microsoft",
      image: require("./assets/images/azureml.png"),
      footerLink: [
       
      ]
    },

    {
      title: "FOSS For Geospatial Technology",
      subtitle: "ISRO, IIRS",
      image: require("./assets/images/iirs.png"),
      footerLink: [
       
      ]
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
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8107831722",
  email_address: "manthansharma1626@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
