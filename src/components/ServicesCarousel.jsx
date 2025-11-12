import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTACT_INFO } from '../config/contact'

export function ServicesCarousel({ isDark }) {
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
    },
    [autoplayPlugin]
  )
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

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

  const onSelect = () => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

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
        <div className="flex gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]`}
            >
              <div
                className={`h-full p-8 rounded-lg border-l-4 transition-all duration-300 ${isDark ? `bg-gray-700 shadow-lg hover:shadow-2xl ${colorMap[service.color]}` : `bg-white shadow-lg hover:shadow-2xl hover:shadow-${service.color}-300/50`}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? colorMap[service.color] : `text-${service.color}-700`}`}>
                  {service.title}
                </h4>
                <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href="#contacto"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition text-center text-sm"
                  >
                    📖 Info
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-center text-sm"
                  >
                    📧 Email
                  </a>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-center text-sm"
                  >
                    💬 WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={`p-3 rounded-full transition ${prevBtnDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : `${isDark ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}`}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={`p-3 rounded-full transition ${nextBtnDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : `${isDark ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}`}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}
