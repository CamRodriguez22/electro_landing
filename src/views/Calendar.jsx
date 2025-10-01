"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "../utils/useInView"
import { CalendarIcon, Clock, User, Video, MapPin, ArrowRight } from "lucide-react"

const Calendar = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]

  const consultationTypes = [
    {
      icon: Video,
      title: "Consulta Virtual",
      duration: "30 min",
      description: "Reunión por videollamada para discutir tus necesidades",
    },
    {
      icon: MapPin,
      title: "Visita Presencial",
      duration: "60 min",
      description: "Visita a nuestras instalaciones o tu empresa",
    },
    {
      icon: User,
      title: "Consulta Técnica",
      duration: "45 min",
      description: "Sesión especializada con nuestros ingenieros",
    },
  ]

  // Generar días disponibles (próximos 14 días laborables)
  const generateAvailableDays = () => {
    const days = []
    const today = new Date()
    const currentDate = new Date(today)

    while (days.length < 14) {
      currentDate.setDate(currentDate.getDate() + 1)
      // Solo días laborables (lunes a viernes)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(new Date(currentDate))
      }
    }
    return days
  }

  const availableDays = generateAvailableDays()

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })
  }

  return (
    <section id="calendar" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Agenda tu <span className="text-orange-500">Consulta</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Programa una reunión con nuestros expertos para discutir tus necesidades y descubrir cómo nuestros sensores
            pueden beneficiar tu proyecto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consultation Types */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tipos de Consulta</h3>
            <div className="space-y-4">
              {consultationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="text-orange-500" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">{type.title}</h4>
                        <span className="text-sm text-gray-500">{type.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Notion Integration Info */}
            <motion.div
              className="mt-8 p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="font-semibold mb-3 flex items-center">
                <CalendarIcon className="text-orange-500 mr-2" size={20} />
                Integración con Notion
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Todas las citas se sincronizan automáticamente con nuestro sistema de gestión en Notion para un
                seguimiento completo.
              </p>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center">
                Ver en Notion
                <ArrowRight size={14} className="ml-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Selecciona Fecha y Hora</h3>

              {/* Date Selection */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Fechas Disponibles</h4>
                <div className="grid grid-cols-7 gap-2">
                  {availableDays.map((date, index) => (
                    <motion.button
                      key={index}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-orange-500 text-white"
                          : "bg-white hover:bg-orange-100 border border-gray-200"
                      }`}
                      onClick={() => setSelectedDate(date)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-xs font-medium">{formatDate(date)}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold mb-4">Horarios Disponibles</h4>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {availableTimes.map((time, index) => (
                      <motion.button
                        key={index}
                        className={`p-3 rounded-lg text-center transition-all ${
                          selectedTime === time
                            ? "bg-orange-500 text-white"
                            : "bg-white hover:bg-orange-100 border border-gray-200"
                        }`}
                        onClick={() => setSelectedTime(time)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Clock size={16} className="mx-auto mb-1" />
                        <div className="text-sm font-medium">{time}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Booking Summary */}
              {selectedDate && selectedTime && (
                <motion.div
                  className="bg-white p-6 rounded-lg border border-orange-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold mb-4">Resumen de la Cita</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon size={16} className="mr-2" />
                      <span>
                        {selectedDate.toLocaleDateString("es-ES", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{selectedTime}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Empresa"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <textarea
                    placeholder="Describe brevemente tu proyecto o necesidades..."
                    rows={3}
                    className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                  ></textarea>

                  <motion.button
                    className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Confirmar Cita</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Calendar
