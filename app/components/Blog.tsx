import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-stone-100 p-8 col-span-1 md:col-span-2 lg:col-span-1 rounded-lg shadow-md">
        <div className="flex flex-col h-full justify-between">
          <div className="mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-stone-600"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
              <path d="M12 4v16M4 12h16" strokeWidth="2" />
            </svg>
          </div>
          <h1 className="text-4xl font-serif leading-tight ">
            Let's create an amazing and
            <em className="font-italic px-2">magic</em>
            landing page for your special product(s).
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
