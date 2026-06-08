import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Overview() {
    return (
        <section id="overview" className="bg-gray-700 flex w-full min-h-screen text-white md:flex-row flex-col">
            <div className="flex md:flex-[2] justify-center items-center p-10">
                <div className='flex flex-col'>
                    <h1 className="text-6xl mb-6">Hi, my name is Yu Wu</h1>
                    <h2 className="text-xl mb-6">Computer Science Student @ SFU</h2>
                    <p className="mb-6"> Specializing in Software Systems. 
                    I engineer full-stack platforms, design predictive models, 
                    and optimize backend systems to make complex data highly accessible.
                    </p>
                    <a className="border p-2 bg-black" href="#projects">
                        Explore My Projects
                    </a>
                </div>
            </div>

            <div className="flex md:flex-1 items-center justify-center p-5">
                <div className='flex gap-12'>
                    <a 
                        href="https://github.com/21Yu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-100"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={40} />
                    </a>

                    <a 
                        href="https://linkedin.com/in/yuw2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-100"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={40} />
                    </a>
                </div>
            </div>
        </section>
    )
}