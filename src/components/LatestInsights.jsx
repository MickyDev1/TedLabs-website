import React from "react";

const insights = [
  {
    id: 1,
    title: "The Power of UI/UX: Creating Engaging Digital Experiences",
    description:
      "Explore the importance of user interface (UI) and user experience (UX) design in today's digital landscape.",
    author: "Emily Carter",
  },
  {
    id: 2,
    title: "Agile Development: The Key to Flexibility",
    description:
      "Dive into the principles of agile development and how it enhances project management, collaboration.",
    author: "Alex Turner",
  },
  {
    id: 3,
    title: "Mobile App Development: Watch in 2023",
    description:
      "Provide an overview of the latest trends in mobile app development, covering topics like cross-platform tools.",
    author: "Sarah Mitchell",
  },
];

const LatestInsights = () => {
  return (
    <div className="py-20 px-10 bg-white">
      <div className="flex">
        <img src={yellowGreenVector} alt="vector" className="w-12 h-10" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Latest Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((post) => (
          <div key={post.id} className="bg-gray-100 p-6 rounded-xl shadow-md">
            <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 mt-4">Author: {post.author}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Mockup) */}
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 bg-gray-300 rounded-full mx-2">&lt;</button>
        <button className="px-4 py-2 bg-gray-300 rounded-full mx-2">&gt;</button>
      </div>
    </div>
  );
};

export default LatestInsights;
