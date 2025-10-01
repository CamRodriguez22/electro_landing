"use client"

import { motion } from "framer-motion"
import { ThemeProvider } from "./contexts/ThemeContext"
import Layout from "./layouts/Layout"
import Hero from "./views/Hero"
import About from "./views/About"
import Services from "./views/Services"
import Team from "./views/Team"
import Calendar from "./views/Calendar"
import Contact from "./views/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TemperatureSensors from "./views/products/TemperatureSensors"
import HumiditySensors from "./views/products/HumiditySensors"
import IntegratedSystems from "./views/products/IntegratedSystems"
import Customization from "./views/products/Customization"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Hero />
                  <About />
                  <Services />
                  <Team />
                  <Calendar />
                  <Contact />
                </motion.div>
              }
            />
            <Route path="/productos/sensores-temperatura" element={<TemperatureSensors />} />
            <Route path="/productos/sensores-humedad" element={<HumiditySensors />} />
            <Route path="/productos/sistemas-integrados" element={<IntegratedSystems />} />
            <Route path="/productos/personalizacion" element={<Customization />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
