"use client"
import { motion } from "framer-motion"
import { ArrowRight, Thermometer, Droplets, Zap } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Hero = () => {
  const { isDark } = useTheme()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8fafc" }} // Dynamic background based on theme
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/electronic-circuit-pattern.jpg')] bg-cover bg-center"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: "#db824c", // Using ThermoLabs orange color
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{
                color: isDark ? "#ffffff" : "#1a1a1a", // Dynamic text color for proper contrast
                fontFamily: "Archivo Black, sans-serif", // ThermoLabs corporate font
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sensores de
              <span className="block" style={{ color: "#db824c" }}>
                Precisión
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed"
              style={{ color: isDark ? "#e5e7eb" : "#4b5563" }} // Dynamic text color for description
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desarrollamos tecnología avanzada en sensores de temperatura y humedad para revolucionar tu industria con
              precisión y confiabilidad.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-[#db824c] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-[#c4743f] transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#c4743f",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Conoce Nuestros Productos</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
                  isDark
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                }`} // Dynamic button styling for theme
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Casos de Éxito
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#db824c" }}>
                  1+
                </div>
                <div className="text-sm" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                  {" "}
                  // Dynamic stats text color Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#db824c" }}>
                  1+
                </div>
                <div className="text-sm" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                  {" "}
                  // Dynamic stats text color Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#db824c" }}>
                  99.9%
                </div>
                <div className="text-sm" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                  {" "}
                  // Dynamic stats text color Precisión Garantizada
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-[#db824c] to-[#c4743f] rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }} // Dynamic inner circle color
                >
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="w-16 h-16 bg-[#db824c] rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Thermometer className="text-white" size={24} />
                    </motion.div>
                    <motion.div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        isDark ? "bg-white" : "bg-gray-100"
                      }`} // Dynamic icon background
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      <Droplets className="text-[#db824c]" size={24} />
                    </motion.div>
                    <motion.div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        isDark ? "bg-white" : "bg-gray-100"
                      }`} // Dynamic icon background
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      <Zap className="text-[#db824c]" size={24} />
                    </motion.div>
                    <motion.div
                      className="w-16 h-16 bg-[#db824c] rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: "#db824c", // Using ThermoLabs orange color
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{
            borderColor: isDark ? "#ffffff" : "#1a1a1a", // Dynamic scroll indicator border
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: isDark ? "#ffffff" : "#1a1a1a" }} // Dynamic scroll indicator dot
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
