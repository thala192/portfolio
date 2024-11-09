
import React from "react";
import light from '../assets/light.png'
import Blog from '../assets/Blog.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Dynamic blog-and-Course-Platform' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Blog} alt="" />
            </a>}
            {title=='Hodfolio Website' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={light} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Hodfolio Website',
        description:'This project replicates the core features and design of the Hodlinfo app, providing real-time cryptocurrency ticker information from multiple platforms. Users can view live prices, market data, and trends for various cryptocurrencies in an intuitive interface, delivering accurate and up-to-date data similar to the original Hodlinfo.',
        image: {light},
        git:'https://github.com/thala192/hodlinfo-website..git',
        technologies:['MongoDb' ,'Express.js','Axios' , 'NodeJS']
    },
    {
        title:'Dynamic blog-and-Course-Platform',
        description:'Create a dynamic platform featuring a responsive interface, blog scheduling, course browsing and purchase flow, secure payment options, and seamless backend integration for real-time updates.',
        image: {Blog},
        git:"https://github.com/thala192/Dynamic-blog-and-Course-Platform.git",
        technologies:['HTML','CSS','JavaScript','NodeJS','MySql']
    }
]

export default Projects