import { ngooProject, weatherProject } from '@/assets/images'
import ProjectCard from '../ui/ProjectCard'

const Project = () => {
  return (
    <section
      id='projects'
      className='relative overflow-hidden px-2 py-10 md:px-6 md:py-20 lg:px-10'
    >
      <div className='center mx-auto w-full max-w-[1200px] flex-col gap-10'>
        <h1 className='bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-4xl font-semibold text-transparent'>
          My Projects
        </h1>
        <div className='flex size-full flex-col items-start gap-6'>
          <ProjectCard
            src={ngooProject.src}
            title='NgOo Coffee Website'
            role='Fullstack'
            github='https://github.com/ThanhNguyen03/ngoo-cf-2025'
            website='https://ngoo-cf-2025.vercel.app/'
            description={
              <>
                A 3D-animated, real-time food ordering website with friendly UX.
                Implement multi-authentication, multi-payment integrations with
                high secure service.<br></br>
                Front End:
                <ul className='list-outside list-disc pl-3'>
                  <li>
                    Implement micro-interactions with Framer Motion and 3D
                    components via ThreeJS
                  </li>
                  <li>
                    Improve user-focused and integrating complex payment
                    features by custom reusable hooks & UI state management for
                    handling error and egde case
                  </li>
                  <li>
                    Optimize Performance and by caching strategies with
                    client/server fetching via Apollo Client.
                  </li>
                </ul>
                <br />
                Back End:
                <ul className='list-outside list-disc pl-3'>
                  <li>
                    Secure Authentication by built-in puredly JWT-based auth
                    handling (no external auth libraries), handling
                    refresh-token rotation, reuse detection, device-bound
                    session
                  </li>
                  <li>
                    Designed modular service layer and repository pattern for
                    easy maintain and scaling
                  </li>
                  <li>
                    Applied rate-limiting login/payment endpoints, caching for
                    heavy queries to reduce load on Database to optimize
                    resources.
                  </li>
                </ul>
              </>
            }
          />
          <ProjectCard
            src={weatherProject.src}
            title='Weather Website'
            role='Front-End'
            github='https://github.com/ThanhNguyen03/Angular_WeatherApp'
            website='https://thanhng-weather-app.vercel.app/'
            description='This website will display weather information such as temperature,
                precipitation, wind,... by searching by the name of the city you want to know.'
          />
        </div>
      </div>
    </section>
  )
}

export default Project
