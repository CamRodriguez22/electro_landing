"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  const footerLinks = {
    Productos: ["Sensores de Temperatura", "Sensores de Humedad", "Sistemas Integrados", "Desarrollo Personalizado"],
    Empresa: ["Sobre Nosotros", "Nuestro Equipo", "Casos de Éxito", "Certificaciones"],
    Soporte: ["Documentación Técnica", "Manuales de Usuario", "Soporte Técnico", "Garantías"],
    Legal: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies", "Aviso Legal"],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/thermolabs_co", label: "Instagram" },
  ]

  return (
    <footer className={`${isDark ? "bg-black text-white" : "bg-gray-900 text-white"}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white via-gray-100 to-[#db824c] rounded-lg flex items-center justify-center border border-gray-300">
                <span className="text-[#363535] font-bold text-lg">TL</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: "Archivo Black, sans-serif" }}>
                ThermoLabs
              </span>
            </motion.div>

            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Diseñamos y desarrollamos soluciones electrónicas innovadoras para el monitoreo y control de temperatura,
              integrando precisión, eficiencia y confiabilidad.
            </motion.p>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">Puerto Colombia, Atlántico</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span className="text-sm">3217372833</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">thermolabs@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-[#db824c] transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Mantente Actualizado</h4>
              <p className="text-gray-300">Recibe las últimas noticias sobre nuestros productos y tecnologías.</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#db824c] focus:outline-none text-white"
              />
              <motion.button
                className="bg-[#db824c] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#c4743f] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ThermoLabs Company. Todos los derechos reservados.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#db824c] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
