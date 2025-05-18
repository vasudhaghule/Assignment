"use client"

import { useState } from "react"
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/Howitworks";
import WhyChooseUs from "@/components/WhyChooseus";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contactform";
import Footer from "@/components/footer";
import ChatWidget from "@/components/Chatwidget";
import { ThemeProvider } from "@/components/ThemeContext";

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />

        
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 flex items-center justify-center"
        >
          {showChat ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
        {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
      </div>
    </ThemeProvider>
  )
}

export default App
