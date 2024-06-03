import React, { useState } from 'react';
import '../tailwind.output.css'; // Import Tailwind CSS file

const faqs = [
  {
    question: "What is Career Pilot?",
    answer: "Career Pilot is a platform designed to help you track the jobs you've applied to. It allows you to manage your job applications, keep track of your progress, and stay organized throughout your job search journey.",
  },
  {
    question: "How do you use Career Pilot?",
    answer: "Using Career Pilot is a breeze! Begin by signing up, then effortlessly input your job details and status. Keep everything up-to-date with ease, ensuring your job search journey remains smooth and organized.",
  },
  {
    question: "Is Career Pilot free?",
    answer: "Absolutely! Career Pilot is completely free to use, empowering you to streamline your job search journey without any cost.",
  },
  {
    question: "Who can use Career Pilot?",
    answer: "Career Pilot is for everyone embarking on their job search journey, whether you're a recent graduate taking your first steps into the professional world or an experienced professional seeking new opportunities.",
  },
];

function FAQDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border border-gray-700 rounded">
          <div
            className="bg-gray-800 p-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-white text-lg font-semibold">{faq.question}</h2>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-gray-900 text-white">
              <p className="text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQDropdown;
