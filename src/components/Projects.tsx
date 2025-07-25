import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Award, Users, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Plus Wallet',
      subtitle: '2024 - 2025',
      description: 'A feature-rich admin panel for financial transactions, NFT marketplace, blockchain data visualization, and referral programs.',
      longDescription: 'Designed and implemented an admin panel streamlining financial transactions, NFT marketplace, blockchain data visualization, and referral programs. Developed real-time dashboard analytics and dynamic modules like Transaction Data and NFT Transactions in React.js, with time-based filters, pagination, and seamless API integration. Created a multi-chain portfolio tool by scraping data from 13+ sources, optimized large-scale wallet fetching (50,000+) using BullMQ and Token Bucket Algorithm. Integrated AppsFlyer in backend for user interaction and app install tracking. Implemented RBAC across backend and frontend. Developed automated blockchain health monitoring with Cron Jobs, Redis caching, and CMC API. Built with TypeScript, Node.js, NestJS, PostgreSQL, MySQL, Redis, BullMQ, RabbitMQ, AppsFlyer, JWT, Refresh Token, SendGrid, Twilio, and Cron Jobs.',
      image: '/plusWallet.jpg',
      technologies: ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'MySQL', 'Redis', 'BullMQ', 'RabbitMQ', 'AppsFlyer', 'JWT', 'Refresh Token', 'SendGrid', 'Twilio', 'Cron Jobs'],
      role: 'Blockchain & Full Stack Developer',
      achievements: [
        'Designed and implemented feature-rich admin panel',
        'Developed real-time dashboard analytics and dynamic modules',
        'Created multi-chain portfolio tool scraping 13+ sources',
        'Optimized wallet fetching for 50,000+ wallets using BullMQ and Token Bucket',
        'Integrated AppsFlyer for user interaction and install tracking',
        'Implemented RBAC across backend and frontend',
        'Automated blockchain health monitoring with Cron Jobs and Redis caching'
      ],
      liveUrl: 'https://apps.apple.com/us/app/plus-wallet-crypto-wallet-app/id6467651848',
      githubUrl: '#',
      status: 'Live',
      category: 'Mobile App'
    },
    {
      id: 2,
      title: 'Triskle Wallet',
      subtitle: 'Live',
      description: 'A multi-chain wallet supporting BTC and all EVM-based blockchains, with real-time blockchain integration and transaction features.',
      longDescription: 'Triskle Wallet enables users to manage both Bitcoin and EVM-based blockchain wallets in one app. I integrated BTC and EVM blockchains, fetched the latest block and address balances using RPC via Instanodes, and implemented logic to create, sign, and broadcast transactions directly from the app. The app also fetches and displays transaction history from the blockchain and saves it to the database for user reference.',
      image: '/triskel.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain APIs', 'Redux', 'TypeScript'],
      role: 'Backend Developer',
      achievements: [
        'Developed BTC and EVM wallet integration',
        'Fetched latest block and balance via blockchain RPC',
        'Implemented transaction creation, signing, and broadcasting',
        'Fetched and displayed transaction history from blockchain',
        'Saved user transactions to the database',
        'Live multi-chain wallet with real-time blockchain data'
      ],
      liveUrl: 'https://apps.apple.com/us/app/triskel-wallet/id6449494626',
      githubUrl: '#',
      status: 'Live',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'Note Wallet',
      subtitle: '2024 - 2024',
      description: 'A secure note management system with advanced authentication, contract factory, and profit-driven crypto trading features.',
      longDescription: 'Developed a highly secure authentication system using JWT and refresh tokens for session persistence. Built a Contract Factory for advanced role-based access control, empowering admins to approve sub-admins and manage token creation. Engineered a profit-driven Buy/Sell Mechanism with automated profit-sharing models for optimized crypto trading. Implemented RBAC for secure and efficient permission management across user roles. Backend built with TypeScript, NestJS, PostgreSQL, Redis, RabbitMQ, Twilio, SendGrid, Nodemailer, JWT, and Refresh Token for scalable, secure, and real-time services.',
      image: '/noteWallet.png',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Twilio', 'SendGrid', 'Nodemailer', 'JWT', 'Refresh Token'],
      role: 'Backend Developer',
      achievements: [
        'Developed secure authentication with JWT and refresh tokens',
        'Built Contract Factory for advanced RBAC and token management',
        'Engineered profit-driven Buy/Sell Mechanism with automated profit-sharing',
        'Implemented RBAC for secure permission management',
        'Delivered scalable, real-time backend services with modern stack'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'In Development',
      category: 'Mobile App'
    },
    {
      id: 4,
      title: 'Miracle Wallet',
      subtitle: '2025 - 2025',
      description: 'A secure wallet app with CertiK audit fixes, App Lock, signature validation, and Ethers.js migration for robust blockchain interaction.',
      longDescription: 'Strengthened app security by resolving CertiK audit points, including strict validation to ensure JWT user ID matches the database before allowing address book or notification updates. Implemented a secure App Lock mechanism with increasing wait intervals after failed PIN attempts. Added wallet creation validation by verifying user signature with Ethers.js. Migrated blockchain logic from Web3.js to Ethers.js for Ethereum and BSC. Built with TypeScript, Node.js, MySQL, Redis, RabbitMQ, JWT, Refresh Token, Zookeeper, Docker, SendGrid, Twilio, and Cron Jobs.',
      image: '/miracleWallet.png',
      technologies: ['TypeScript', 'Node.js', 'MySQL', 'Redis', 'RabbitMQ', 'JWT', 'Refresh Token', 'Zookeeper', 'Docker', 'SendGrid', 'Twilio', 'Cron Jobs'],
      role: 'Backend Developer',
      achievements: [
        'Resolved CertiK audit points for enhanced security',
        'Implemented secure App Lock with increasing wait intervals',
        'Added wallet creation validation with Ethers.js signature verification',
        'Migrated blockchain logic from Web3.js to Ethers.js',
        'Delivered robust, scalable, and secure backend architecture'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'In Development',
      category: 'Mobile App'
    },
    {
      id: 5,
      title: 'MPC Vendor Wallet',
      subtitle: '2025 - 2025',
      description: 'Vendor onboarding, API usage tracking, monetization, and grace period logic for scalable, reliable backend services.',
      longDescription: 'Developed backend functionality to manage vendor onboarding with optional free trial configuration by Admin. Implemented logic to track vendor API hit usage, restricting app access once the predefined limit is exhausted. Designed and enforced a post-trial monetization model requiring payment for continued app usage or API access. Added grace period support configurable by Admin. Built with TypeScript, Node.js, MySQL, Docker, Zookeeper, and modular service logic for reliability under high demand.',
      image: '/mpcWallet.png',
      technologies: ['TypeScript', 'Node.js', 'MySQL', 'Docker', 'Zookeeper'],
      role: 'Backend Developer',
      achievements: [
        'Developed vendor onboarding with free trial configuration',
        'Implemented API usage tracking and access restriction',
        'Designed post-trial monetization and grace period logic',
        'Built scalable, modular backend for high reliability'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'In Development',
      category: 'Mobile App'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'In Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Production':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative blockchain and web applications that showcase 
            cutting-edge technology and user-centric design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <Smartphone className="w-6 h-6 text-green-500" />
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center mb-4">
                  <Users className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.role}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.id);
                    }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        >
                          ×
                        </button>
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                              {project.subtitle}
                            </p>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                          {project.longDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-yellow-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {project.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          {project.liveUrl && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                            >
                              <ExternalLink className="w-5 h-5 mr-2" />
                              View Live Project
                            </motion.a>
                          )}
                          {/* <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </motion.a> */}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

export default Projects;