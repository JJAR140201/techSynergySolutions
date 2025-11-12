import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTACT_INFO } from '../config/contact'

export function ServicesCarousel({ isDark }) {
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      skipSnaps: false,
    },
    [autoplayPlugin]
  )

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      autoplayPlugin.reset()
    }
  }
  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
      autoplayPlugin.reset()
    }
  }

  const services = [
    {
      id: 1,
      icon: '🔧',
      title: 'Mantenimiento de Equipos',
      description: 'Ofrecemos servicios de mantenimiento preventivo y correctivo de equipos de cómputo. Mantén tu infraestructura en óptimas condiciones.',
      color: 'red',
    },
    {
      id: 2,
      icon: '💻',
      title: 'Desarrollo de Software',
      description: 'Desarrollamos software a medida que impulsa la productividad y la innovación en tu organización.',
      color: 'green',
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Gestión de Redes',
      description: 'Gestionamos redes empresariales seguras y eficientes. Conectividad confiable para tu negocio.',
      color: 'blue',
    },
    {
      id: 4,
      icon: '🤖',
      title: 'Automatización con IA',
      description: 'Realizamos automatización de servicios de WhatsApp utilizando inteligencia artificial, para optimizar la atención al cliente.',
      color: 'orange',
    },
  ]

  const colorMap = {
    red: 'border-red-600 shadow-red-500/30 hover:shadow-red-500/50 text-red-400',
    green: 'border-green-600 shadow-green-500/30 hover:shadow-green-500/50 text-green-400',
    blue: 'border-blue-600 shadow-blue-500/30 hover:shadow-blue-500/50 text-blue-400',
    orange: 'border-orange-500 shadow-orange-500/30 hover:shadow-orange-500/50 text-orange-400',
  }

  return (
    <div className="w-full">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_100%]`}
            >
              <div
                className={`h-full p-10 rounded-xl border-l-8 transition-all duration-300 flex flex-col justify-between ${isDark ? `bg-gray-700 shadow-2xl hover:shadow-2xl ${colorMap[service.color]}` : `bg-white shadow-2xl hover:shadow-2xl hover:shadow-${service.color}-300/50`}`}
              >
                <div>
                  <div className="text-6xl mb-5">{service.icon}</div>
                  <h4 className={`text-2xl font-bold mb-5 ${isDark ? colorMap[service.color] : `text-${service.color}-700`}`}>
                    {service.title}
                  </h4>
                  <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="#contacto"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-5 rounded-lg transition text-center text-base"
                  >
                    📖 Más Info
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-lg transition text-center text-base"
                  >
                    📧 Email
                  </a>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-lg transition text-center text-base"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={scrollPrev}
          className={`p-4 rounded-full transition transform hover:scale-110 ${isDark ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={scrollNext}
          className={`p-4 rounded-full transition transform hover:scale-110 ${isDark ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}
