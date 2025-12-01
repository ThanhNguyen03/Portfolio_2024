import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <section id='projects' className='flex flex-col items-center justify-center pb-20 custom-max1100:mx-auto px-5'>
        <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full custom-min1100:flex gap-10 custom-min1100:px-10 z-30'>
            <ProjectCard src='/fbcover.png' title='A Catering E-commerce Website' 
              github='https://github.com/ThanhNguyen03/NgOo_Coffee' 
              website='https://ngoo-coffee.vercel.app/'
                description='A Food Ordering Website that allows users to log in by Email and Gmail, can
                order food and pay with many different methods such as: COD, Momo,
                VNPay. Users can fully view and manage their personal information,
                purchases and re-order them.'/>
            <ProjectCard src='/weatherapp.png' title='A Weather Website' 
              github='https://github.com/ThanhNguyen03/Angular_WeatherApp' 
              website='https://thanhng-weather-app.vercel.app/'
                description='This website will display weather information such as temperature,
                precipitation, wind,... by searching by the name of the city you want to know.'/>
        </div>
    </section>
  )
}

export default Project