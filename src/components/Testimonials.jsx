import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Mary Johnson",
    position: "CEO of TechLab Solutions",
    feedback: "Exceptional Solutions, Exceeded Expectations!",
    review:
      "Working with Nershore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that was both well-structured and comprehensive.",
  },
  {
    id: 2,
    name: "Mark Williams",
    position: "CMO of InnovationHive Inc.",
    feedback: "Transformed Our Business with Innovative Tech!",
    review:
      "We saw a significant part of our custom software solution streamlined by their process. Their team’s attention to innovation and problem-solving is top-notch.",
  },
  {
    id: 3,
    name: "Emily Clark",
    position: "CMO of Visionary Apps",
    feedback: "Sculpted User Experiences Beyond Imagination!",
    review:
      "The UI/UX design crafted by Nershore turned our app into a masterpiece. Their attention to detail, functionality, and user experience has exceeded our expectations.",
  },
];

const features = [
  {
    id: 1,
    title: "Expertise Across the Tech Spectrum",
    description:
      "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
  },
  {
    id: 2,
    title: "Proven Track Record of Success",
    description:
      "Our portfolio is a testament to our ability to deliver impactful results.",
  },
  {
    id: 3,
    title: "Collaborative Approach, Transparent Communication",
    description:
      "We believe in working hand-in-hand with our clients.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 px-10 bg-gray-100">
      {/* Stats Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          We've stopped counting. <br /> 
          <span className="text-blue-500">Over 500 brands</span> count on us.
        </h2>
        <p className="text-gray-600 mt-2">
          Our 4,000+ team has expertise in almost every programming language.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.feedback}</h3>
            <p className="text-gray-600 mt-2">{item.review}</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          Choose Us: Your Path to Innovation and{" "}
          <span className="text-blue-500">Success</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
