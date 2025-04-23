import React from "react";
import { BackendDev, blueGradientVector, FrontendDev, projectManager, qaTester, UxDesigner, yellowGreenVector } from "../assets";


const team = [
	{ id: 1, name: "Software Developers", image: qaTester },
	{ id: 2, name: "QA Engineers", image: FrontendDev },
	{ id: 3, name: "UX Designers", image: BackendDev},
	{ id: 4, name: "Data Scientists", image: UxDesigner },
	{ id: 5, name: "Project Managers", image: projectManager },
];

const FormYourCrew = () => {
  return (
		<div className='flex flex-col gap-4 py-16 px-10 text-center my-10 md:items-center'>
			<div className='grid grid-cols-2 md:flex justify-center md:relative items-center'>
				<img src={yellowGreenVector} alt="" className=" hidden md:block absolute -z-10 bottom-0 top-0  my-auto -left-20 w-[130px] h-[116px]" />
				<img src={blueGradientVector} alt="" className="hidden md:block absolute -z-10 bottom-0 top-0 my-auto -right-20 w-[130px] h-[116px]" />
				{team.map((member) => (
					<div key={member.id} className='text-center mt-5 -mx-40 md:-mx-8 flex flex-col '>
						<div className="w-full flex justify-center">
							<img
								src={member.image}
								alt={member.name}
								className='rounded-full'
							/>
						</div>
						<div>
							<p className='mt-2 text-gray-800 w-[100px] text-center font-semibold flex mx-auto'>{member.name}</p>
						</div>
					</div>
				))}
			</div>

			<h2 className='text-3xl font-bold text-gray-800 mt-6 '>
				Let's Form Your Crew.
			</h2>

			<button className='mt-4 px-10 py-3 bg-[#7434F4] w-fit text-white font-bold rounded-full mx-auto'>
				Schedule a call
			</button>
		</div>
	);
};

export default FormYourCrew;