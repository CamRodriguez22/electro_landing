"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"
import Navigation from "./Navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img
              src={isDark ? "/images/thermolabs-logo-dark.jpeg" : "/images/thermolabs-logo-light.png"}
              alt="ThermoLabs Logo"
              className="h-10 w-auto object-contain"
            />
            <span
              className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
                isScrolled ? (isDark ? "text-white" : "text-[#363535]") : isDark ? "text-white" : "text-[#363535]"
              }`}
              style={{ fontFamily: "Archivo Black, sans-serif" }}
            >
              ThermoLabs
            </span>
          </motion.div>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Navigation />
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:block bg-[#db824c] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#c4743f] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Consulta Gratuita
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? isDark
                    ? "text-white hover:bg-gray-800"
                    : "text-[#363535] hover:bg-gray-100"
                  : isDark
                    ? "text-white hover:bg-white/10"
                    : "text-[#363535] hover:bg-black/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden mt-4 pb-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-md`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
              <motion.button
                className="w-full mt-4 bg-[#db824c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c4743f] transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Consulta Gratuita
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
