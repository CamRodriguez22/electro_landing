"use client"
import { motion } from "framer-motion"
import { useInView } from "../utils/useInView"
import { Award, Users, Target, Lightbulb } from "lucide-react"

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const features = [
    {
      icon: Award,
      title: "Excelencia Técnica",
      description: "Más de 15 años desarrollando soluciones de precisión en el campo de la ingeniería electrónica.",
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Ingenieros altamente calificados con experiencia en proyectos industriales y comerciales.",
    },
    {
      icon: Target,
      title: "Precisión Garantizada",
      description: "Nuestros sensores ofrecen una precisión del 99.9% en mediciones de temperatura y humedad.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Investigación y desarrollo continuo para mantenernos a la vanguardia tecnológica.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="text-orange-500">{"ThermoLabs"}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa líder en ingeniería electrónica, especializada en el desarrollo de sensores de alta
            precisión para temperatura y humedad. Nuestra misión es proporcionar soluciones tecnológicas innovadoras que
            impulsen el crecimiento de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {"ThermoLabs nació de un desafío real.\n Un cliente nos planteó una necesidad muy específica: medir y controlar la temperatura y la humedad de su salón, un espacio que albergaba componentes electrónicos delicados y proyectos con dispositivos expuestos. \n\nEl objetivo era claro: proteger su equipamiento y garantizar condiciones óptimas para el desarrollo de sus ideas.\nCuatro compañeros de clase, apasionados por la electrónica y el diseño de soluciones inteligentes, decidimos aceptar el reto. Durante todo un semestre, trabajamos de forma constante en la investigación, el diseño y la implementación de un sistema capaz de ofrecer mediciones precisas y control eficiente del ambiente.\nEse primer proyecto no solo resolvió la problemática de nuestro cliente, sino que también nos inspiró a dar un paso más: convertir nuestra colaboración académica en una empresa real dedicada a ofrecer soluciones tecnológicas confiables.\n"}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {"Hoy, ThermoLabs combina conocimiento técnico, innovación y compromiso para desarrollar sistemas de monitoreo y control térmico que se adapten a las necesidades de cada cliente, siempre con la misma pasión y dedicación que nos impulsó desde el inicio."}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500 mb-2">1+</div>
                <div className="text-sm text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500 mb-2">{"1+"}</div>
                <div className="text-sm text-gray-600">Países Atendidos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src="/modern-electronics-laboratory-with-sensors.jpg"
                alt="Laboratorio SensorTech"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-orange-500" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
