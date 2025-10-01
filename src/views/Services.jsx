"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "../utils/useInView"
import { Thermometer, Droplets, Cpu, Settings, ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Thermometer,
      title: "Sensores de Temperatura",
      description: "Sensores de alta precisión para medición de temperatura en rangos extremos.",
      features: [
        "Rango de 15°C a 40°C",
        "Precisión ±0.5°C",
        "Respuesta rápida < 15 segundos",
        "Resistente a ambientes industriales",
        "Calibración certificada",
      ],
      image: "/temperature-sensor-electronic-device.jpg",
      link: "/productos/sensores-temperatura",
    },
    {
      icon: Droplets,
      title: "Sensores de Humedad",
      description: "Medición precisa de humedad relativa para control ambiental óptimo.",
      features: ["Rango 30-90% HR", "Precisión ±5% HR", "Compensación de temperatura", "Protección IP67"],
      image: "/humidity-sensor-electronic-component.jpg",
      link: "/productos/sensores-humedad",
    },
    {
      icon: Cpu,
      title: "Sistemas Integrados",
      description: "Soluciones completas con procesamiento y conectividad IoT.",
      features: [
        "Procesamiento en tiempo real",
        "Interfaz web integrada",
        "Alertas automáticas",
        "Almacenamiento de datos",
      ],
      image: "/iot-sensor-system-with-connectivity.jpg",
      link: "/productos/sistemas-integrados",
    },
    {
      icon: Settings,
      title: "Personalización",
      description: "Desarrollo de sensores personalizados según especificaciones del cliente.",
      features: [
        "Diseño a medida",
        "Prototipado rápido",
        "Pruebas exhaustivas",
        "Documentación completa",
        "Soporte técnico continuo",
      ],
      image: "/custom-electronic-sensor-development.jpg",
      link: "/productos/personalizacion",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="text-orange-500">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos una amplia gama de sensores y sistemas de medición diseñados para satisfacer las necesidades
            más exigentes de la industria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Tabs */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === index ? "bg-orange-500 text-white shadow-lg" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeService === index ? "bg-white/20" : "bg-orange-100"
                    }`}
                  >
                    <service.icon className={activeService === index ? "text-white" : "text-orange-500"} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className={`${activeService === index ? "text-white/90" : "text-gray-600"}`}>
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`transition-transform ${
                      activeService === index ? "rotate-90 text-white" : "text-gray-400"
                    }`}
                    size={20}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <img
                    src={services[activeService].image || "/placeholder.svg"}
                    alt={services[activeService].title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>

                <h4 className="text-2xl font-bold mb-4">{services[activeService].title}</h4>

                <div className="space-y-3 mb-6">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to={services[activeService].link}>
                  <motion.button
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Solicitar Información</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
