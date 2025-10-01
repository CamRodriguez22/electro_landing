"use client"
import { motion } from "framer-motion"
import { useInView } from "../utils/useInView"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Puerto Colombia", "Atlántico, Colombia"],
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["3217372833"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["thermolabs@gmail.com"],
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Miércoles: 12:00 PM - 2:00 PM", "Viernes: 10:00 AM - 12:00 PM"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Nuestro equipo está listo para ayudarte a encontrar la solución perfecta para
            tus necesidades de medición.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-gray-200 rounded-lg h-64 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Mapa Interactivo</p>
                <p className="text-sm">Ubicación de nuestras oficinas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Consulta</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors">
                  <option value="">Selecciona una opción</option>
                  <option value="sensores-temperatura">Sensores de Temperatura</option>
                  <option value="sensores-humedad">Sensores de Humedad</option>
                  <option value="sistemas-integrados">Sistemas Integrados</option>
                  <option value="personalizacion">Desarrollo Personalizado</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu proyecto o consulta en detalle..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la política de privacidad y el tratamiento de mis datos personales para fines comerciales y de
                  comunicación.
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Enviar Mensaje</span>
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
