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
    SiMongodb,
    SiReact,
    SiFastapi,
    SiExpress,
    SiNodedotjs,
    SiSpringboot,
    SiPandas,
    SiScikitlearn,
    SiDocker,
    SiGithubactions,
    SiLinux,
    SiNginx,
    SiGit,
    SiGooglecloud,
    SiVite
} from 'react-icons/si';
import { TbMath } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

export default function Skills() {
    return (
        <section id="skills" className="flex w-full min-h-screen text-white bg-black md:flex-row flex-col">
            <div className="flex flex-col md:flex-1 justify-center items-center p-10">
                <h1 className="text-6xl font-bold">Skills</h1>
            </div>
            <div className="flex md:flex-[2] items-center justify-center p-5">
                <div className='flex flex-col gap-6'>
                    {/* Languages */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-blue-500 flex items-center gap-2 cursor-default"><SiTypescript size={40} /> TypeScript</span>
                            <span className="text-yellow-400 flex items-center gap-2 cursor-default"><SiJavascript size={40} /> JavaScript</span>
                            <span className="text-yellow-500 flex items-center gap-2 cursor-default"><SiPython size={40} /> Python</span>
                            <span className="text-blue-700 flex items-center gap-2 cursor-default"><SiCplusplus size={40} /> C++</span>
                            <span className="text-blue-600 flex items-center gap-2 cursor-default"><SiC size={40} /> C</span>
                            <span className="text-[#007396] flex items-center gap-2 cursor-default"><SiOpenjdk size={40} /> Java</span>
                            <span className="text-orange-500 flex items-center gap-2 cursor-default"><SiHtml5 size={40} /> HTML</span>
                            <span className="text-blue-500 flex items-center gap-2 cursor-default"><SiCss size={40} /> CSS</span>
                            <span className="text-orange-600 flex items-center gap-2 cursor-default"><TbMath size={40} /> MATLAB</span>
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-cyan-400 flex items-center gap-2 cursor-default"><SiReact size={40} /> React</span>
                            <span className="text-emerald-500 flex items-center gap-2 cursor-default"><SiFastapi size={40} /> FastAPI</span>
                            <span className="text-white flex items-center gap-2 cursor-default"><SiExpress size={40} /> Express.js</span>
                            <span className="text-green-500 flex items-center gap-2 cursor-default"><SiNodedotjs size={40} /> Node.js</span>
                            <span className="text-green-600 flex items-center gap-2 cursor-default"><SiSpringboot size={40} /> Spring Boot</span>
                            <span className="text-indigo-800 flex items-center gap-2 cursor-default"><SiPandas size={40} /> pandas</span>
                            <span className="text-blue-400 flex items-center gap-2 cursor-default"><TbMath size={40} /> XGBoost</span>
                            <span className="text-orange-400 flex items-center gap-2 cursor-default"><SiScikitlearn size={40} /> scikit-learn</span>
                        </div>
                    </div>

                    {/* Databases */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Databases</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-[#4169E1] flex items-center gap-2 cursor-default"><SiPostgresql size={40} /> PostgreSQL</span>
                            <span className="text-green-500 flex items-center gap-2 cursor-default"><SiMongodb size={40} /> MongoDB</span>
                        </div>
                    </div>

                    {/* Tools & DevOps */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Tools & DevOps</h2>
                        <div className="flex flex-wrap gap-6">
                            <span className="text-blue-500 flex items-center gap-2 cursor-default"><SiDocker size={40} /> Docker</span>
                            <span className="text-blue-400 flex items-center gap-2 cursor-default"><VscAzure size={40} /> Azure</span>
                            <span className="text-blue-600 flex items-center gap-2 cursor-default"><SiGithubactions size={40} /> GitHub Actions</span>
                            <span className="text-yellow-400 flex items-center gap-2 cursor-default"><SiLinux size={40} /> Linux</span>
                            <span className="text-emerald-600 flex items-center gap-2 cursor-default"><SiNginx size={40} /> Nginx</span>
                            <span className="text-orange-600 flex items-center gap-2 cursor-default"><SiGit size={40} /> Git</span>
                            <span className="text-blue-400 flex items-center gap-2 cursor-default"><SiGooglecloud size={40} /> GCP</span>
                            <span className="text-purple-500 flex items-center gap-2 cursor-default"><SiVite size={40} /> Vite</span>
                        </div>
                    </div>
               </div>     
            </div>
        </section>
    );
}