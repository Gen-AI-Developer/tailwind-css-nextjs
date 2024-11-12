import React from "react";
import { ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-stone-100 p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        {[
          "Full Stack Gen-AI Developer",
          "Head Constable/Special Branch",
          "Support IT Engineer",
          "Computer Science Teacher",
          "Student",
        ].map((title, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center group">
              <h3 className="font-serif text-xl">{title}</h3>
              <div className="relative">
                <div className="absolute inset-0 bg-stone-300 rotate-45 scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 -z-10" />
                <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-stone-800 transition-colors duration-300 ease-in-out relative z-10" />
              </div>
            </div>
            {index < 4 && <div className="border-t border-stone-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
