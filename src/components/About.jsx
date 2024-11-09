import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Battu Chaitanya, a 2026 graduate 🎓 with a passion for crafting robust backend systems and captivating web applications.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/chaitanya-battu/' target='_blank'>Software developer</a> I specialize in both MEAN and MERN stacks🚀.
              <br />
              ✍️ Beyond coding, I enjoy sharing my insights and experiences,diving into software development and tech trends. Check out my projects on GitHub: <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://www.linkedin.com/in/chaitanya-battu/" target='_blank'>GitHub</a>, Hodlinfo, a cryptocurrency tracking platform, and Dynamic Blog and Course Platform, 
              which integrates blog management, course purchase flow, and payment gateway with MySQL database which integrates blog management, course purchase flow, and payment gateway with MySQL database. On a different note,
               I'm also into UI/UX design, seeing it as a way to create meaningful and intuitive digital experiences.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1o0_Gh4hbwsA1lZb_wWDJdeKoOZKjFHeA/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;