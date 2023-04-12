"use client"

import "./page.module.css";
import "./globals.css";

import { BsFillMoonFill, BsFillSunFill, BsMailbox } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiApollographql,
  SiPostman,
} from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Avatar from "../public/assets/nobg-avatar.png";
import { projects } from "../public/data/projects.js";
import { useState } from "react";

// export async function getStaticProps() {
//   console.log('projects :>> ', projects);
//   return {
//     props: {
//       projects,
//     },
//   }
// }

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={
          "min-h-screen bg-gray-100 px-10 dark:bg-gray-800 transition-colors duration-500"
        }
      >
        <nav className="py-10 mb-5 flex justify-around">
          <h1 className="text-2xl font-cocogoose dark:text-gray-200">
            portfolio
          </h1>
          <ul className="flex items-center gap-5">
            <li>
              {!darkMode ? (
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-200 "
                />
              )}
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/11vLpiqYsAJITZZziIypVEHuAy8VHRg3u/"
                target="_blank"
                className="bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-teal-500
                   hover:to-teal-600 text-white px-4 py-2 
                  rounded-md font-cocogooseprolight text-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center py-5 px-5 font-cocogooseprolight">
          <div
            className="relative mx-auto bg-gradient-to-b
          from-slate-500 rounded-full w-60 h-60 overflow-hidden
          shadow-xl mb-5"
          >
            <Image src={Avatar} layout="fill" objectFit="cover" alt="avatar" />
          </div>
          <h2 className="text-3xl py-2 text-cyan-600 font-medium">
            Can Yapalak
          </h2>
          <h3 className="text-xl py-2 dark:text-gray-200">
           Web Developer
          </h3>
          <p className="text-sm py-2 dark:text-gray-200 max-w-[1000px] text-center mx-auto">
            I'm Can, a Junior Web Developer residing in Berlin, Germany.
            I am eager to continuously acquire new skills and I am open to learning.
            I love developing functional, responsive and eye-pleasing websites and applications.
            My aim is to be a full time web developer and keep on progressing with
            experience.
          </p>
        </div>
        <div className="text-4xl flex justify-center gap-7 text-cyan-600 pb-10">
          <a
            target="_blank"
            href="https://github.com/canyapalak"
            className=" hover:text-cyan-800"
          >
            <AiFillGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/can-yapalak-a1359b76/"
            className=" hover:text-cyan-800"
          >
            <AiFillLinkedin className="cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="mailto:canyapalak@gmail.com"
            className=" hover:text-cyan-800"
          >
            <BsMailbox className="cursor-pointer" />
          </a>
        </div>
      </div>
      <section className="bg-orange-100 min-h-screen px-10 dark:bg-slate-900">
        <div className="font-cocogooseprolight max-w-40 pt-10 dark:text-gray-200">
          <h3 className="text-xl text-center pb-2 mb-4">Skills</h3>
          <p className="text-sm px-5 pb-10 text-center max-w-screen-lg mx-auto ">
            This is my toolbox for now. I tend to learn a new tool in every new
            project and gain more experience on what I have learned before. In
            this way, I aim to expand my toolbox constantly. I wish to get
            familiar with most of the libraries, frameworks, tools and
            environments that are widely used in the industry.
          </p>
        </div>
        <div
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-center
          gap-5 p-7 rounded-lg bg-gradient-to-b
          from-stone-400 to-stone-50 shadow-md max-w-screen-sm mx-auto "
        >
          <a target="_blank" href="https://www.w3schools.com/html/default.asp">
            <SiHtml5 className="text-6xl mx-auto  hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.w3schools.com/css/default.asp">
            <SiCss3 className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.javascript.com/">
            <SiJavascript className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://reactjs.org/">
            <SiReact className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.typescriptlang.org/">
            <SiTypescript className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://getbootstrap.com/">
            <SiBootstrap className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a href="https://mui.com/">
            <SiMui className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://tailwindcss.com/">
            <SiTailwindcss className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://firebase.google.com/">
            <SiFirebase className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://nodejs.org/en/">
            <SiNodedotjs className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.mongodb.com/">
            <SiMongodb className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://expressjs.com/">
            <SiExpress className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://nextjs.org/">
            <SiNextdotjs className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://graphql.org/">
            <SiGraphql className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.apollographql.com/">
            <SiApollographql className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
          <a target="_blank" href="https://www.postman.com/">
            <SiPostman className="text-6xl mx-auto hover:text-cyan-800" />
          </a>
        </div>
      </section>
      <section className="min-h-screen px-10 bg-gray-100 dark:bg-gray-800">
        <div className="font-cocogooseprolight max-w-40 pt-10 text-center dark:text-gray-200">
          <h3 className="text-xl pb-2 mb-5">Projects</h3>
          <p className="text-sm px-5 pb-10 max-w-screen-lg mx-auto">
            These are the projects I have made so far. They are all
            single-person projects, which means that both coding and styling
            parts were made by me from the scratch. I always try to focus on
            clean coding, an appealing style and responsiveness at the same
            time. The projects vary from single page front-end applications to
            full-stack multi-functional ones.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-5 gap-10 pb-5 2xl:mx-40 
          md:mx-10 sm:mx-10 "
        >
          {projects?.map((project) => {
            return (
              <article
                key={project.id}
                className="basis-1/4 flex-1 group overflow-hidden relative font-cocogooseprolight"
              >
                <div
                  className="z-50 absolute bg-black/80 h-full flex flex-col gap-5 justify-center 
                  items-center px-5 rounded-lg translate-y-full group-hover:translate-y-0 text-white duration-300"
                >
                  <div>
                    <h2 className="text-xl font-bold text-cyan-400 text-center text-md pb-3">
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
                      className="rounded px-6 py-2 flex justify-center items-center 
                        bg-gradient-to-r from-emerald-500 to-green-300 text-sm hover:from-emerald-600 hover:to-green-400"
                    >
                      Live
                    </a>
                    <a
                      href={project.pathRepo}
                      target="_blank"
                      className="rounded px-6 py-2 flex justify-center items-center 
                        bg-gradient-to-r from-amber-500 to-orange-300 text-sm hover:from-amber-600 hover:to-orange-400"
                    >
                      Repo
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
    </div>
  );
}
