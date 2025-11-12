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
      description: 'Ofrecemos servicios de mantenimiento preventivo y correctivo de equipos de cómputo. Revisamos, limpiamos y reparamos tu infraestructura tecnológica para mantenerla en óptimas condiciones, evitando fallos inesperados y prolongando la vida útil de tus dispositivos.',
      color: 'red',
    },
    {
      id: 2,
      icon: '💻',
      title: 'Desarrollo de Software',
      description: 'Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades de tu negocio. Desde aplicaciones web hasta sistemas empresariales, nuestro equipo crea software robusto, escalable e innovador que impulsa la productividad y competitividad de tu organización.',
      color: 'green',
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Gestión de Redes',
      description: 'Gestionamos redes empresariales seguras, confiables y eficientes. Implementamos infraestructuras de red modernas, monitoreamos conectividad en tiempo real y proporcionamos soporte técnico especializado para garantizar que tu negocio esté siempre conectado sin interrupciones.',
      color: 'blue',
    },
    {
      id: 4,
      icon: '🤖',
      title: 'Automatización con IA',
      description: 'Realizamos automatización inteligente de servicios de WhatsApp utilizando tecnología de inteligencia artificial. Optimizamos la atención al cliente con chatbots automáticos, respuestas instantáneas y gestión eficiente de conversaciones para mejorar la experiencia de tus clientes 24/7.',
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
                <div className="flex gap-3 mt-6 justify-center">
                  <a
                    href="#contacto"
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-full transition flex items-center justify-center"
                    title="Más Información"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition flex items-center justify-center"
                    title="Enviar Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <rect width="24" height="24" rx="4" fill="white"/>
                      <path d="M12 12.5L2 7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10 5.5z" fill="#EA4335"/>
                      <path d="M22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v.5l10 5.5 10-5.5V5z" fill="#EA4335"/>
                    </svg>
                  </a>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.94 1.159-.173.193-.347.217-.644.051-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.365-2.906 1.009l-.193.12-1.974.523.531-1.932.11-.175A4.908 4.908 0 0 1 6.5 7.5c0-2.7 2.201-4.9 4.9-4.9 1.309 0 2.54.51 3.465 1.435.925.925 1.435 2.156 1.435 3.465 0 2.699-2.201 4.9-4.9 4.9m8.596-9.038C13.608 1.255 10.904 0 7.999 0 3.645 0 .036 3.609.036 7.999c0 1.409.331 2.779.961 4.018L0 24l12.309-4.064c1.199.657 2.571 1.003 3.99 1.003 4.354 0 7.963-3.609 7.963-7.999 0-2.134-.848-4.137-2.387-5.645z"/>
                    </svg>
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
