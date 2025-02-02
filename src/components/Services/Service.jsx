import React from 'react';

function Service() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
        <h2 className="text-3xl text-center font-bold text-gray-900 md:text-5xl">
          My Creative Services
        </h2>
        <p className="text-center mt-4 text-lg text-gray-600">
          As a software developer, I bring creative solutions to life through cutting-edge technologies. Explore the range of services I offer to elevate your business.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">Web Development</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I specialize in building fast, scalable, and interactive web applications using modern technologies like React, Vite, and more. 
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-pink-500 font-bold">Learn More</span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">UI/UX Design</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I create aesthetically pleasing and user-friendly interfaces that ensure a seamless user experience across all devices.
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-green-500 font-bold">Learn More</span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">API Development</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I build secure, fast, and scalable APIs using REST and GraphQL to meet the growing needs of your business.
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-yellow-500 font-bold">Learn More</span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">E-commerce Solutions</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I create custom e-commerce platforms that provide a smooth and secure shopping experience for your customers.
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-purple-500 font-bold">Learn More</span>
            </div>
          </div>

          {/* Service 5 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-400 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">Consulting & Strategy</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I offer strategic guidance and consultancy to help businesses grow through innovative digital transformation solutions.
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-indigo-500 font-bold">Learn More</span>
            </div>
          </div>

          {/* Service 6 */}
          <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 opacity-30 rounded-lg group-hover:opacity-40"></div>
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">Freelance Development</h3>
            <p className="mt-4 text-gray-600 z-10 relative">
              I take on freelance development tasks, providing high-quality, scalable code for web apps, websites, and more.
            </p>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-teal-500 font-bold">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
