import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* LEFT TEXT SECTION */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Hire Smarter with <span className="text-indigo-600">AI-Powered</span> Interviews
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center md:text-left">
            AutoInterviewer.ai streamlines your hiring process with intelligent candidate screening that saves time and improves quality.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition text-center w-full sm:w-auto"
            >
              Sign Up for Open Beta
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/ai-dashboard.png"
            alt="AI Interview dashboard interface"
            width={600}
            height={400}
            className="w-full max-w-md rounded-lg shadow-xl floating"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;




