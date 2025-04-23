import React from 'react'
import { blueGradientVector, brushIcon, dataIcon, docCodeIcon, purpleMobileIcon, serviceHeroBg, settingIcon, shapesIcon, yellowGreenVector } from '../assets/index'
import { Button, StackSelector } from '../components'
import Header from '../components/miniComponent/Header'
import InfoCard from '../components/infoCard'
import ProjectList from '../components/Project'

export const services = [
    {
        icon: docCodeIcon,
        title: "Custom SoftwareDevelopment",
        description: "Create custom software tailored for your unique needs, including front-end, and core back-end technology."
    },
    {
        icon: settingIcon,
        title: "QA and Testing",
        description: "Create custom software tailored for your unique needs, including front-end, and core back-end technology."

    },
    {
        icon: dataIcon,
        title: "AI and Data Science",
        description: "Use leading AI, machine learning, and data engineering technologies to unlock business value."
    },
    {
        icon: brushIcon,
        title: "UX/UI Design",
        description: "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users."

    }, {
        icon: purpleMobileIcon,
        title: "Mobile App Development",
        description: "Build performant, scalable, and secure mobile applications for iOS and Android devices."

    }
    , {
        icon: shapesIcon,
        title: "Platform and Infrastructure",
        description: "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers."

    }
]

const Service = () => {


    return (
        <div>
            <div className='px-5 mt-5 flex relative w-full  h-[450px] md:h-auto'>
                <div className='z-10 absolute top-10 left-10 md:top-50 md:left-28 flex flex-col gap-8'>
                    <div className="flex flex-col gap-y-8 text-white w-[300px] md:w-full">
                        <h3 className="font-roboto-flex font-semibold text-xl tracking-[10%] leading-[20px] md:leading-[100%]">
                            TEDLABS
                        </h3>
                        <h1 className="max-w-[490px] w-full font-medium  text-[32px] md:text-[64px] leading-[80px] tracking-[0%]">
                            Our Services
                            & Projects
                        </h1>
                        <h3 className="font-medium text-[16px] md:text-xl leading-[100%]">
                            Unlocking Possibilities, One Code at a Time
                        </h3>
                    </div>

                    <div>
                        <Button text={"See Projects"} />
                    </div>
                </div>
                <img src={serviceHeroBg} alt="service hero bg" className=' md:w-full h-auto' />
            </div>
            {/* what we offer */}
            <div className='flex flex-col items-center py-10'>
                <Header text={"What We offer"} />
                <div className='relative px-5 md:px-20 w-full mt-10 box-border overflow-hidden'>
                    <img src={blueGradientVector} alt="" className='hidden md:block absolute top-20 left-72' />
                    <img src={yellowGreenVector} alt="" className='hidden md:block absolute bottom-20 right-80 ' />
                    <div className="overflow-x-auto scrollbar-hide w-full box-border ">

                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 m-1 place-items-center relative min-w-max w-fit md:min-w-full">
                            {services.map((service) => (
                                <InfoCard info={service} key={service.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Frame */}
            <div className='hidden md:block'>
                <Header text={"Our Development Stack"} />
                <StackSelector />
            </div>

            {/* Projects */}
            <div className='px-10 w-full overflow-hidden'>
                <Header text={"Our Projects"} />
                <ProjectList />
            </div>
        </div>
    )
}

export default Service