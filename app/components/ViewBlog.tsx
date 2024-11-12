import React from "react";
import { CalendarDays, Code2, Cpu, Globe } from "lucide-react";

export default function ViewBlog() {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      category: "Generative AI",
      date: "2023-05-15",
      description:
        "Developed a GPT-based code assistant that helps developers write cleaner and more efficient code across multiple programming languages.",
      icon: Cpu,
    },
    {
      title: "Real-time Chat Application",
      category: "Full Stack Node.js",
      date: "2023-03-01",
      description:
        "Built a scalable real-time chat application using Node.js, Express, Socket.io, and React, supporting thousands of concurrent users.",
      icon: Globe,
    },
    {
      title: "Data Analysis Pipeline",
      category: "Python",
      date: "2023-01-10",
      description:
        "Created a robust data analysis pipeline using Python, Pandas, and Matplotlib to process and visualize large datasets for a financial institution.",
      icon: Code2,
    },
    {
      title: "E-commerce Platform",
      category: "Node.js/JavaScript",
      date: "2022-11-20",
      description:
        "Developed a full-featured e-commerce platform using Node.js, Express, and MongoDB, with a React frontend and Stripe integration for payments.",
      icon: Globe,
    },
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-300 mb-8">
          Project Development History
        </h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-stone-100 shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <project.icon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
