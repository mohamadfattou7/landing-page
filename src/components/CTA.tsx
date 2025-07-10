import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of companies hiring smarter with AutoInterviewer.ai
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default CTA;
