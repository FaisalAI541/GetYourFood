import React from "react";
import { Fade, Zoom } from "react-reveal";
import { FaRocket, FaRegLightbulb, FaHeart } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Zoom>
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            Delivering your favorite food right to your doorstep
                        </p>
                    </div>
                </Zoom>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Fade bottom>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <FaRocket className="text-6xl text-blue-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            <p className="mt-2 text-gray-600 text-center">
                                Our mission is to provide a convenient, fast, and reliable food delivery service that brings delicious meals to your doorstep.
                            </p>
                        </div>
                    </Fade>

                    <Fade bottom delay={200}>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <FaRegLightbulb className="text-6xl text-yellow-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                            <p className="mt-2 text-gray-600 text-center">
                                Our vision is to revolutionize the food delivery industry by offering an unparalleled customer experience through innovation and technology.
                            </p>
                        </div>
                    </Fade>

                    <Fade bottom delay={400}>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <FaHeart className="text-6xl text-red-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
                            <p className="mt-2 text-gray-600 text-center">
                                We value customer satisfaction, reliability, and continuous improvement in all our operations to ensure the best service possible.
                            </p>
                        </div>
                    </Fade>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Fade bottom>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-900">Faisal Ahmad</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                    </Fade>

                    <Fade bottom delay={200}>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-900">Faisal Ahmad</h3>
                            <p className="text-gray-600">COO</p>
                        </div>
                    </Fade>
                </div>

                <Zoom>
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Join Us</h2>
                        <p className="mt-2 text-gray-600">
                            Interested in joining our team? We are always looking for passionate individuals to help us grow and deliver the best service possible.
                        </p>
                        <a
                            href="/careers"
                            className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
                        >
                            View Careers
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default AboutUs;
