import React from "react";

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Unlock Opportunities with Top Internships and Jobs
        </h1>
        <p className="text-lg mb-6">
          Learn, grow, and launch your career with industry-best programs and opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-200">
            Register as a Student
          </button>
          <button className="bg-white text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-200">
            Post an Internship
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
