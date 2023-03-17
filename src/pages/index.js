import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsMailbox,
} from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import Image from "next/image";
import Avatar from "../assets/nobg-avatar.png";
import { projects } from "@/data/skills-and-projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Can Yapalak Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-around">
            <h1 className="text-2xl font-cocogoose">portfolio</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-cocogooseprolight text-sm"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-5 px-10 font-cocogooseprolight">
            <div
              className="relative mx-auto bg-gradient-to-b
          from-slate-500 rounded-full w-60 h-60 overflow-hidden
          shadow-xl mb-5"
            >
              <Image
                src={Avatar}
                layout="fill"
                objectFit="cover"
                alt="avatar"
              />
            </div>
            <h2 className="text-3xl py-2 text-cyan-600 font-medium">
              Can Yapalak
            </h2>
            <h3 className="text-xl py-2">Junior Web Developer</h3>
            <p className="text-sm py-2">
              I'm Can, a fresh Junior Web Developer residing in Berlin, Germany.
              <br></br>
              I'm currently learning how to be a Full-Stack Web Dev and spending
              all my time and energy in this new field of expertise.
              <br></br>My purpose is to work as a full-time web developer and
              keep on progressing with experience.
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-7 text-cyan-600 mb-10">
            <a target="_blank" href="https://github.com/canyapalak">
              <BsGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/can-yapalak-a1359b76/"
            >
              <BsLinkedin className="cursor-pointer" />
            </a>
            <a target="_blank" href="mailto:canyapalak@gmail.com">
              <BsMailbox className="cursor-pointer" />
            </a>
          </div>
        </section>
        <section className="mt-5 min-h-screen">
          <div className="font-cocogooseprolight max-w-40 pt-40">
            <h3 className="text-xl text-center pb-2 mb-4">My Skills</h3>
            <p className="text-sm px-5 pb-10 text-center max-w-screen-lg mx-auto ">
              This is my toolbox for now. I tend to learn a new tool in every
              new project and gain more experience on what I have learned
              before. In this way, I aim to expand my toolbox continously. I
              wish to get familiar with most of the libraries, frameworks, tools
              and environments that are widely used in the industry.
            </p>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-center
          gap-5 p-10 rounded-lg bg-gradient-to-b
          from-teal-300 shadow-md mb-10 max-w-screen-sm mx-auto "
          >
            <a
              target="_blank"
              href="https://www.w3schools.com/html/default.asp"
            >
              <SiHtml5 className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://www.w3schools.com/css/default.asp">
              <SiCss3 className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://www.javascript.com/">
              <SiJavascript className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <SiReact className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://getbootstrap.com/">
              <SiBootstrap className="text-6xl mx-auto" />
            </a>
            <a href="https://mui.com/">
              <SiMui className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://tailwindcss.com/">
              <SiTailwindcss className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://firebase.google.com/">
              <SiFirebase className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://nodejs.org/en/">
              <SiNodedotjs className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://www.mongodb.com/">
              <SiMongodb className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://expressjs.com/">
              <SiExpress className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://nextjs.org/">
              <SiNextdotjs className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://www.figma.com/">
              <SiFigma className="text-6xl mx-auto" />
            </a>
            <a target="_blank" href="https://www.postman.com/">
              <SiPostman className="text-6xl mx-auto" />
            </a>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="font-cocogooseprolight max-w-40 pt-40 text-center">
            <h3 className="text-xl pb-2 mb-5">Previous Projects</h3>
            <p className="text-sm px-5 pb-10 max-w-screen-lg mx-auto ">
              This is my toolbox for now. I tend to learn a new tool in every
              new project and gain more experience on what I have learned
              before. In this way, I aim to expand my toolbox continously. I
              wish to get familiar with most of the libraries, frameworks, tools
              and environments that are widely used in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 2xl:mx-40 md:mx-20 sm:mx-10">
            {projects.map((project) => {
              return (
                <article
                  key={project.id}
                  className="basis-1/4 flex-1 group overflow-hidden relative font-cocogooseprolight"
                >
                  <div className="z-50 absolute bg-black/80 h-full flex flex-col gap-5 justify-center items-center px-5 rounded-lg translate-y-full group-hover:translate-y-0 text-white duration-300">
                    <div>
                      <h2 className="text-xl font-bold text-white text-center text-md pb-3">
                        {project.title}
                      </h2>
                      <p className="text-gray-200 text-center text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex w-full justify-evenly">
                      <a
                        href={project.pathLive}
                        target="_blank"
                        className="rounded px-5 py-[0.3rem] flex justify-center items-center bg-teal-500 text-sm"
                      >
                        live
                      </a>
                      <a
                        href={project.pathRepo}
                        target="_blank"
                        className="rounded px-5 py-[0.3rem] flex justify-center items-center bg-cyan-500 text-sm"
                      >
                        code
                      </a>
                    </div>
                  </div>

                  <Image
                    className="z-0 rounded-lg object-cover shadow-md max-w-100 max-h-50 duration-1000"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    alt={project.title}
                    src={project.img}
                  />
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
