"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMicrophone,
  FaEye,
  FaRobot,
  FaChartBar,
  FaStar,
  FaUserClock,
} from "react-icons/fa";
import Link from "next/link";
import { EnhancedBenefitsSectionComponent } from "./enhanced-benefits-section";
import { Menu as MenuIcon, X } from "lucide-react"; // Add this import

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this state

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-indigo-100">
      <header className="w-full px-6 py-6 relative">
        <nav className="flex justify-between items-center w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold text-blue-600">
              Zen
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <motion.ul
            className="hidden lg:flex space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>
              <Link
                href="#features"
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#benefits"
                className="text-gray-600 hover:text-blue-600"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Get Started
              </Link>
            </li>
          </motion.ul>

          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 lg:hidden"
            >
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-600 hover:text-blue-600 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#benefits"
                    className="text-gray-600 hover:text-blue-600 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </nav>
      </header>

      <main className="flex-grow w-full">
        <section className="w-full px-6 py-20 text-center">
          <div className="w-full mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 text-gray-800"
            >
              Master Your Interviews with AI-Powered Practice
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-gray-600"
            >
              Zen helps you prepare for job interviews with cutting-edge AI
              technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Start Practicing Now
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="features" className="w-full bg-white py-20 px-6">
          <div className="w-full mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center text-gray-800"
            >
              Powerful Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <FeatureCard
                icon={<FaMicrophone className="text-4xl text-blue-600" />}
                title="Speech to Text"
                description="Advanced speech recognition for accurate transcription of your responses."
                delay={0}
              />
              <FeatureCard
                icon={<FaEye className="text-4xl text-blue-600" />}
                title="Real-time Eye Contact"
                description="AI-powered eye contact analysis to improve your non-verbal communication."
                delay={0.2}
              />
              <FeatureCard
                icon={<FaRobot className="text-4xl text-blue-600" />}
                title="AI-Generated Questions"
                description="Dynamic question generation tailored to your industry and experience."
                delay={0.4}
              />
              <FeatureCard
                icon={<FaChartBar className="text-4xl text-blue-600" />}
                title="AI Feedback"
                description="Comprehensive analysis and suggestions to enhance your interview performance."
                delay={0.6}
              />
              <FeatureCard
                icon={<FaStar className="text-4xl text-blue-600" />}
                title="Rating System"
                description="Objective scoring to track your progress and identify areas for improvement."
                delay={0.8}
              />
              <FeatureCard
                icon={<FaUserClock className="text-4xl text-blue-600" />}
                title="Adaptive Learning"
                description="Personalized practice sessions that evolve based on your performance and goals."
                delay={1.0}
              />
            </div>
          </div>
        </section>

        <EnhancedBenefitsSectionComponent />
      </main>

      <footer className="w-full bg-gray-800 text-white py-12 px-6">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Zen</h3>
              <p className="text-gray-400">
                Empowering job seekers with AI-powered interview preparation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#benefits"
                    className="text-gray-400 hover:text-white"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Zen AI Interview Platform. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}
