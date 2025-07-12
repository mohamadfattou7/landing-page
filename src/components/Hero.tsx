import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hire Smarter with <span className="text-indigo-600">AI-Powered</span> Interviews
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AutoInterviewer.ai streamlines your hiring process with intelligent candidate screening that saves time and improves quality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
              Try It Free
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition">
              See Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50097c3c-8ceb-4e89-988d-a13f19b11857.png"
            alt="Dashboard interface showing candidate analysis with colorful charts and metrics"
            width={600}  // adjust width based on your layout
            height={400} // adjust height accordingly
            className="rounded-lg shadow-xl floating"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

