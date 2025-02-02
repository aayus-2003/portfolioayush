import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="About Ayush"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Hi, I'm Ayush Dinesh Goregaonkar, a passionate software developer with professional experience and over a year of freelancing. I specialize in building dynamic and responsive web applications using the latest technologies like React.js and Vite.
                        </p>
                        <p className="mt-4 text-gray-600">
                            In my journey, I have worked on various exciting projects, ranging from building websites for small businesses to developing full-fledged web applications. I am always looking to improve my skills and take on new challenges in the tech world.
                        </p>
                        <p className="mt-4 text-gray-600">
                            My expertise includes front-end development, particularly in React, along with proficiency in back-end technologies. I’m passionate about creating clean, efficient, and scalable code that helps businesses achieve their goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
