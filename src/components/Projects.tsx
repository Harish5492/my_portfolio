import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  Terminal,
  Layers,
  Globe,
  Monitor,
} from "lucide-react";

const ProjectImage: React.FC<{
  src: string;
  alt: string;
  category: string;
}> = ({ src, alt, category }) => {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100 dark:bg-gray-700">
      {!error ? (
        <motion.img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-500 dark:text-blue-400 p-4 text-center">
          <Layers className="w-12 h-12 mb-2 opacity-50" />
          <span className="text-sm font-medium opacity-70">{category}</span>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Cold Wallet",
      subtitle: "2024 - 2025",
      description:
        "A feature-rich admin panel for financial transactions, NFT marketplace, blockchain data visualization, and referral programs.",
      longDescription:
        "Designed and implemented an admin panel streamlining financial transactions, NFT marketplace, blockchain data visualization, and referral programs. Developed real-time dashboard analytics and dynamic modules like Transaction Data and NFT Transactions in React.js, with time-based filters, pagination, and seamless API integration. Created a multi-chain portfolio tool by scraping data from 13+ sources, optimized large-scale wallet fetching (50,000+) using BullMQ and Token Bucket Algorithm. Integrated AppsFlyer in backend for user interaction and app install tracking. Implemented RBAC across backend and frontend. Developed automated blockchain health monitoring with Cron Jobs, Redis caching, and CMC API. Built with TypeScript, Node.js, NestJS, PostgreSQL, MySQL, Redis, BullMQ, RabbitMQ, AppsFlyer, JWT, Refresh Token, SendGrid, Twilio, and Cron Jobs.",
      image: "/plusWallet.webp",
      technologies: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "BullMQ",
        "RabbitMQ",
        "AppsFlyer",
        "JWT",
        "Refresh Token",
        "SendGrid",
        "Twilio",
        "Cron Jobs",
      ],
      role: "Blockchain & Full Stack Developer",
      achievements: [
        "Designed and implemented feature-rich admin panel",
        "Developed real-time dashboard analytics and dynamic modules",
        "Created multi-chain portfolio tool scraping 13+ sources",
        "Optimized wallet fetching for 50,000+ wallets using BullMQ and Token Bucket",
        "Integrated AppsFlyer for user interaction and install tracking",
        "Implemented RBAC across backend and frontend",
        "Automated blockchain health monitoring with Cron Jobs and Redis caching",
      ],
      liveUrl:
        "https://apps.apple.com/us/app/plus-wallet-crypto-wallet-app/id6467651848",
      githubUrl: "#",
      status: "Live",
      category: "Mobile App",
    },
    {
      id: 2,
      title: "Triskle Wallet",
      subtitle: "Live",
      description:
        "A multi-chain wallet supporting BTC and all EVM-based blockchains, with real-time blockchain integration and transaction features.",
      longDescription:
        "Triskle Wallet enables users to manage both Bitcoin and EVM-based blockchain wallets in one app. I integrated BTC and EVM blockchains, fetched the latest block and address balances using RPC via Instanodes, and implemented logic to create, sign, and broadcast transactions directly from the app. The app also fetches and displays transaction history from the blockchain and saves it to the database for user reference.",
      image: "/triskel.jpg",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Blockchain APIs",
        "Redux",
        "TypeScript",
      ],
      role: "Backend Developer",
      achievements: [
        "Developed BTC and EVM wallet integration",
        "Fetched latest block and balance via blockchain RPC",
        "Implemented transaction creation, signing, and broadcasting",
        "Fetched and displayed transaction history from blockchain",
        "Saved user transactions to the database",
        "Live multi-chain wallet with real-time blockchain data",
      ],
      liveUrl: "https://apps.apple.com/us/app/triskel-wallet/id6449494626",
      githubUrl: "#",
      status: "Live",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Solos Finance",
      subtitle: "2024 - 2025",
      description:
        "Enterprise-grade DeFi microservices ecosystem for NFT-collateralized lending, real-time asset monitoring, and multi-tenant user management.",
      longDescription:
        "Engineered a distributed microservices architecture for a comprehensive DeFi platform, consisting of specialized services: Web3, User, Cron, Socket, Notify, Admin, and API Gateway. Developed a high-performance blockchain indexing pipeline using gRPC and Moralis to sync multi-chain (Polygon/Amoy) data for real-time portfolio tracking. Implemented a secure authentication and KYC system with Sumsub integration and OpenTelemetry for observability. Designed an event-driven communication layer using Kafka for asynchronous tasks and Socket.io for real-time user updates. Built complex financial logic for NFT-backed loans and pledged asset valuation using thermal-efficient SQL aggregations and Redis-based distributed caching.",
      image: "/solosfi.webp",
      technologies: [
        "TypeScript",
        "Node.js",
        "gRPC",
        "Kafka",
        "Redis",
        "MySQL",
        "Socket.io",
        "Ethers.js",
        "Docker",
        "OpenTelemetry",
      ],
      role: "Backend Developer",
      achievements: [
        "Architected and deployed a multi-service ecosystem (8+ specialized microservices) standardized on NestJS",
        "Implemented a hybrid communication model using gRPC for low-latency RPCs and Kafka/RabbitMQ for event-driven flows",
        "Developed a robust NFT collateralization system supporting ERC721/ERC1155 with automated loan state reconstruction",
        "Integrated real-time notification (SendGrid/Twilio/Postmark) and live data streaming via high-availability socket clusters",
        "Engineered a scalable blockchain indexing engine that reduced complex asset query latency by 80% through local synchronized data",
      ],
      liveUrl: "https://uat.solosfi.com/",
      status: "Live",
      category: "Web App / DeFi / Microservices",
    },
    {
      id: 4,
      title: "Note Wallet",
      subtitle: "2024 - 2024",
      description:
        "A secure note management system with advanced authentication, contract factory, and profit-driven crypto trading features.",
      longDescription:
        "Developed a highly secure authentication system using JWT and refresh tokens for session persistence. Built a Contract Factory for advanced role-based access control, empowering admins to approve sub-admins and manage token creation. Engineered a profit-driven Buy/Sell Mechanism with automated profit-sharing models for optimized crypto trading. Implemented RBAC for secure and efficient permission management across user roles. Backend built with TypeScript, NestJS, PostgreSQL, Redis, RabbitMQ, Twilio, SendGrid, Nodemailer, JWT, and Refresh Token for scalable, secure, and real-time services.",
      image: "/noteWallet.png",
      technologies: [
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Twilio",
        "SendGrid",
        "Nodemailer",
        "JWT",
        "Refresh Token",
      ],
      role: "Backend Developer",
      achievements: [
        "Developed secure authentication with JWT and refresh tokens",
        "Built Contract Factory for advanced RBAC and token management",
        "Engineered profit-driven Buy/Sell Mechanism with automated profit-sharing",
        "Implemented RBAC for secure permission management",
        "Delivered scalable, real-time backend services with modern stack",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      category: "Mobile App",
    },
    {
      id: 5,
      title: "Miracle Wallet",
      subtitle: "2025 - 2025",
      description:
        "A secure wallet app with CertiK audit fixes, App Lock, signature validation, and Ethers.js migration for robust blockchain interaction.",
      longDescription:
        "Strengthened app security by resolving CertiK audit points, including strict validation to ensure JWT user ID matches the database before allowing address book or notification updates. Implemented a secure App Lock mechanism with increasing wait intervals after failed PIN attempts. Added wallet creation validation by verifying user signature with Ethers.js. Migrated blockchain logic from Web3.js to Ethers.js for Ethereum and BSC. Built with TypeScript, Node.js, MySQL, Redis, RabbitMQ, JWT, Refresh Token, Zookeeper, Docker, SendGrid, Twilio, and Cron Jobs.",
      image: "/miracleWallet.png",
      technologies: [
        "TypeScript",
        "Node.js",
        "MySQL",
        "Redis",
        "RabbitMQ",
        "JWT",
        "Refresh Token",
        "Zookeeper",
        "Docker",
        "SendGrid",
        "Twilio",
        "Cron Jobs",
      ],
      role: "Backend Developer",
      achievements: [
        "Resolved CertiK audit points for enhanced security",
        "Implemented secure App Lock with increasing wait intervals",
        "Added wallet creation validation with Ethers.js signature verification",
        "Migrated blockchain logic from Web3.js to Ethers.js",
        "Delivered robust, scalable, and secure backend architecture",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      category: "Mobile App",
    },
    {
      id: 6,
      title: "MPC Vendor Wallet",
      subtitle: "2025 - 2025",
      description:
        "Vendor onboarding, API usage tracking, monetization, and grace period logic for scalable, reliable backend services.",
      longDescription:
        "Developed backend functionality to manage vendor onboarding with optional free trial configuration by Admin. Implemented logic to track vendor API hit usage, restricting app access once the predefined limit is exhausted. Designed and enforced a post-trial monetization model requiring payment for continued app usage or API access. Added grace period support configurable by Admin. Built with TypeScript, Node.js, MySQL, Docker, Zookeeper, and modular service logic for reliability under high demand.",
      image: "/mpcWallet.png",
      technologies: ["TypeScript", "Node.js", "MySQL", "Docker", "Zookeeper"],
      role: "Backend Developer",
      achievements: [
        "Developed vendor onboarding with free trial configuration",
        "Implemented API usage tracking and access restriction",
        "Designed post-trial monetization and grace period logic",
        "Built scalable, modular backend for high reliability",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      category: "Mobile App",
    },
    {
      id: 7,
      title: "Aix Wallet",
      subtitle: "2024 - 2025",
      description:
        "Multi-chain non-custodial crypto wallet backend with support for Solana, Tron, and EVM-compatible networks, featuring real-time transaction monitoring and secure key management.",
      longDescription:
        "Developed a robust backend for a multi-chain crypto wallet supporting Solana (Metaplex/SPL), Tron, and Ethereum/EVM networks. Implemented secure user authentication and non-custodial wallet management using RSA encryption and AWS Secrets Manager. Built an event-driven system using Kafka and Zookeeper for reliable transaction processing and BullMQ for task scheduling. Developed specialized cron services for real-time blockchain synchronization and transaction status monitoring. Integrated Firebase Cloud Messaging (FCM) for instant user notifications on transaction events. Engineered the platform using a modular TypeScript architecture with Sequelize for database management and Redis for high-performance caching.",
      image: "/aixWallet.png",
      technologies: [
        "TypeScript",
        "Node.js",
        "Solana SDK",
        "TronWeb",
        "Ethers.js",
        "Kafka",
        "Redis",
        "BullMQ",
        "AWS Secrets Manager",
        "PostgreSQL/MySQL",
      ],
      role: "Backend Developer",
      achievements: [
        "Architected multi-chain support for Solana, Tron, and Ethereum, enabling cross-chain asset management",
        "Implemented high-security infrastructure using RSA 2048-bit encryption for sensitive data protection",
        "Engineered scalable blockchain observers using cron jobs and message queues to process millions of transaction events",
        "Developed a robust notification system integrating Firebase (FCM) to provide real-time transaction alerts",
        "Optimized backend performance by implementing distributed caching and efficient gRPC/REST communication patterns",
      ],
      status: "In Development",
      category: "Mobile App / Fintech",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Production":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative blockchain and web applications
            that showcase cutting-edge technology and user-centric design.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => {
            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    category={project.category}
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold shadow-sm ${getStatusColor(
                        project.status,
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-black/30 backdrop-blur-md rounded-xl text-white border border-white/10 group-hover:scale-110 transition-transform">
                      {project.category.includes("Web") ? (
                        <Globe size={18} />
                      ) : project.category.includes("Mobile") ? (
                        <Smartphone size={18} />
                      ) : (
                        <Monitor size={18} />
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay Title */}
                  <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                    <p className="text-sm font-medium line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600/80 dark:text-blue-400/80">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100/80 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-[10px] font-bold rounded-lg border border-gray-200 dark:border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-gray-500 font-medium py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Terminal size={14} className="mr-2 text-blue-500" />
                      <span className="text-xs font-medium uppercase tracking-tighter">
                        View Details
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20"
                    >
                      <Zap size={16} fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-900 rounded-[2.5rem] max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject,
                  );
                  if (!project) return null;

                  return (
                    <div className="overflow-y-auto max-h-[90vh]">
                      <div className="relative h-80 sm:h-96">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-md text-white rounded-2xl flex items-center justify-center hover:bg-black/70 transition-all border border-white/10 z-10"
                        >
                          <span className="text-2xl">×</span>
                        </motion.button>

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span
                              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${getStatusColor(
                                project.status,
                              )}`}
                            >
                              {project.status}
                            </span>
                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/10">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-xl text-blue-400 font-bold uppercase tracking-widest">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-8 md:p-12">
                        <div className="grid lg:grid-cols-3 gap-12">
                          <div className="lg:col-span-2 space-y-8">
                            <div>
                              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-4">
                                Project Overview
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                                {project.longDescription}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6 flex items-center">
                                <Award className="w-5 h-5 mr-3 text-yellow-500" />
                                Key Impact & Achievements
                              </h4>
                              <div className="grid sm:grid-cols-1 gap-4">
                                {project.achievements.map(
                                  (achievement, index) => (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 * index }}
                                      className="flex items-start bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/50 group"
                                    >
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform shadow-lg shadow-blue-500/50" />
                                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                                        {achievement}
                                      </span>
                                    </motion.div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-8">
                            <div>
                              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6">
                                Stack & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-4 py-2 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold border border-blue-500/10 hover:bg-blue-500/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-8 space-y-4">
                              {project.liveUrl && project.liveUrl !== "#" && (
                                <motion.a
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
                                >
                                  <ExternalLink className="w-5 h-5 mr-3" />
                                  Experience Live
                                </motion.a>
                              )}
                              <button
                                onClick={() => setSelectedProject(null)}
                                className="w-full px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                              >
                                Close View
                              </button>
                            </div>
                          </div>
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

      {/* Heroic Navigation */}
      <div className="fixed bottom-12 right-12 z-50 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const event = new CustomEvent("navigateSection", {
              detail: { direction: "up" },
            });
            window.dispatchEvent(event);
          }}
          className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700/50 text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 transition-all"
        >
          <ChevronUp size={28} strokeWidth={3} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const event = new CustomEvent("navigateSection", {
              detail: { direction: "down" },
            });
            window.dispatchEvent(event);
          }}
          className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700/50 text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 transition-all"
        >
          <ChevronDown size={28} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
