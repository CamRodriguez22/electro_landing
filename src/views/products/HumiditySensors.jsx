"use client"

import { motion } from "framer-motion"
import { useInView } from "../../utils/useInView"
import { productsData } from "../../data/productsData"
import { ArrowLeft, Play, Download, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"

const HumiditySensors = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const navigate = useNavigate()
  const { isDark } = useTheme()

  const productData = productsData.find((p) => p.id === "sensores-humedad")

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"} pt-20`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => navigate("/")}
            className={`flex items-center space-x-2 mb-6 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
          >
            <ArrowLeft size={20} />
            <span>Volver al inicio</span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <productData.icon className="text-orange-500" size={32} />
            </div>
            <div>
              <h1 className={`text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                {productData.title}
              </h1>
              <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} mt-2`}>{productData.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Current Work Section */}
        <motion.div
          ref={ref}
          className={`${isDark ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-8 mb-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Conoce en qué estamos trabajando actualmente
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-4 text-orange-500`}>{productData.currentWork.title}</h3>
              <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                {productData.currentWork.description}
              </p>

              <div className="space-y-3">
                {productData.currentWork.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                Imágenes del desarrollo
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="/sensor-de-humedad-sht3x-en-desarrollo.jpg"
                  alt="Sensor SHT3x en desarrollo"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/sistema-de-compensaci-n-t-rmica-para-humedad.jpg"
                  alt="Sistema de compensación térmica"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/pruebas-de-humedad-en-c-mara-clim-tica.jpg"
                  alt="Pruebas en cámara climática"
                  className="w-full h-32 object-cover rounded-lg col-span-2"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Videos promocionales</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {productData.currentWork.videos.map((video, index) => (
              <div key={index} className={`${isDark ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-6`}>
                <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="text-gray-600" size={48} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {video.title}
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>{video.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          className={`${isDark ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-8`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Especificaciones técnicas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {productData.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2">
              <Download size={16} />
              <span>Descargar especificaciones</span>
            </button>
            <button
              className={`${isDark ? "bg-gray-700 text-white" : "bg-white text-gray-900"} border ${isDark ? "border-gray-600" : "border-gray-300"} px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2`}
            >
              <ExternalLink size={16} />
              <span>Solicitar cotización</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HumiditySensors
