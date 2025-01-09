import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "./namasteFood.PNG",
    name: "Namaste Food",
    description: "Online Food Ordering Site.",
    githubLink: "https://github.com/KhalkarYash/NamasteReact",
    techStack: ["ReactJS", "JavaScript"],
  },
  {
    image: "./collegeMarkTracker.PNG",
    name: "College Mark Tracker",
    description:
      "A web application designed to help students track their academic performance and manage their grades effectively.",
    githubLink: "https://github.com/KhalkarYash/college-mark-tracker",
    techStack: ["Django", "BootStrap"],
  },
  {
    image: "./todoProject.PNG",
    name: "todo List",
    description:
      "A comprehensive web development project demonstrating proficiency in HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/KhalkarYash/Final-Project-Web-Dev",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "./alarmClock.PNG",
    name: "Alarm Clock",
    description:
      "A functional alarm clock application built using JavaScript to set and manage alarms.",
    githubLink: "https://github.com/KhalkarYash/AlarmClock",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "./blogProject.PNG",
    name: "Blog Project",
    description:
      "A blogging platform developed as part of web development training, allowing users to create and manage blog posts.",
    githubLink: "https://github.com/KhalkarYash/Blog-Project-Web-Training",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "./movieRecommendationProject.PNG",
    name: "Movie Recommendation System",
    description: "A web app to recommend movies based on genres.",
    githubLink: "https://github.com/KhalkarYash/Movie-Recommendation-System",
    techStack: ["HTML", "CSS", "JavaScript", "TMDb API"],
  },
];

const Project = () => {
  return (
    <div className="project" id="projects">
      <h3>My Projects</h3>
      <div className="projectCardsContainer">
        {projects.map((pro, index) => {
          return <ProjectCard key={index} prData={pro} />;
        })}
      </div>
    </div>
  );
};

export default Project;
