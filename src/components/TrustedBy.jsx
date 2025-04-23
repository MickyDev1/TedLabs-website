import React from 'react'
import BannerContentWrapper from './blog/BannerContentWrapper'
import { blueGradientVector, google, lg, microsoft, samsungLogo, slackLogo, sonyLogo, yellowGreenVector } from '../assets'
import Button from './button';

const TrustedBy = () => {
    const clients = [
        samsungLogo,
        microsoft,
        google,
        slackLogo,
        sonyLogo,
        lg,

    ];
    return (
        <div className='w-full px-5 md:px-10 my-10'>
            <BannerContentWrapper className={" relative overflow-hidden box-border"}>
                <div className="flex flex-col items-center gap-2 md:gap-5 pb-10">
                    <img src={blueGradientVector} alt="vector" className='absolute right-2 -bottom-24 w-[190px] h-[160px]' />
                    <div className="flex flex-col gap-2 items-center w-full">
                        <div className="flex gap-2 md:gap-3 md:items-center ">
                            <img src={yellowGreenVector} alt="vector" className="w-14 h-14 absolute -left-2 md:left-20 top-10 bottom-0" />
                            <h2 className="text-[24px] md:text-3xl font-bold text-[#3D3D3D] mb-3 md:mb-6 text-center">
                                Trusted by Leading Organizations
                            </h2>
                        </div>
                        <p className='text-[20px] text-[#525252] text-center'>Our 4,000+ team has expertise in almost <br /> everyprogramming language.</p>
                    </div>
                    <div className="marquee-container mt-10">
                        <div className="marquee-track">
                            <div className="marquee-content">
                                {clients.map((company, index) => (
                                    <img
                                        key={index}
                                        src={company}
                                        alt="logo"
                                        className="marquee-item w-[130px] h-[56px] md:w-auto md:mx-10"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>


                    <Button text={"See our full repository"} className={"py-1 px-8 md:px-24 w-fit my-5 !bg-[#3171DE]"} />
                </div>


            </BannerContentWrapper>
        </div>
    )
}

export default TrustedBy