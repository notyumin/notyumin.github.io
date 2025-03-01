import { firaCode } from "./ui/fonts";

const termLine = firaCode.className + " text-xl mb-1 md:text-2xl md:mb-3"
const menuBtn = " rounded-full h-[15] w-[15] my-auto ml-2"
const link = "underline hover:font-bold"

export default function Home() {
  return (
    <div className="w-full justify-center flex selection:bg-[#3d59a1]" >
      <div className="max-w-3xl w-full">
        <div className={firaCode.className + " md:text-5xl text-4xl mb-8 mt-3 ml-3"}>
          {"> Hi! I'm"} <span className="text-highlight">Yu Min</span>!
          {/* <span className="bg-[#f4dbd6] animate-blink">&nbsp;</span> */}
        </div>
        <div className="rounded-lg bg-light shadow-xl">
          <div className=" h-[28] bg-zinc-800 rounded-t-lg flex">
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
            <div className={termLine}>
              python typescript Node.js Express.js golang sql
            </div>
            <br />
            <div className={termLine}>
              {">"} ls -l my-projects
            </div>
            <div className={termLine + " whitespace-pre-wrap"}>
              {/*whitespace-pre-wrap for it not to condense my spaces*/}
              <span className="text-myBlue">
                Name             Stack
              </span><br />
              <a
                href="https://github.com/church-sg/cis-youth-hymnal-v2"
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                CIS-Youth-Hymnal
              </a> Hugo, HTML, CSS, JS<br />
              <a
                href="https://github.com/notyumin/scripts-for-fun"
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                Scripts-For-Fun
              </a>  Python, Go<br />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                My-Portfolio
              </a>     Next.js, Typescript, Tailwind
            </div>
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
