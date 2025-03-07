import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Factory, Search, TrendingUp, Award, Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Connecting CPG Players Through Intelligent Matching
              </h1>
              <p className="text-xl mb-8">
                Find the perfect manufacturing partners, discover trending products, and grow your CPG business with data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
                <Link
                  to="/products"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white hover:bg-opacity-10 transition"
                >
                  Explore Products
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="CPG Manufacturing"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How CPG Match Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced AI to connect the right players in the CPG industry, saving you time and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-gray-600">
                Find products and manufacturers that match your specific requirements using our advanced filtering system.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Our machine learning algorithms analyze your project requirements and suggest the best potential partners.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Partners</h3>
              <p className="text-gray-600">
                All manufacturers and products on our platform are verified for quality, certifications, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">5,000+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">1,200+</p>
              <p className="text-gray-600">Manufacturers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">3,500+</p>
              <p className="text-gray-600">Successful Matches</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of CPG businesses that have found the right manufacturing partners through our platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Sign Up Now
            </Link>
            <Link
              to="/projects/new"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;