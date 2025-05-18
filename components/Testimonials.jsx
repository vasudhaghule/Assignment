"use client"

import Pic from "@/public/Assets/pic.jpg"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const Testimonials = () => {
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
      { threshold: 0.1 },
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

  const testimonials = [
    {
      name: "Sangeeta Singh",
      role: "IT Director",
      company: "FoldHealth",
      image: Pic,
      quote:
        "SoftSell made it incredibly easy to recover value from our unused software licenses. The process was smooth, and we received payment within 24 hours. Highly recommended!",
    },
    {
      name: "Vasudha Ghule",
      role: "Operations Manager",
      company: "Google",
      image:   Pic,
      quote:
        "After downsizing our team, we had several unused enterprise licenses. SoftSell offered us 25% more than other resellers and handled everything professionally. Will definitely use again.",
    },
    {
      name: "Priya Desai",
      role: "Operations Manager",
      company: "GreenByte Corp.",
      image:  Pic,
      quote:
        "We were unsure how to deal with our excess software assets until we found SoftSell. Their support team walked us through every step. It was seamless and efficient!",
    },
    {
      name: "Daniel Weber",
      role: "Finance Lead",
      company: "NextEra Logistics",
       image: Pic,
      quote:
        "SoftSell has completely transformed the way we think about unused digital tools. Turning them into revenue helped us reinvest in more strategic resources.",
    },
  ]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-blue-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-400 bg-clip-text text-transparent">
              Our Customers
            </span>{" "}
            Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Real stories from real people. Discover how SoftSell adds value across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                 
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
