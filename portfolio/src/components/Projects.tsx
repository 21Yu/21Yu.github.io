import { FaGithub } from 'react-icons/fa';
export default function Projects() {
    return (
        <section id="projects" className="flex text-white w-full min-h-screen bg-black md:flex-row flex-col">
            <div className="flex flex-col md:flex-1 justify-center items-center p-10">
                <h1 className="text-6xl">Technical Projects</h1>
            </div>

            <div className="flex md:flex-[2] items-center justify-center p-5">
                <div className="grid gap-8 md:grid-cols-2">
                        
                    <div className="flex flex-col p-6 border">
                        <h3 className="text-xl text-white">FairRent</h3>
                        <p className="text-sm text-zinc-400">
                            Web app that uses machine learning to evaluate rental listings and identify fair prices, overpriced units, and good deals.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">React</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">FastAPI</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">XGBoost</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">Leaflet</span>
                        </div>
                        <a href="https://github.com/21Yu/FairRent" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <FaGithub size={16} /> Code
                        </a>
                    </div>

                    <div className="flex flex-col p-6 border">
                        <h3 className="text-xl text-white">Where To Live</h3>
                        <p className="text-sm text-zinc-400">
                            Web app that visualizes Canadian housing, employment, and cost-of-living trends to support relocation and home-buying decisions.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">React</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">FastAPI</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">Python</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">Recharts</span>
                        </div>
                        <a href="https://github.com/21Yu/where-to-live-canada" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <FaGithub size={16} /> Code
                        </a>
                    </div>

                    <div className="flex flex-col p-6 border">
                        <h3 className="text-xl text-white">EV3 Follower</h3>
                        <p className="text-sm text-zinc-400">
                            EV3 robot using Pybricks MicroPython with PID-based line following, obstacle detection, and color-based decision making.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">Python</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">PID Loops</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">Hardware</span>
                        </div>
                        <a href="https://github.com/21Yu/ev3-line-follower" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <FaGithub size={16} /> Code
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}