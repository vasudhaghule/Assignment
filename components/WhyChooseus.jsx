"use client"

import { useEffect, useState, useRef } from "react"

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const highlights = [
    {
      title: "Trusted by Thousands",
      description:
        "Join a growing community of verified users who’ve successfully monetized their software assets using our platform.",
    },
    {
      title: "Transparent Process",
      description:
        "No hidden fees or surprise deductions — just a clear, honest transaction from start to finish.",
    },
    {
      title: "Global Reach",
      description:
        "We operate internationally, enabling you to sell or value licenses across multiple regions and currencies.",
    },
    {
      title: "Sustainability Focus",
      description:
        "By reselling unused licenses, you're helping reduce digital waste and support sustainable tech practices.",
    },
  ]

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-400 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover the unique benefits that set us apart in the software license resale space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((point, index) => (
            <div
              key={index}
              className={`bg-blue-900 border border-blue-800 rounded-xl p-8 transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
