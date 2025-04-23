import React from "react";
import { google, lg, microsoft, slack, } from "../assets";

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering Your Digital Vision: Our Comprehensive Tech Services. 
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start border border-gray-200 hover:shadow-xl transition"
            >
              {/* <div className="text-2xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3> */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Trusted by Leading Organizations
        </h3>
        <p className="text-gray-600 mb-6">
          Our 4,000+ team has expertise in almost every programming language.
        </p>
        <div className="flex items-center justify-between ">
          {trustedCompanies.map((company, index) => (
            <img key={index} src={company.logo} alt={company.name} className="w-[200px] h-[100px]" />
          ))}
        </div>
      </div>
    </section>
  );
};
const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "Create custom software tailored for your unique needs, including front-end and core back-end technology.",
  },
  {
    icon: "🔍",
    title: "QA and Testing",
    description:
      "Create custom software tailored for your unique needs, including front-end and core back-end technology.",
  },
  {
    icon: "🤖",
    title: "AI and Data Science",
    description:
      "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
  {
    icon: "🎨",
    title: "UX/UI Design",
    description:
      "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
  },
  {
    icon: "🛠️",
    title: "Platform and Infrastructure",
    description:
      "Ensure applications are secure, fault-tolerant, and highly available with our DevOps and Security engineers.",
  },
];

const trustedCompanies = [
  { name: "Microsoft", logo: microsoft },
  { name: "Google", logo: google },
  { name: "Slack", logo: slack },
  { name: "LG", logo: lg },
  // {name: "Sony", logo: sony }
];

export default ServicesSection;