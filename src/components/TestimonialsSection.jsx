export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mary Johnson",
      role: "CEO of TechCraft Solutions",
      text: "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
      title: "Exceptional Solutions, Exceeded Expectations!",
      color: "bg-indigo-500",
    },
    {
      name: "Mark Williams",
      role: "COO of InnovateNow Inc",
      text: "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      title: "Transformed Our Business with Innovative Tech!",
      color: "bg-pink-500",
    },
    {
      name: "Emily Clark",
      role: "CMO of Visionary Apps",
      text: "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
      title: "Sculpted User Experiences Beyond Imagination!",
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="w-full  px-20 py-16">
      <div className="flex justify-between overflow-x-auto gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <p key={i} className="text-[24px]">
                    ⭐️
                  </p>
                ))}
              </div>
              <h3 className="text-[24px] font-semibold mb-3 text-gray-800">
                "{testimonial.title}"
              </h3>
              <p className="text-[#6E6C83] text-[17px] mb-6 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-auto border-t border-gray-400">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 4v16m-8-8h16" />
                  </svg>
                </div>
                <div className="ml-3 pt-5">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
