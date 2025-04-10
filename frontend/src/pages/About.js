import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function About() {

const{profile} = useContext(AppContext);
console.log(profile)

  return (
    <div>
      <div className="container mx-auto my-12 space-y-9">
        <h1 className="text-2xl font-semibold mb-6">About</h1>
        <p>
          This is  <strong>{profile?.data?.name}</strong> a proficient full stack developer with a
          robust skill set spanning both front-end and back-end technologies.
          With a passion for building dynamic, responsive, and user-friendly web
          applications, <strong>{profile?.data?.name}</strong> excels in crafting seamless digital experiences.
        </p>
        <h2 className="font-semibold text-blue-800 text-xl">
          Technical Expertise
        </h2>
        <p>
          Front-End: Adept in modern JavaScript frameworks and libraries such as
          React.js, Angular, and Vue.js. Skilled in HTML5, CSS3, and responsive
          design principles to create intuitive and visually appealing
          interfaces. Back-End: Proficient in server-side technologies including
          Node.js, Express.js, and Django. Experienced with database management
          using SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB.
          DevOps: Knowledgeable in containerization and orchestration tools such
          as Docker and Kubernetes. Familiar with continuous integration and
          deployment (CI/CD) pipelines. Cloud Services: Experience with cloud
          platforms like AWS, Azure, and Google Cloud, enabling scalable and
          reliable application deployments.
        </p>
        <h2 className="font-semibold text-blue-800 text-xl">
          Professional Highlights:
        </h2>
        <p>
          Successfully developed and deployed numerous full-stack applications,
          demonstrating strong problem-solving skills and a keen eye for detail.
          Collaborated with cross-functional teams to deliver high-quality
          software solutions within tight deadlines. Continuously learning and
          adapting to emerging technologies and industry trends to stay ahead in
          the fast-evolving tech landscape.
        </p>
        <br />

        <h2 className="font-semibold text-blue-800 text-xl">
          Personal Interests and Inspiration:
        </h2>
        <p>
          Beyond his professional achievements, <strong>{profile?.data?.name}</strong> is a big fan of cricket.
        </p>
      </div>
    </div>
  );
}

export default About;
