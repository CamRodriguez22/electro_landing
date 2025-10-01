"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "../utils/useInView"
import { Linkedin, Mail, X } from "lucide-react"

const Team = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      name: "Juan Betancourt",
      position: "Design Leader",
      specialization: "Liderazgo Técnico y Arquitectura de Sistemas",
      experience: "Estudiante de Ingeniería",
      image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd05iL3EICvfyOCFo7cjDWQvCaZR4oG8Oafw&s" alt="Juan Betancourt" />,
      bio: "Juan lidera el equipo técnico de ThermoLabs, encargándose de la definición de especificaciones y supervisión del desarrollo del OP-AMP y la arquitectura del sistema. Su enfoque se centra en la innovación y la precisión técnica.",
      achievements: [
        "Liderazgo en el desarrollo del OP-AMP personalizado",
        "Definición de especificaciones técnicas del proyecto",
        "Supervisión de la arquitectura del sistema de sensores",
        "Coordinación del equipo de desarrollo",
      ],
      linkedin: "#",
      email: "juan.betancourt@uninorte.edu.co",
    },
    {
      name: "Camila Rodríguez",
      position: "Communications Officer",
      specialization: "Comunicación y Gestión de Redes",
      experience: "Estudiante de Ingeniería",
      image: <img src="/images/team/camila.jpg" alt="Camila Rodríguez" />,
      bio: "Camila es responsable de la comunicación interna y externa de ThermoLabs, gestionando nuestras redes sociales y las presentaciones del proyecto. Su trabajo asegura que nuestras innovaciones lleguen efectivamente a nuestros clientes.",
      achievements: [
        "Gestión estratégica de redes sociales",
        "Coordinación de comunicación interna del equipo",
        "Desarrollo de presentaciones técnicas",
        "Relaciones públicas y comunicación externa",
      ],
      linkedin: "#",
      email: "camila.rodriguez@uninorte.edu.co",
    },
    {
      name: "David Serrano",
      position: "Resource & Facilities Manager",
      specialization: "Gestión de Recursos y Logística",
      experience: "Estudiante de Ingeniería",
      image: <img src="/images/team/david.jpg" alt="David Serrano" />,
      bio: "David administra los materiales, herramientas y recursos de laboratorio de ThermoLabs, además de coordinar toda la logística del proyecto. Su gestión eficiente permite que el equipo se enfoque en la innovación.",
      achievements: [
        "Administración eficiente de recursos de laboratorio",
        "Coordinación logística de proyectos",
        "Gestión de inventario de materiales y herramientas",
        "Optimización de procesos operativos",
      ],
      linkedin: "#",
      email: "david.serrano@uninorte.edu.co",
    },
    {
      name: "Marcela Mercado",
      position: "Archivist",
      specialization: "Documentación Técnica y Registros",
      experience: "Estudiante de Ingeniería",
      image: <img src="/images/team/marcela.jpg" alt="Marcela Mercado" />,
      bio: "Marcela se encarga de toda la documentación técnica, bitácoras y registros del proyecto ThermoLabs. Su trabajo meticuloso asegura que cada proceso esté debidamente documentado y sea reproducible.",
      achievements: [
        "Documentación técnica completa del proyecto",
        "Mantenimiento de bitácoras detalladas",
        "Gestión de registros y archivos técnicos",
        "Estandarización de procesos de documentación",
      ],
      linkedin: "#",
      email: "marcela.mercado@uninorte.edu.co",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestro <span className="text-orange-500">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a los expertos que hacen posible nuestras innovaciones. Un equipo multidisciplinario comprometido con
            la excelencia técnica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden card-hover cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded px-3 py-2">
                      <p className="text-white text-sm font-medium">Ver perfil completo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-3">{member.specialization}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{member.experience}</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors">
                      <Linkedin size={16} className="text-gray-600 hover:text-orange-500" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors">
                      <Mail size={16} className="text-gray-600 hover:text-orange-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                    onClick={() => setSelectedMember(null)}
                  >
                    <X size={16} />
                  </button>

                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div>
                      <img
                        src={selectedMember.image || "/placeholder.svg"}
                        alt={selectedMember.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                      <p className="text-orange-500 font-semibold mb-2">{selectedMember.position}</p>
                      <p className="text-gray-600 mb-4">{selectedMember.specialization}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Experiencia</h4>
                        <p className="text-gray-600">{selectedMember.experience}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Biografía</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Logros Destacados</h4>
                        <ul className="space-y-1">
                          {selectedMember.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={selectedMember.linkedin}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                        >
                          <Linkedin size={16} />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600"
                        >
                          <Mail size={16} />
                          <span className="text-sm">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Team
