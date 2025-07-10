import React from "react";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Candidate Screening</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes candidates with precision, identifying the best fit for your team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition transform hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-robot text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart AI Analysis</h3>
            <p className="text-gray-600">
              Our advanced algorithms evaluate candidates based on skills, cultural fit, and potential.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition transform hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-stopwatch text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Save 80% Time</h3>
            <p className="text-gray-600">
              Reduce screening time dramatically while improving hiring quality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition transform hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Insights</h3>
            <p className="text-gray-600">
              Get detailed analytics on candidate strengths and growth areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
