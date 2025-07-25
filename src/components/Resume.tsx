import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap, Code, ChevronDown, ChevronUp } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Harish Rana - Resume.pdf';
    link.download = 'Harish_Rana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'MERN Stack & Blockchain Developer',
      company: 'Antier Solutions Pvt. Ltd.',
      period: 'Jan 2024 – Present',
      description: 'Driving development of scalable crypto wallets and DeFi platforms across multiple blockchain networks.',
      achievements: [
        'Architected and deployed Plus Wallet (4.8★ on App Store) with dynamic NFT & transaction modules.',
        'Engineered cross-chain systems handling 50K+ wallets & 10M+ transactions using BullMQ & Token Bucket Algorithm.',
        'Led full-stack development of Note Wallet with secure RBAC, smart contract factory, and real-time profit models.',
        'Enhanced security in Miracle Wallet by addressing CertiK audit points and implementing App Lock PIN logic.',
        'Built MPC Vendor Wallet with post-trial monetization, usage tracking, and grace period logic.',
        'Mentored junior devs, conducted code reviews, and optimized APIs for performance and maintainability.'
      ]
    }
  ];


  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Chandigarh Group of Colleges Mohali, Punjab - India',
      period: '2016 - 2020',
      grade: 'CGPA: 6.96/10'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Certified Ethereum Developer',
    'MongoDB Certified Developer',
    'Blockchain Certified Developer',
    'Mern Stack Certified Developer',
    'Google Cloud Professional Developer'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Download my complete resume or explore my professional journey below.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-green-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {edu.period}
                </span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.grade}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-600" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-purple-600" />
            Technical Expertise Summary
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                React.js, Next.js, TypeScript, Tailwind CSS, Redux, React Native
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Node.js, NestJS, Express.js, GraphQL, REST APIs, Microservices
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Blockchain</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ethereum, Solidity, Web3.js, Smart Contracts, DeFi, MPC
              </p>
            </div>
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

export default Resume;