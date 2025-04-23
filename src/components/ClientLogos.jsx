import React from "react";
import { google, microsoft, lg, slackLogo, sonyLogo } from "../assets";

const clients = [
	microsoft,
	google,
	slackLogo,
	sonyLogo,
	lg,

];

const ClientLogos = () => {
	return (
		<div className='relative'>
			<div className='absolute pt-16 ml-6 z-10 top-2 md:top-54 -left-[28px] md:left-[1px]'>
				<div className='w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]'></div>
			</div>
			<div className='absolute left-0.5 md:left-8 top-0 bottom-0 h-screen w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ' />
			<div className='py-16 px-6 items-center md:px-20 w-full flex flex-col md:flex-row gap-10 justify-between '>
				<div className='md:w-[30%] w-full flex-1'>
					<h2 className='text-[24px] font-semibold text-gray-800'>
						...in startups to Fortune 500 companies, such as Google, Pinterest,
						Rolls Royce, and many, many more.....
					</h2>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-10 flex-1 w-full'>
					{[...Array(8)].map((_, index) => {
						const client = clients[index % clients.length]; return (
							<div className="bg-white shadow-lg flex items-center justify-center rounded-full p-3 w-[152px] h-[152px]">
								<img key={index} src={client} alt='Client Logo' className='' />
							</div>
						)
					}
					)
					}
				</div>
			</div>
		</div>
	);
};

export default ClientLogos;