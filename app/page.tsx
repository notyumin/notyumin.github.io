import { firaCode } from "./ui/fonts";

const skills = [
  " python",
  " typescript",
  " Node.js",
  " Express.js",
  " golang",
  " sql",
]

function SkillsList(skills: string[], cols: number) {
  // separate into rows 
  let rowList: string[][] = [[]]
  skills.forEach((skill) => {
    for (let i = 0; i < rowList.length; i++) {
      if (rowList[i].length < cols) {
        rowList[i].push(skill)
        return
      }
    }
    rowList.push([skill])
  })

  // find max length in col
  const maxLengths: number[] = []
  for (let i = 0; i < rowList.length; i++) {
    const col = rowList.map((row) => {
      return row[i]
    })
    console.log(col)
    maxLengths.push(col.reduce((maxLength, skill) => {
      skill = skill || ""
      return Math.max(maxLength, skill.length)
    }, 0))
  }

  // pad strings to same length as longest in col 
  for (let i = 0; i < maxLengths.length; i++) {
    rowList = rowList.map((row) => {
      row[i] = row[i] || ""
      console.log(row[i] + row[i].length)
      row[i] = row[i].padEnd(maxLengths[i] + 1)
      console.log(row[i] + row[i].length, maxLengths[i])
      return row
    })
  }

  // generate markup
  return (
    <div>
      {rowList.map((row) => {
        return <div key={row[0][0]}>{row.map((col) => {
          return col
        })}<br /></div>
      })}
    </div>
  )
}

const termLine = firaCode.className + " text-lg sm:text-xl sm:mb-1 md:mb-3"
const menuBtn = "rounded-full h-[15px] w-[15px] my-auto ml-2"
const link = "underline hover:font-bold"
const shortLineBreak = <div className="leading-[0.5]"><br className="inline sm:hidden" /></div>

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
            {/* <div className={termLine + " whitespace-pre-wrap"}> */}
            {/*    python   󰛦 typescript  <span className="inline sm:hidden" ><br /></span> */}
            {/*    Node.js  <br className="hidden sm:inline" /> */}
            {/*    Express.js<span className="inline sm:hidden" ><br /></span> golang   {} */}
            {/*    sql <br className="hidden sm:inline" /><span className="inline sm:hidden" ><br /></span> */}
            {/*    bash */}
            {/* </div> */}
            <div className={termLine + " whitespace-pre-wrap sm:hidden block"}>
              {SkillsList(skills, 2)}
            </div>
            <div className={termLine + " whitespace-pre-wrap sm:block hidden"}>
              {SkillsList(skills, 3)}
            </div>
            <br />
            <div className={termLine}>
              {">"} ls -l my-projects
            </div>
            <div className={termLine + " whitespace-pre-wrap"}>
              {/*whitespace-pre-wrap for it not to condense my spaces*/}
              <span className="text-myBlue hidden sm:inline">
                Name             Stack<br />
              </span>
              <a
                href="https://github.com/church-sg/cis-youth-hymnal-v2"
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                CIS-Youth-Hymnal
              </a> <br className="inline sm:hidden" />Hugo, HTML, CSS, JS<br />
              {shortLineBreak}
              <a
                href="https://github.com/notyumin/scripts-for-fun"
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                Scripts-For-Fun
              </a>  <br className="inline sm:hidden" />Python, Go<br />
              {shortLineBreak}
              <a
                href="https://github.com/notyumin/notyumin.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className={link + " text-highlight"}>
                Portfolio
              </a>        <br className="inline sm:hidden" />Next.js, Typescript, Tailwind
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
