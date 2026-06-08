import { 
    SiC, 
    SiCplusplus, 
    SiPython, 
    SiJavascript, 
    SiHtml5, 
    SiCss, 
    SiTypescript,
    SiOpenjdk,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiFastapi,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiBootstrap,
    SiGit,
    SiLinux,
    SiNeovim,
    SiDocker,
    SiGithub
} from 'react-icons/si';

export default function About() {
    return (
        <section id="about" className="flex w-full min-h-screen text-white bg-black md:flex-row flex-col">
            <div className="flex flex-col md:flex-1 justify-center items-center p-10">
                <h1 className="text-6xl">Technical Skills</h1>
            </div>
            <div className="flex md:flex-[2] items-center justify-center p-5">
                <div className='flex flex-col'>
                    <div className='mb-4'>
                        <h2 className="mb-4">Languages</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-blue-600 flex items-center gap-2"><SiC size={40} /> C</span>
                            <span className="text-blue-700  flex items-center gap-2"><SiCplusplus size={40} /> C++</span>
                            <span className="text-yellow-500  flex items-center gap-2"><SiPython size={40} /> Python</span>
                            <span className="text-yellow-400 bg-black flex items-center gap-2"><SiJavascript size={40} /> JavaScript</span>
                            <span className="text-blue-500  flex items-center gap-2"><SiTypescript size={40} /> TypeScript</span>
                            <span className="text-orange-500  flex items-center gap-2"><SiHtml5 size={40} /> HTML5</span>
                            <span className="text-blue-500  flex items-center gap-2"><SiCss size={40} /> CSS3</span>
                            <span className="text-[#007396] flex items-center gap-2"><SiOpenjdk size={40} /> Java</span>
                            <span className="text-[#4169E1] flex items-center gap-2"><SiPostgresql size={40} /> PostgreSQL</span>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h2 className="mb-4">Libraries & Frameworks</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-cyan-400 flex items-center gap-2 cursor-default"><SiReact size={40} /> React</span>
                            <span className="text-sky-400 flex items-center gap-2 cursor-default"><SiTailwindcss size={40} /> Tailwind</span>
                            <span className="text-emerald-500 flex items-center gap-2 cursor-default"><SiFastapi size={40} /> FastAPI</span>
                            <span className="text-orange-400 flex items-center gap-2 cursor-default"><SiScikitlearn size={40} /> scikit-learn</span>
                            <span className="text-indigo-800 flex items-center gap-2 cursor-default"><SiPandas size={40} /> Pandas</span>
                            <span className="text-blue-400 flex items-center gap-2 cursor-default"><SiNumpy size={40} /> NumPy</span>
                            <span className="text-purple-600 flex items-center gap-2 cursor-default"><SiBootstrap size={40} /> Bootstrap</span>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h2 className="mb-4">Tools</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-orange-600 flex items-center gap-2 cursor-default"><SiGit size={40} /> Git</span>
                            <span className="text-white flex items-center gap-2 cursor-default"><SiLinux size={40} /> Linux</span>
                            <span className="text-green-600 flex items-center gap-2 cursor-default"><SiNeovim size={40} /> Neovim</span>
                            <span className="text-blue-500 flex items-center gap-2 cursor-default"><SiDocker size={40} /> Docker</span>
                            <span className="text-white flex items-center gap-2 cursor-default"><SiGithub size={40} /> GitHub</span>
                        </div>
                    </div>
               </div>     
            </div>
        </section>
    )
}