import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from hiring teams worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1492858-1887-4021-8c7c-67b6801641d1.png"
                alt="Sarah Johnson, Head of HR at TechSolutions"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">Head of HR, TechSolutions</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;AutoInterviewer.ai transformed our hiring process. We&apos;ve reduced time-to-hire by 70% while improving candidate quality.&quot;
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45e69f62-794e-4727-9c5f-fb775ce1942e.png"
                alt="Michael Chen, CTO at FutureLabs"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-gray-500 text-sm">CTO, FutureLabs</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;The AI insights have been incredibly accurate in predicting which candidates will succeed in our company culture.&quot;
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

