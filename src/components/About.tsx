import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Shield, Cloud, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ['Node.js', 'NestJS','GoLang', 'Python', 'Express.js', 'GraphQL', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Prisma'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Blockchain',
      icon: <Shield className="w-6 h-6" />,
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts', 'DeFi'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      category: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      technologies: ['Docker', 'AWS', 'RabbitMQ', 'CI/CD', 'Kubernetes'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-blue-300 dark:border-blue-600 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer & Blockchain Enthusiast
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 2 years of experience in software development, I specialize in building 
              robust web applications and innovative blockchain solutions. My passion lies in 
              creating scalable, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I have successfully delivered multiple projects ranging from cryptocurrency wallets 
              to enterprise-level web applications. My expertise spans across the entire development 
              lifecycle, from conception to deployment and maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                <span className="text-blue-800 dark:text-blue-300 font-medium">2+ Years Experience</span>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                <span className="text-green-800 dark:text-green-300 font-medium">10+ Projects Delivered</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                <span className="text-purple-800 dark:text-purple-300 font-medium">Blockchain Expert</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
        <button
          onClick={() => {
            const event = new CustomEvent('navigateSection', { detail: { direction: 'up' } });
            window.dispatchEvent(event);
          }}
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300"
        >
          <ChevronUp size={32} />
        </button>
        <button
          onClick={() => {
            const event = new CustomEvent('navigateSection', { detail: { direction: 'down' } });
            window.dispatchEvent(event);
          }}
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default About;