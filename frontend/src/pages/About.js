import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function About() {
  const { profile } = useContext(AppContext);
  console.log(profile);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-white space-y-12">
        <h1 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-8">
          About Me
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg">
            This is <strong>{profile?.data?.name}</strong>, a proficient full-stack developer with a robust skill set spanning both front-end and back-end technologies.
            With a passion for building dynamic, responsive, and user-friendly web applications, <strong>{profile?.data?.name}</strong> excels in crafting seamless digital experiences.
          </p>
          
          <h2 className="font-semibold text-yellow-400 text-2xl">Technical Expertise</h2>
          <p className="text-lg">
            Front-End: Adept in modern JavaScript frameworks and libraries such as React.js, Angular, and Vue.js. Skilled in HTML5, CSS3, and responsive design principles to create intuitive and visually appealing interfaces. 
            Back-End: Proficient in server-side technologies including Node.js, Express.js, and Django. Experienced with database management using SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB. 
            DevOps: Knowledgeable in containerization and orchestration tools such as Docker and Kubernetes. Familiar with continuous integration and deployment (CI/CD) pipelines. 
            Cloud Services: Experience with cloud platforms like AWS, Azure, and Google Cloud, enabling scalable and reliable application deployments.
          </p>
          
          <h2 className="font-semibold text-yellow-400 text-2xl">Professional Highlights</h2>
          <p className="text-lg">
            Successfully developed and deployed numerous full-stack applications, demonstrating strong problem-solving skills and a keen eye for detail. 
            Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines. Continuously learning and adapting to emerging technologies and industry trends to stay ahead in the fast-evolving tech landscape.
          </p>
          
          <h2 className="font-semibold text-yellow-400 text-2xl">Personal Interests and Inspiration</h2>
          <p className="text-lg">
            Beyond his professional achievements, <strong>{profile?.data?.name}</strong> is a big fan of cricket.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
