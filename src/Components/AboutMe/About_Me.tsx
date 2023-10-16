import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col w-full h-10 place-items-center justify-items-center">
        <h2 className="text-xl">About Me</h2>
      </div>

      <div>
        <div className="justify-center">
          <div className="grid grid-cols-2 gap-8 w-full h-56 justify-center p-5">
            <article className="flex flex-col justify-self-end items-center p-5 gap-4 border-2 border-transparent rounded-2xl bg-blue-900">
              <BsPersonWorkspace />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article>
              <AiOutlineFundProjectionScreen />
              <h5>Projects</h5>
              <small>2 Official Projects</small>
              <br></br>
              <small>2 Unofficial Project</small>
            </article>
          </div>

          <p>
            With a desire to learn and a wandering mind, I have what it takes to
            get the job done! I have about 4-5 years of experience currently as
            a professional Software Engineer/Consultant. By my standards I have
            worked on 2 official projects provided by the company's I have
            worked for and have 2 unoffical projects I work on in my spare time.
            One from Infosys, working with Backend technologies, such as
            Hadoop/Hive and Python. And another from Sogeti/Capgemini working
            with Frontend technologies, such as React and Typescript. Outside of
            work I like to build bots, lately discord bots, based on posts from
            Reddit or from friends. I am also into photography/videography, but
            that hasn't gotten as much traction.
          </p>

          <a href="#contact">Contact Me!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
