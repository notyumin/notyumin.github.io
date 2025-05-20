import { firaCode } from "./ui/fonts";
import React from "react";

const skills = [
  " python",
  " typescript",
  " Node.js",
  " Express.js",
  " golang",
  " sql",
  " bash",
]

type project = {
  name: string,
  link: string,
  stack: string
}

const projects: project[] = [
  {
    name: "CIS-Youth-Hymnal",
    link: "https://github.com/church-sg/cis-youth-hymnal-v2",
    stack: "Hugo, HTML, CSS, JS"
  },
  {
    name: "Scripts-For-Fun",
    link: "https://github.com/notyumin/scripts-for-fun",
    stack: "Python, Go"
  },
  {
    name: "Portfolio",
    link: "https://github.com/notyumin/notyumin.github.io",
    stack: "Next.js, Typescript, Tailwind"
  },
]

const termLine = firaCode.className + " text-lg sm:text-xl sm:mb-1 md:mb-3"
const menuBtn = "rounded-full h-[15px] w-[15px] my-auto ml-2"
const link = "underline hover:font-bold"

export default function Home() {
  return (
    <div className="w-full justify-center flex selection:bg-[#3d59a1]" >
      <div className="max-w-3xl w-full">
        <div className={firaCode.className + " md:text-5xl sm:text-4xl text-3xl sm:mb-8 sm:mt-3 mb-5 ml-3"}>
          {"> Hi! I'm"} <span className="text-highlight">Yu Min</span>!
          {/* <span className="bg-[#f4dbd6] animate-blink">&nbsp;</span> */}
        </div>
        <div className="rounded-lg bg-light shadow-xl">
          <div className="h-[28px] bg-zinc-800 rounded-t-lg flex">
            <div className={menuBtn + " bg-[#f96256]"} />
            <div className={menuBtn + " bg-[#fdbc3d]"} />
            <div className={menuBtn + " bg-[#33c948]"} />
          </div>
          <div className="p-5">
            <div className={termLine}>
              {">"} cat about-me.txt
            </div>
            <div className={termLine}>
              {"I'm"} currently more of a web developer, but {"I'm"} excited to explore new areas!<br />
            </div>
            <br />
            <div className={termLine}>
              {">"} ls my-skills
            </div>
            <div className={termLine + " grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1 gap-x-6"} >
              {
                skills.map((skill, i) => (
                  <div key={i} className="whitespace-nowrap">{skill}</div>
                ))
              }
            </div>
            <br />
            <div className={termLine}>
              {">"} ls -l my-projects
            </div>
            <div className={termLine + " inline-grid grid-cols-[auto_auto] gap-x-4 gap-y-2"}>
              {/* Header */}
              <span className="text-myBlue">Name</span>
              <span className="text-myBlue">Stack</span>

              {projects.map((project, index) => (
                <React.Fragment key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link + " text-highlight"}
                  >
                    {project.name}
                  </a>
                  <span>{project.stack}</span>
                </React.Fragment>
              ))}
            </div>
            <br />
            <br />
            <div className={termLine}>
              {">"} ls my-contacts
            </div>
            <div className={termLine}>
              <a
                href="https://github.com/notyumin"
                target="_blank"
                rel="noopener noreferrer"
                className={link}>
                Github
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/yu-min-tan/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}>
                LinkedIn
              </a>
            </div>
            <br />
            <div className={termLine}>
              {">"} <span className="bg-[#f4dbd6] animate-blink">&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
