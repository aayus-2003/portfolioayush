import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from '../../../img2/banner.webp';
import downlode from '../../../img/react/download.jpeg';
import passgenrator from '../../../img/react/passgenrator.jpeg';
import bgchanger from '../../../img/react/bgchanger.jpeg';
import calsi from '../../../img/js/calsi.png';
import fliplogo from '../../../img/js/fliplogo.jpg';
import mygoogle from '../../../img/js/mygoogle.jpeg';
import todolist from '../../../img/js/todoist-new-logo-red.webp';
import jokeimg from '../../../img/js/jokeJs.jpeg';
import clock from '../../../img/js/clock.jpeg';

const Home = () => {
  const jsProjects = [
    {
      id: 1,
      title: "calsiWithJs",
      description: "My Portfolio WebSite with Html, css, boostarp",
      image: calsi,
      url: "https://aayus-2003.github.io/calcuWithJs/"
    },
    {
      id: 2,
      title: "flipkartClone",
      description: "i ll make flipkart clone with using html, css and javascript",
      image: fliplogo,
      url: "https://aayus-2003.github.io/flipkartClone/"
    },
    {
      id: 3,
      title: "dummy Google",
      description: "google website clone.",
      image: mygoogle,
      url: "https://aayus-2003.github.io/myGoogle/"
    },
    {
      id: 4,
      title: "todoList",
      description: "add some todo for your , helpfull webApp for you .",
      image: todolist,
      url: "https://aayus-2003.github.io/todoList/"
    },
    {
      id: 5,
      title: "jokeGenrator",
      description: "joke Genrator with html, css and JavaScript.",
      image: jokeimg,
      url: "https://aayus-2003.github.io/jokeGenrator/"
    },
    {
      id: 6,
      title: "setIntervalClock",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: clock,
      url: "https://aayus-2003.github.io/Clock/"
    },
    {
      id: 7,
      title: "ticTacToe",
      description: "Tic Tac Toe | Educational Games for Kids | Toy Theater This classic game contributes to children's developmental growth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVeYo-7dmDBKZoD3VIHlPZFkp_0mDHzOACA&usqp=CAU",
      url: "https://aayus-2003.github.io/ticTacToe/"
    },
    {
      id: 8,
      title: "ApiApp : 2",
      description: "downlode naruto series from here.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBvk_SZws309cRLWn6wJidU46A_klr5X62Q&usqp=CAU",
      url: "https://aayus-2003.github.io/narutoWithApi/"
    }
  ];

  const reactProjects = [
    {
      id: 1,
      title: "currency convertor",
      description: "i ll make currency Convertor using react with vite and tailwind css",
      image: downlode,
      url: "https://aayus-2003.github.io/currencyconvertor/"
    },
    {
      id: 2,
      title: "Password Genrator",
      description: "i ll make Password Genrator using react with vite and tailwind css",
      image: passgenrator,
      url: "https://aayus-2003.github.io/passwordGenrator/"
    },
    {
      id: 3,
      title: "Background Changer",
      description: "i ll make Background Changer using react with vite and tailwind css",
      image: bgchanger,
      url: "https://aayus-2003.github.io/bgChanger/"
    }
  ];

  // New Live Projects Array (3 Items)
  const liveProjects = [
    {
      id: 1,
      title: "CoinPayWays – Cryptocurrency Payment Platform",
      description: "A secure and efficient platform for accepting cryptocurrency payments. Simplifying digital currency transactions for businesses.",
      image: banner,  
      url: "https://coinpayways.com"
    },
    {
      id: 2,
      title: "Indian Chess School : Website",
      description: "A comprehensive platform offering chess lessons, resources, and training for all skill levels. Empowering students to master the game with expert guidance and structured courses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQ90v3qkdafCuq8IEHU1DSBrgBaPbvlPBWA&s",  // Placeholder image
      url: "https://indianchessschool.com/"
    },
    {
      id: 3,
      title: "Saakaar Architects : Website",
      description: "Revamped and modernized the Saakaar Architects website to enhance user experience, improve performance, and showcase their architectural designs with a fresh, responsive design.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0s2pex3yakL9VLe19oKe9qwp4fYUacdpLA&s",  // Placeholder image
      url: "https://www.saakaar.co.in/"
    }
  ];

  // New Freelancing Work Array (3 Items)
  const freelancingWork = [
    {
      id: 1,
      title: "Nishant Sonawne - Portfolio Website: Created a sleek and responsive portfolio website to showcase",
      description: "Nishant Sonawne skills and projects with a modern design and user-friendly interface.",
      image: "https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1",  // Placeholder image
      url: "https://portfoliowebsitenishant.netlify.app/"
    },
    {
      id: 2,
      title: "Prince Gupta - Portfolio Website: Created a sleek and responsive portfolio website to showcase",
      description: "Prince Gupta's skills and projects with a modern design and user-friendly interface.",
      image: "https://ezahn47ugtf.exactdn.com/wp-content/uploads/2022/05/portfolio-book-creation-scaled.jpg?strip=all&lossy=1&ssl=1",  // Placeholder image
      url: "https://princegupta00.github.io/portfolioWebsite/"
    },
    {
     id: 3,
      title: "Pratham Ambre - Portfolio Website: Created a sleek and responsive portfolio website to showcase",
      description: "Pratham Ambre skills and projects with a modern design and user-friendly interface.",
      image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",  // Placeholder image
      url: "https://prathamambre.github.io/myPortfolio/"
    }
  ];

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="relative text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-6 rounded-lg mt-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I am a professional software developer and freelancer specializing in delivering high-quality web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              to="contact"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Live Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {liveProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={project.url}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* React Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">React Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {reactProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={project.url}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JavaScript Projects Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">JavaScript Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {jsProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={project.url}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Freelancing Work Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Freelancing Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {freelancingWork.map((work) => (
            <motion.div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <Link
                  to={work.url}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center rounded-lg mt-4 mb-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
        <p className="text-lg mb-8">
          Let’s work together to build something amazing.
        </p>
        <Link
          to="contact"
          className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
