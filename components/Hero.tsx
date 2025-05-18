"use client"

import { useEffect, useState } from "react"
import { useTheme } from "./ThemeContext"

const Hero = () => {
  useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-blue-950 dark:to-blue-950 z-0"></div>
      
      <div className="absolute inset-0 opacity-10 dark:opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fillOpacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
              Empower Your <br />
              <span className="bg-gradient-to-r from-teal-600 to-red-400 bg-clip-text text-transparent">
                Digital Potential
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Transform your unused assets into real opportunities — secure, easy, and fast.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#get-started"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200 dark:border-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-red-400 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Maximize value from your idle software assets</li>
                  <li>Fast and secure transactions with full transparency</li>
                  <li>Trusted by hundreds of businesses worldwide</li>
                  <li>Seamless and hassle-free experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
