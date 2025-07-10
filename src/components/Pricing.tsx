import React from "react";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your hiring needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-500 mb-6">For small teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="text-gray-600">Up to 50 candidates/month</li>
              <li className="text-gray-600">Basic AI screening</li>
              <li className="text-gray-600">Standard reports</li>
              <li className="text-gray-600">Email support</li>
            </ul>
            <button className="w-full border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition">
              Get Started
            </button>
          </div>

          {/* Plan 2 */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-600 transform scale-105 relative text-center">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-gray-500 mb-6">For growing companies</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$299</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="text-gray-600">Up to 200 candidates/month</li>
              <li className="text-gray-600">Advanced AI screening</li>
              <li className="text-gray-600">Detailed reports</li>
              <li className="text-gray-600">Priority support</li>
              <li className="text-gray-600">ATS integration</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>

          {/* Plan 3 */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="text-gray-600">Unlimited candidates</li>
              <li className="text-gray-600">Premium AI screening</li>
              <li className="text-gray-600">Custom reports</li>
              <li className="text-gray-600">24/7 support</li>
              <li className="text-gray-600">Dedicated account manager</li>
              <li className="text-gray-600">API access</li>
            </ul>
            <button className="w-full border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
