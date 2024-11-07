"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaClock,
  FaUserTie,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

export function EnhancedBenefitsSectionComponent() {
  return (
    <section
      id="benefits"
      className="w-full py-20 px-6 bg-gradient-to-b from-blue-50 to-indigo-100"
    >
      <div className="w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Benefits & Perfect Fit
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <BenefitsCard />
          <PerfectFitCard />
        </div>
      </div>
    </section>
  );
}

function BenefitsCard() {
  const benefits = [
    {
      icon: <FaRocket />,
      text: "Boost your confidence with realistic interview simulations",
    },
    {
      icon: <FaChartLine />,
      text: "Improve your communication skills with AI-powered feedback",
    },
    {
      icon: <FaClock />,
      text: "Practice anytime, anywhere with our user-friendly platform",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-6 text-blue-600">
        Why Choose Zen?
      </h3>
      <ul className="space-y-6">
        {benefits.map((benefit, index) => (
          <AnimatedBenefitItem
            key={index}
            icon={benefit.icon}
            text={benefit.text}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function PerfectFitCard() {
  const personas = [
    {
      icon: <FaUserTie />,
      text: "Job seekers looking to ace their next interview",
    },
    {
      icon: <FaGraduationCap />,
      text: "Students entering the job market for the first time",
    },
    {
      icon: <FaBuilding />,
      text: "Professionals preparing for internal promotions",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-6 text-blue-600">
        Perfect For:
      </h3>
      <ul className="space-y-6">
        {personas.map((persona, index) => (
          <AnimatedPersonaItem
            key={index}
            icon={persona.icon}
            text={persona.text}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function AnimatedBenefitItem({
  icon,
  text,
  index,
}: {
  icon: JSX.Element;
  text: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center space-x-4"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </motion.li>
  );
}

function AnimatedPersonaItem({
  icon,
  text,
  index,
}: {
  icon: JSX.Element;
  text: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="flex items-center space-x-4"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </motion.li>
  );
}
