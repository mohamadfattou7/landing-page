import React from "react";

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 mb-8">Trusted by innovative companies worldwide</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7dcc7020-cd86-4ddf-82c0-67e686327eab.png"
            alt="TechCorp company logo"
            className="h-8 opacity-70 mx-auto"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd0a9bda-1928-48bb-ad7d-5cf8b5f6a0b1.png"
            alt="InnovateTech company logo"
            className="h-8 opacity-70 mx-auto"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b67d98d-198f-42f6-a160-c130db6f2276.png"
            alt="FutureSolutions company logo"
            className="h-8 opacity-70 mx-auto"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9bb0a0f2-2280-45ac-9793-c4c38ea15900.png"
            alt="DigitalFrontiers company logo"
            className="h-8 opacity-70 mx-auto md:block hidden"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80de9cf9-3bcc-499b-ab91-995b29b355f4.png"
            alt="NexusTech company logo"
            className="h-8 opacity-70 mx-auto md:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
