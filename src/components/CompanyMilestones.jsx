import React from "react";
import { blueGradientVector, FrontendDev, projectManager, qaTester, yellowGreenVector } from "../assets";
import { BackendDev } from "../assets";
import { UxDesigner } from "../assets";

const milestones = [
	{
		id: 1,
		text: "We've completed more than 1,200 projects for over 500 distinct enterprises.",
		icon: "🏅",
	},
	{
		id: 2,
		text: "Every year, our software developers, QA engineers, designers, and project managers work on hundreds of exciting projects.",
		icon: "🚀",
	},
];

const team = [
	{ id: 1, name: "Software Developers", image: FrontendDev },
	{ id: 2, name: "QA Engineers", image: BackendDev },
	{ id: 3, name: "UX Designers", image: UxDesigner },
	{ id: 4, name: "Data Scientists", image: qaTester },
	{ id: 5, name: "Project Managers", image: projectManager },
];

const CompanyMilestones = () => {
	return (
		<div className='flex flex-col gap-4 pb-16 px-12 text-center mb-10 md:items-center overflow-hidden w-full'>
			<div className='grid grid-cols-2 md:flex justify-center md:relative items-center'>
				<img src={yellowGreenVector} alt="" className=" hidden md:block absolute  bottom-0 top-0  my-auto -left-20 w-[130px] h-[116px]" />
				<img src={blueGradientVector} alt="" className="hidden md:block absolute  bottom-0 top-0 my-auto -right-20 w-[130px] h-[116px]" />
				{team.map((member) => (
					<div key={member.id} className='text-center mt-5 -mx-40 md:-mx-8 flex flex-col z-10 '>
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
		</div>
	);
};

export default CompanyMilestones;