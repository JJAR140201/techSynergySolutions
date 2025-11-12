import { useState, useRef, useEffect } from 'react'import { useState, useRef, useEffect } from 'react'

import { MessageCircle, X, Send, Phone, Mail, MessageSquare } from 'lucide-react'import { MessageCircle, X, Send } from 'lucide-react'

import { CONTACT_INFO } from '../config/contact'

export function ChatBot() {

export function ChatBot() {  const [isOpen, setIsOpen] = useState(false)

  const [isOpen, setIsOpen] = useState(false)  const [messages, setMessages] = useState([

  const [messages, setMessages] = useState([    {

    {      id: 1,

      id: 1,      type: 'bot',

      type: 'bot',      text: '👋 ¡Hola! Bienvenido a Tech Synergy Solutions. ¿En qué servicio estás interesado?'

      text: '👋 ¡Hola! Soy tu asistente de Tech Synergy Solutions. ¿Cómo puedo ayudarte hoy?'    }

    }  ])

  ])  const [inputValue, setInputValue] = useState('')

  const [inputValue, setInputValue] = useState('')  const messagesEndRef = useRef(null)

  const [selectedService, setSelectedService] = useState(null)

  const [showServiceDetails, setShowServiceDetails] = useState(false)  const services = [

  const messagesEndRef = useRef(null)    { id: 'mantenimiento', name: '🔧 Mantenimiento de Equipos', emoji: '🔧' },

    { id: 'desarrollo', name: '💻 Desarrollo de Software', emoji: '💻' },

  const services = [    { id: 'redes', name: '🌐 Gestión de Redes', emoji: '🌐' },

    { id: 'mantenimiento', name: '🔧 Mantenimiento', desc: 'Preventivo y Correctivo' },    { id: 'ia', name: '🤖 Automatización con IA', emoji: '🤖' }

    { id: 'desarrollo', name: '💻 Desarrollo', desc: 'Software a Medida' },  ]

    { id: 'redes', name: '🌐 Redes', desc: 'Gestión Empresarial' },

    { id: 'ia', name: '🤖 IA', desc: 'Automatización' }  const serviceDescriptions = {

  ]    mantenimiento: 'Ofrecemos mantenimiento preventivo y correctivo de equipos de cómputo. ¿Te gustaría más información o prefieres contactarnos directamente?',

    desarrollo: 'Desarrollamos software a medida que impulsa la productividad de tu empresa. ¿Tienes un proyecto en mente?',

  const serviceDescriptions = {    redes: 'Gestionamos redes empresariales seguras y eficientes. ¿Necesitas consultoría en redes?',

    mantenimiento: {    ia: 'Automatizamos servicios de WhatsApp con IA para optimizar la atención al cliente. ¿Quieres automatizar tu negocio?'

      intro: '🔧 Mantenimiento de Equipos',  }

      details: [

        '✓ Mantenimiento preventivo de PCs y servidores',  const scrollToBottom = () => {

        '✓ Reparación de hardware y software',    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })

        '✓ Recuperación de datos',  }

        '✓ Antivirus y protección'

      ]  useEffect(() => {

    },    scrollToBottom()

    desarrollo: {  }, [messages])

      intro: '💻 Desarrollo de Software',

      details: [  const handleServiceClick = (serviceId, serviceName) => {

        '✓ Aplicaciones web personalizadas',    const userMessage = {

        '✓ Interfaces modernas y responsivas',      id: Date.now(),

        '✓ Soluciones backend robustas',      type: 'user',

        '✓ Integración con la nube'      text: serviceName

      ]    }

    },    setMessages(prev => [...prev, userMessage])

    redes: {

      intro: '🌐 Gestión de Redes',    setTimeout(() => {

      details: [      const botMessage = {

        '✓ Configuración y administración de redes',        id: Date.now() + 1,

        '✓ Seguridad y firewalls',        type: 'bot',

        '✓ Monitoreo 24/7',        text: serviceDescriptions[serviceId] || 'Excelente opción. ¿Te gustaría contactar con nuestro equipo?'

        '✓ Backup y recuperación'      }

      ]      setMessages(prev => [...prev, botMessage])

    },    }, 500)

    ia: {  }

      intro: '🤖 Automatización con IA',

      details: [  const handleSendMessage = () => {

        '✓ Chatbots inteligentes',    if (inputValue.trim()) {

        '✓ Automatización de WhatsApp',      const userMessage = {

        '✓ Procesos RPA',        id: Date.now(),

        '✓ Análisis predictivo'        type: 'user',

      ]        text: inputValue

    }      }

  }      setMessages(prev => [...prev, userMessage])

      setInputValue('')

  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })      setTimeout(() => {

  }        const botMessage = {

          id: Date.now() + 1,

  useEffect(() => {          type: 'bot',

    scrollToBottom()          text: 'Gracias por tu mensaje. 📝 Nos pondremos en contacto pronto. ¿Hay algo más en lo que podamos ayudarte?'

  }, [messages])        }

        setMessages(prev => [...prev, botMessage])

  const addMessage = (text, type = 'bot', delay = 500) => {      }, 500)

    setTimeout(() => {    }

      setMessages(prev => [...prev, {  }

        id: Date.now(),

        type: type,  return (

        text: text    <>

      }])      {/* Chat Button Flotante */}

    }, delay)      <button

  }        onClick={() => setIsOpen(!isOpen)}

        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40 ${

  const handleServiceClick = (serviceId) => {          isOpen

    const userMessage = services.find(s => s.id === serviceId)            ? 'bg-red-600 hover:bg-red-700'

                : 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-xl'

    // Agregar mensaje del usuario        }`}

    setMessages(prev => [...prev, {        title="Abrir chat"

      id: Date.now(),      >

      type: 'user',        {isOpen ? (

      text: userMessage.name          <X size={24} className="text-white" />

    }])        ) : (

          <MessageCircle size={24} className="text-white" />

    setSelectedService(serviceId)        )}

    setShowServiceDetails(true)      </button>



    // Bot responde con detalles      {/* Chat Window */}

    const description = serviceDescriptions[serviceId]      {isOpen && (

            <div className="fixed bottom-24 right-6 w-96 max-w-full h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 border-t-4 border-orange-500">

    setTimeout(() => {          {/* Header */}

      setMessages(prev => [...prev, {          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-t-lg">

        id: Date.now(),            <h3 className="font-bold text-lg">Tech Synergy Chat</h3>

        type: 'bot',            <p className="text-sm opacity-90">Pregunta por nuestros servicios</p>

        text: description.intro          </div>

      }])

                {/* Messages */}

      // Agregar cada detalle con pequeño delay          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">

      description.details.forEach((detail, idx) => {            {messages.map(message => (

        setTimeout(() => {              <div

          setMessages(prev => [...prev, {                key={message.id}

            id: Date.now() + idx,                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}

            type: 'bot',              >

            text: detail                <div

          }])                  className={`max-w-xs px-4 py-2 rounded-lg ${

        }, (idx + 1) * 300)                    message.type === 'user'

      })                      ? 'bg-orange-500 text-white rounded-br-none'

                      : 'bg-gray-200 text-gray-900 rounded-bl-none'

      // Pregunta final                  }`}

      setTimeout(() => {                >

        setMessages(prev => [...prev, {                  {message.text}

          id: Date.now() + 100,                </div>

          type: 'bot',              </div>

          text: '¿Te interesa más información? Puedo conectarte con nuestro equipo.'            ))}

        }])            <div ref={messagesEndRef} />

      }, (description.details.length + 1) * 300)          </div>

    }, 500)

  }          {/* Quick Services */}

          {messages.length === 1 && (

  const handleSendMessage = () => {            <div className="px-4 py-2 border-t bg-white">

    if (inputValue.trim()) {              <p className="text-xs text-gray-600 mb-2 font-semibold">Servicios disponibles:</p>

      const userMsg = inputValue.trim()              <div className="grid grid-cols-2 gap-2">

                      {services.map(service => (

      setMessages(prev => [...prev, {                  <button

        id: Date.now(),                    key={service.id}

        type: 'user',                    onClick={() => handleServiceClick(service.id, service.name)}

        text: userMsg                    className="text-xs bg-gradient-to-r from-orange-400 to-red-500 text-white p-2 rounded hover:shadow-lg transition"

      }])                  >

                          {service.name}

      setInputValue('')                  </button>

                ))}

      // Respuestas inteligentes basadas en palabras clave              </div>

      let botResponse = ''            </div>

      const msgLower = userMsg.toLowerCase()          )}



      if (msgLower.includes('precio') || msgLower.includes('costo') || msgLower.includes('valor')) {          {/* Input */}

        botResponse = '📊 Los precios varían según el proyecto. Te invito a contactar directamente a nuestro equipo para una cotización personalizada.'          <div className="p-4 border-t bg-white rounded-b-lg flex gap-2">

      } else if (msgLower.includes('contacto') || msgLower.includes('teléfono') || msgLower.includes('email')) {            <input

        botResponse = '📞 Claro, aquí están nuestras formas de contacto:\n📧 Email: avilesroajuanjose@gmail.com\n💬 WhatsApp: +1-234-567-8900'              type="text"

      } else if (msgLower.includes('horario') || msgLower.includes('disponible')) {              value={inputValue}

        botResponse = '⏰ Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM. También puedes dejar un mensaje y nos contactaremos pronto.'              onChange={e => setInputValue(e.target.value)}

      } else if (msgLower.includes('gracias') || msgLower.includes('gracias')) {              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}

        botResponse = '¡De nada! 😊 Si tienes más preguntas, estoy aquí para ayudarte. ¿Hay algo más que quieras saber?'              placeholder="Escribe tu mensaje..."

      } else if (msgLower.includes('hola') || msgLower.includes('hi')) {              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"

        botResponse = '¡Hola! 👋 Espero poder ayudarte. ¿Cuál de nuestros servicios te interesa?'            />

      } else {            <button

        botResponse = '💡 Entendido. Si tienes más preguntas sobre nuestros servicios o necesitas hablar con alguien del equipo, estoy aquí. ¿Hay algo específico que quieras consultar?'              onClick={handleSendMessage}

      }              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition"

            >

      addMessage(botResponse, 'bot', 700)              <Send size={20} />

    }            </button>

  }          </div>

        </div>

  const handleContactClick = (type) => {      )}

    let url = ''    </>

    let message = ''  )

}

    if (type === 'email') {

      message = 'Redirecting al email...'export default ChatBot

      url = `mailto:${CONTACT_INFO.email}`
    } else if (type === 'whatsapp') {
      message = 'Abriendo WhatsApp...'
      url = CONTACT_INFO.whatsapp
    } else if (type === 'phone') {
      message = 'Abriendo llamada...'
      url = `tel:${CONTACT_INFO.phone || '+1-234-567-8900'}`
    }

    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'bot',
      text: message
    }])

    setTimeout(() => {
      window.open(url, '_blank')
    }, 500)
  }

  return (
    <>
      {/* Chat Button Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40 ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-xl'
        }`}
        title="Chat"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-full h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-40 border-t-4 border-orange-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">🤖 Tech Synergy Chat</h3>
            <p className="text-sm opacity-90">Asistente Virtual - Respuestas Inmediatas</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-br-none shadow-md'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Services (solo al inicio) */}
          {messages.length <= 2 && !selectedService && (
            <div className="px-4 py-3 border-t bg-white">
              <p className="text-xs text-gray-600 mb-2 font-bold">👇 Selecciona un servicio:</p>
              <div className="grid grid-cols-2 gap-2">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="text-xs bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white p-2 rounded transition transform hover:scale-105 font-semibold"
                  >
                    <div>{service.name}</div>
                    <div className="text-xs opacity-90">{service.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Options */}
          {selectedService && (
            <div className="px-4 py-2 border-t bg-gradient-to-r from-orange-50 to-red-50">
              <p className="text-xs text-gray-700 mb-2 font-bold">📞 O contacta directamente:</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition"
                >
                  <Mail size={14} /> Email
                </button>
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs transition"
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
              placeholder="Escribe aquí..."
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

export default ChatBot
