import React from "react";
import { Fade } from "react-reveal";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade bottom>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              We're here to help you. Reach out to us anytime.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade bottom delay={200}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaPhoneAlt className="text-6xl text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Phone</h2>
              <p className="mt-2 text-gray-600 text-center">
                Call us at (123) 456-7890
              </p>
            </div>
          </Fade>

          <Fade bottom delay={400}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaEnvelope className="text-6xl text-yellow-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Email</h2>
              <p className="mt-2 text-gray-600 text-center">
                Email us at support@getyourfood.com
              </p>
            </div>
          </Fade>

          <Fade bottom delay={600}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaMapMarkerAlt className="text-6xl text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Location</h2>
              <p className="mt-2 text-gray-600 text-center">
                123 Food Street, Gourmet City, Foodland
              </p>
            </div>
          </Fade>
        </div>

        <Fade bottom delay={800}>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Support
            </h2>
            <p className="mt-2 text-gray-600">
              Our customer support team is available 24/7 to assist you with any
              queries or issues.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
