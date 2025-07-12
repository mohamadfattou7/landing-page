import React from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How AutoInterviewer.ai Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, efficient, and effective candidate evaluation in 3 steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-3">Upload Candidates</h3>
            <p className="text-gray-600">
              Connect your ATS or upload candidate resumes directly to our platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-3">AI Screening</h3>
            <p className="text-gray-600">
              Our AI conducts video interviews and evaluates responses using advanced NLP.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-3">Review Top Candidates</h3>
            <p className="text-gray-600">
              Receive ranked candidate reports highlighting the best matches for your role.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e68a8f91-bea6-4e70-b1d4-e046a5c795bb.png"
            alt="Process flow diagram showing candidate upload, AI analysis, and results delivery steps"
            width={600} // Adjust based on your design
            height={400} // Adjust height accordingly
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
