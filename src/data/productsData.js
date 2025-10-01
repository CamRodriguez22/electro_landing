import { Thermometer, Droplets, Cpu, Settings } from "lucide-react"

export const productsData = [
  {
    id: "sensores-temperatura",
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
    route: "/productos/sensores-temperatura",
    currentWork: {
      title: "Desarrollo de Sensor DHT22 Mejorado",
      description:
        "Estamos trabajando en una versión optimizada del sensor DHT22 con mayor precisión y respuesta más rápida para el proyecto del salón A2C.",
      details: [
        "Integración con OP-AMP personalizado desarrollado en Electrónica III",
        "Calibración específica para ambientes académicos",
        "Interfaz de comunicación mejorada",
        "Pruebas de durabilidad en condiciones reales",
      ],
      images: ["/sensor-de-temperatura-dht22-en-protoboard.jpg", "/circuito-integrado-con-op-amp-para-sensor.jpg", "/pruebas-de-calibraci-n-de-sensor-de-temperatura.jpg"],
      videos: [
        {
          title: "Prueba de Precisión del Sensor",
          description: "Demostración de la precisión del sensor en diferentes rangos de temperatura",
        },
        {
          title: "Integración con Sistema de Monitoreo",
          description: "Funcionamiento del sensor integrado al sistema completo del salón A2C",
        },
      ],
    },
  },
  {
    id: "sensores-humedad",
    icon: Droplets,
    title: "Sensores de Humedad",
    description: "Medición precisa de humedad relativa para control ambiental óptimo.",
    features: ["Rango 30-90% HR", "Precisión ±5% HR", "Compensación de temperatura", "Protección IP67"],
    image: "/humidity-sensor-electronic-component.jpg",
    route: "/productos/sensores-humedad",
    currentWork: {
      title: "Sistema de Humedad con Compensación Térmica",
      description:
        "Desarrollo de un sistema integrado que combina medición de humedad con compensación automática de temperatura.",
      details: [
        "Algoritmo de compensación térmica avanzado",
        "Sensor SHT3x de alta precisión",
        "Interfaz digital I2C optimizada",
        "Validación en condiciones extremas",
      ],
      images: ["/sensor-de-humedad-sht3x-en-desarrollo.jpg", "/sistema-de-compensaci-n-t-rmica-para-humedad.jpg", "/pruebas-de-humedad-en-c-mara-clim-tica.jpg"],
      videos: [
        {
          title: "Compensación Térmica en Tiempo Real",
          description: "Demostración del algoritmo de compensación funcionando en diferentes condiciones",
        },
      ],
    },
  },
  {
    id: "sistemas-integrados",
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
    route: "/productos/sistemas-integrados",
    currentWork: {
      title: "Sistema IoT para Monitoreo del Salón A2C",
      description:
        "Desarrollo completo del sistema de monitoreo ambiental para el salón A2C con conectividad IoT y interfaz web.",
      details: [
        "Microcontrolador ESP32 con WiFi integrado",
        "Dashboard web en tiempo real",
        "Base de datos para histórico de mediciones",
        "Sistema de alertas por email y SMS",
        "API REST para integración con otros sistemas",
      ],
      images: ["/sistema-iot-con-esp32-y-sensores.jpg", "/dashboard-web-para-monitoreo-ambiental.jpg", "/instalaci-n-del-sistema-en-sal-n-a2c.jpg"],
      videos: [
        {
          title: "Demo del Dashboard en Tiempo Real",
          description: "Funcionamiento completo del sistema de monitoreo con visualización web",
        },
        {
          title: "Sistema de Alertas Automáticas",
          description: "Demostración del sistema de notificaciones cuando se superan los umbrales",
        },
      ],
    },
  },
  {
    id: "personalizacion",
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
    route: "/productos/personalizacion",
    currentWork: {
      title: "Metodología EPICS para Desarrollo Personalizado",
      description:
        "Implementación de la metodología EPICS (Engineering Projects in Community Service) para desarrollar soluciones personalizadas.",
      details: [
        "Análisis de requerimientos específicos del cliente",
        "Diseño colaborativo con retroalimentación continua",
        "Prototipado iterativo con validación en cada etapa",
        "Documentación técnica completa siguiendo estándares IEEE",
        "Transferencia de conocimiento y capacitación",
      ],
      images: ["/metodolog-a-epics-en-desarrollo-de-sensores.jpg", "/prototipado-r-pido-de-sensores-personalizados.jpg", "/documentaci-n-t-cnica-de-proyecto-personalizado.jpg"],
      videos: [
        {
          title: "Proceso de Desarrollo Colaborativo",
          description: "Cómo trabajamos con nuestros clientes desde la idea hasta la implementación",
        },
      ],
    },
  },
]
