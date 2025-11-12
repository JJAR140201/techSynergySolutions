import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Mail, MessageSquare, Home } from 'lucide-react'
import { CONTACT_INFO } from '../config/contact'

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '👋 ¡Hola! Soy tu asistente de Tech Synergy Solutions. ¿Cómo puedo ayudarte hoy?',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [selectedService, setSelectedService] = useState(null)
  const messagesEndRef = useRef(null)

  const services = [
    { id: 'mantenimiento', name: '🔧 Mantenimiento', desc: 'Preventivo y Correctivo' },
    { id: 'desarrollo', name: '💻 Desarrollo', desc: 'Software a Medida' },
    { id: 'redes', name: '🌐 Redes', desc: 'Gestión Empresarial' },
    { id: 'ia', name: '🤖 IA', desc: 'Automatización con IA' },
  ]

  const serviceDescriptions = {
    mantenimiento: {
      intro: '🔧 Ofrecemos mantenimiento preventivo y correctivo de equipos de cómputo.',
      details: [
        '✓ Mantenimiento preventivo de PCs y servidores',
        '✓ Reparación de hardware y software',
        '✓ Recuperación de datos',
        '✓ Antivirus y protección',
      ],
    },
    desarrollo: {
      intro: '💻 Desarrollamos software a medida que impulsa tu productividad.',
      details: [
        '✓ Aplicaciones web personalizadas',
        '✓ Interfaces modernas y responsivas',
        '✓ Soluciones backend robustas',
        '✓ Integración con la nube',
      ],
    },
    redes: {
      intro: '🌐 Gestionamos redes empresariales seguras y eficientes.',
      details: [
        '✓ Configuración y administración de redes',
        '✓ Seguridad y firewalls',
        '✓ Monitoreo 24/7',
        '✓ Backup y recuperación',
      ],
    },
    ia: {
      intro: '🤖 Automatizamos servicios y procesos usando Inteligencia Artificial.',
      details: [
        '✓ Chatbots inteligentes',
        '✓ Automatización de WhatsApp',
        '✓ Procesos RPA',
        '✓ Análisis predictivo',
      ],
    },
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleServiceClick = (serviceId) => {
    const selected = services.find((s) => s.id === serviceId)
    const description = serviceDescriptions[serviceId]
    setSelectedService(serviceId)

    // Mensaje del usuario
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'user', text: selected.name },
    ])

    // Mensaje del bot: descripción inicial
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: 'bot', text: description.intro },
      ])
      // Detalles del servicio
      description.details.forEach((detail, idx) => {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + idx, type: 'bot', text: detail },
          ])
        }, (idx + 1) * 300)
      })
    }, 500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMsg = inputValue.trim()
    const msgLower = userMsg.toLowerCase()

    // Comando para volver al menú
    if (msgLower === 'menu' || msgLower === 'inicio' || msgLower === 'volver' || msgLower === '/menu') {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: 'user', text: userMsg },
      ])
      setInputValue('')
      setSelectedService(null)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), type: 'bot', text: '👈 Volvimos al menú principal. ¿Cuál es tu próxima consulta?' },
        ])
      }, 500)
      return
    }

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'user', text: userMsg },
    ])
    setInputValue('')

    let botResponse = '💡 Entendido. ¿Podrías darme más detalles?'

    if (msgLower.includes('precio') || msgLower.includes('costo')) {
      botResponse = '📊 Los precios varían según el proyecto. Te recomiendo contactar a nuestro equipo para una cotización personalizada.'
    } else if (msgLower.includes('contacto') || msgLower.includes('teléfono')) {
      botResponse = `📞 Puedes contactarnos en:\n📧 ${CONTACT_INFO.email}\n💬 ${CONTACT_INFO.whatsapp}`
    } else if (msgLower.includes('horario') || msgLower.includes('disponible')) {
      botResponse = '⏰ Nuestro horario es de lunes a viernes, de 9:00 AM a 6:00 PM.'
    } else if (msgLower.includes('gracias')) {
      botResponse = '😊 ¡De nada! ¿Hay algo más en lo que pueda ayudarte?'
    } else if (msgLower.includes('hola') || msgLower.includes('hi')) {
      botResponse = '👋 ¡Hola! ¿En qué servicio estás interesado hoy?'
    } else if (msgLower.includes('ayuda') || msgLower.includes('help') || msgLower.includes('comandos')) {
      botResponse = '📋 Comandos disponibles:\n• "menu" / "inicio" / "volver" - Ir al menú\n• "precio" - Consultar precios\n• "contacto" - Información de contacto'
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: 'bot', text: botResponse },
      ])
    }, 600)
  }

  const handleContactClick = (type) => {
    let url = ''
    let message = ''

    if (type === 'email') {
      message = '📧 Abriendo correo electrónico...'
      url = `mailto:${CONTACT_INFO.email}`
    } else if (type === 'whatsapp') {
      message = '💬 Abriendo WhatsApp...'
      url = CONTACT_INFO.whatsapp
    }

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'bot', text: message },
    ])

    setTimeout(() => window.open(url, '_blank'), 500)
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40 ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-xl'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-full h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-40 border-t-4 border-orange-500">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">🤖 Tech Synergy Chat</h3>
            <p className="text-sm opacity-90">Asistente Virtual</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                    m.type === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-br-none shadow-md'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Servicios rápidos */}
          {messages.length <= 2 && !selectedService && (
            <div className="px-4 py-3 border-t bg-white max-h-72 overflow-y-auto">
              <p className="text-xs text-gray-600 mb-2 font-bold">👇 Nuestros Servicios:</p>
              <div className="space-y-2">
                {services.map(service => (
                  <div key={service.id} className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-800">{service.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{service.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleServiceClick(service.id)}
                        className="flex-1 text-xs bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white p-1.5 rounded transition font-semibold"
                      >
                        📖 Info
                      </button>
                      <button
                        onClick={() => handleContactClick('whatsapp')}
                        className="text-xs bg-green-500 hover:bg-green-600 text-white p-1.5 rounded transition font-semibold"
                      >
                        💬
                      </button>
                      <button
                        onClick={() => handleContactClick('email')}
                        className="text-xs bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded transition font-semibold"
                      >
                        📧
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contactos */}
          {selectedService && (
            <div className="px-4 py-3 border-t bg-gradient-to-r from-orange-50 to-red-50 space-y-2">
              <div className="flex gap-2 justify-between items-center">
                <p className="text-xs text-gray-700 font-bold">¿Te interesa este servicio?</p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition"
                  title="Volver al menú principal"
                >
                  <Home size={14} /> Menú
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded text-xs transition font-semibold"
                >
                  <Mail size={14} /> Email
                </button>
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded text-xs transition font-semibold"
                >
                  <MessageSquare size={14} /> WhatsApp
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t bg-white rounded-b-lg flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe 'menu' para volver..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white p-2 rounded-lg transition transform hover:scale-105"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
