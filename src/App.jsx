"use client";

import { motion } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./layouts/Layout";
import Hero from "./views/Hero";
import About from "./views/About";
import Services from "./views/Services";
import Team from "./views/Team";
import Calendar from "./views/Calendar";
import Contact from "./views/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TemperatureSensors from "./views/products/TemperatureSensors";
import HumiditySensors from "./views/products/HumiditySensors";
import IntegratedSystems from "./views/products/IntegratedSystems";
import Customization from "./views/products/Customization";

// 🔹 NUEVA SECCIÓN BITÁCORA, DEFINIDA AQUÍ MISMO
const BitacoraSection = () => {
  return (
    <section
      id="bitacora"
      className="w-full py-16 px-4 md:px-8 lg:px-16 bg-slate-950/40 border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Bitácora del proyecto en Notion
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
            Durante todo el semestre fuimos registrando reuniones, avances,
            problemas y decisiones de diseño en nuestra bitácora digital. Haz
            clic en la tarjeta para ver el proceso completo en Notion.
          </p>
        </div>

        <a
          href="https://www.notion.so/ThermoLabs-2557aa526074801b8168cccc9f0a4b61?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block"
        >
          <div className="relative flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/60 px-6 py-4 md:px-8 md:py-5 shadow-lg shadow-slate-900/50 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-emerald-400/70">
            <img
              src="/images/notion-bitacora.png"
              alt="Bitácora ThermoLabs en Notion"
              className="h-14 w-14 md:h-16 md:w-16 rounded-xl object-cover bg-white/5"
            />
            <div className="flex flex-col gap-1">
              <span className="text-base md:text-lg font-semibold text-white">
                Ver bitácora en Notion
              </span>
              <span className="text-xs md:text-sm text-slate-300">
                Resúmenes de reuniones, decisiones de diseño, problemas,
                soluciones y reflexiones del equipo ThermoLabs.
              </span>
              <span className="text-xs text-emerald-400 mt-1">
                🔗 Se abre en una nueva pestaña
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <About />
                  <Services />
                  <Team />
                  <Calendar />
                  {/* Aquí usamos la nueva sección */}
                  <BitacoraSection />
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/productos/sensores-temperatura"
              element={<TemperatureSensors />}
            />
            <Route
              path="/productos/sensores-humedad"
              element={<HumiditySensors />}
            />
            <Route
              path="/productos/sistemas-integrados"
              element={<IntegratedSystems />}
            />
            <Route
              path="/productos/personalizacion"
              element={<Customization />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
