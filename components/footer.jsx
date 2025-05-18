"use client"

import { useTheme } from "./ThemeContext"

const Footer = () => {
  const { darkMode } = useTheme()
  const currentYear = new Date().getFullYear()

  const socialIcons = [
    
    {
      href: "#",
      title: "Facebook",
      svgPath:
        "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
       {
      href: "#",
      title: "Instagram",
      svgPath:
        "M12 2.2c3.2 0 3.6 0 4.8.1 1.3.1 2.2.3 2.7.6a4.8 4.8 0 0 1 1.8 1.8c.3.5.5 1.4.6 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.3-.3 2.2-.6 2.7a4.8 4.8 0 0 1-1.8 1.8c-.5.3-1.4.5-2.7.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.3-.1-2.2-.3-2.7-.6a4.8 4.8 0 0 1-1.8-1.8c-.3-.5-.5-1.4-.6-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.3.3-2.2.6-2.7a4.8 4.8 0 0 1 1.8-1.8c.5-.3 1.4-.5 2.7-.6 1.2-.1 1.6-.1 4.8-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.7.5-.9.9-.2.3-.4.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.5.7.9.9.3.2.8.4 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.5.9-.9.2-.3.4-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7a2.2 2.2 0 0 0-.9-.9c-.3-.2-.8-.4-1.7-.4-1.2-.1-1.6-.1-4.7-.1zM12 6.4a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2zm0 9.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm5.8-9.4a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z",
    },
    {
      href: "#",
      title: "Twitter",
      svgPath:
        "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.2 9.2 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13A12.94 12.94 0 0 1 3.15 2.16a4.52 4.52 0 0 0 1.4 6.04A4.48 4.48 0 0 1 2.8 7.14v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 2 19.54a12.94 12.94 0 0 0 7 2.05c8.4 0 13-7 13-13v-.59A9.23 9.23 0 0 0 23 3z",
    },
   
 
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-blue-950 dark:text-gray-400 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-red-400 bg-clip-text text-transparent"
            >
              SoftSell
            </a>
            <p className="mt-4">
              Unlock value from unused software licenses — quick, safe, and effortless.
            </p>
            <div className="flex mt-4 space-x-4">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  aria-label={icon.title}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
             
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
               <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
           
             
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-3">Subscribe</h4>
            <p>Get the latest updates and offers.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-sm text-center">
          <p>© {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
