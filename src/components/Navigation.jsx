"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useNavigate, useLocation } from "react-router-dom"

const Navigation = ({ mobile = false, onItemClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      title: "Inicio",
      href: "#hero",
      action: "scroll",
    },
    {
      title: "Nosotros",
      href: "#about",
      action: "scroll",
      dropdown: [
        { title: "Nuestra Historia", href: "#about", action: "scroll" },
        { title: "Misión y Visión", href: "#about", action: "scroll" },
        { title: "Certificaciones", href: "#about", action: "scroll" },
      ],
    },
    {
      title: "Nuestro Trabajo",
      href: "#services",
      action: "scroll",
      dropdown: [
        { title: "Sensores de Temperatura", href: "/productos/sensores-temperatura", action: "navigate" },
        { title: "Sensores de Humedad", href: "/productos/sensores-humedad", action: "navigate" },
        { title: "Sistemas Integrados", href: "/productos/sistemas-integrados", action: "navigate" },
        { title: "Proyectos Personalizados", href: "/productos/personalizacion", action: "navigate" },
      ],
    },
    {
      title: "Equipo",
      href: "#team",
      action: "scroll",
    },
    {
      title: "Contacto",
      href: "#contact",
      action: "scroll",
    },
  ]

  const handleItemClick = (href, action = "scroll") => {
    if (onItemClick) onItemClick()

    if (action === "navigate") {
      navigate(href)
    } else {
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first then scroll
        navigate("/")
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        // If on home page, just scroll
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <nav className={mobile ? "flex flex-col space-y-2" : "flex items-center space-x-8"}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => !mobile && setActiveDropdown(index)}
          onMouseLeave={() => !mobile && setActiveDropdown(null)}
        >
          <motion.button
            className={`flex items-center space-x-1 font-medium hover:text-[#db824c] transition-colors ${
              mobile ? "w-full text-left py-2" : ""
            }`}
            style={{
              color: isDark ? "#ffffff" : "#363535",
            }}
            onClick={() => {
              if (item.dropdown && mobile) {
                setActiveDropdown(activeDropdown === index ? null : index)
              } else {
                handleItemClick(item.href, item.action)
              }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span>{item.title}</span>
            {item.dropdown && (
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
              />
            )}
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.dropdown && activeDropdown === index && (
              <motion.div
                className={`${
                  mobile
                    ? "mt-2 ml-4 space-y-2"
                    : `absolute top-full left-0 mt-2 rounded-lg shadow-lg py-2 min-w-[200px] border ${
                        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                      }`
                }`}
                initial={{ opacity: 0, y: mobile ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: mobile ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                  <motion.button
                    key={dropdownIndex}
                    className={`block w-full text-left hover:text-[#db824c] transition-colors ${
                      mobile ? "py-1 text-sm" : `px-4 py-2 ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}`
                    }`}
                    style={{
                      color: mobile ? (isDark ? "#d1d5db" : "#6b7280") : isDark ? "#e5e7eb" : "#374151",
                    }}
                    onClick={() => handleItemClick(dropdownItem.href, dropdownItem.action)}
                    whileHover={{ x: mobile ? 5 : 0 }}
                  >
                    {dropdownItem.title}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}

export default Navigation
