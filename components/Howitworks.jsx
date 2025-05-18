"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaCloudUploadAlt, FaSearchDollar, FaHandHoldingUsd } from "react-icons/fa"

const steps = [
  {
    title: "Submit Your License",
    description:
      "Easily upload your software license files with complete data encryption and privacy.",
    icon: <FaCloudUploadAlt size={48} className="text-gradient" />,
  },
  {
    title: "Receive Instant Analysis",
    description:
      "Leverage our AI-driven valuation engine to get accurate and real-time market pricing.",
    icon: <FaSearchDollar size={48} className="text-gradient" />,
  },
  {
    title: "Quick Payment",
    description:
      "Approve your offer and enjoy fast, secure payments directly to your bank or wallet.",
    icon: <FaHandHoldingUsd size={48} className="text-gradient" />,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.35,
      type: "spring",
      stiffness: 60,
    },
  }),
}

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-blue-950"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Experience a seamless way to monetize your unused software licenses
            with confidence and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center cursor-pointer hover:shadow-blue-400/50 hover:scale-[1.07] transition-transform duration-300"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition shadow-blue-400/70 hover:-translate-y-1 transform duration-300"
          >
            Start Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #3b82f6, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
