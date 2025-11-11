import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '👋 ¡Hola! Bienvenido a Tech Synergy Solutions. ¿En qué servicio estás interesado?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const services = [
    { id: 'mantenimiento', name: '🔧 Mantenimiento de Equipos', emoji: '🔧' },
    { id: 'desarrollo', name: '💻 Desarrollo de Software', emoji: '💻' },
    { id: 'redes', name: '🌐 Gestión de Redes', emoji: '🌐' },
    { id: 'ia', name: '🤖 Automatización con IA', emoji: '🤖' }
  ]

  const serviceDescriptions = {
    mantenimiento: 'Ofrecemos mantenimiento preventivo y correctivo de equipos de cómputo. ¿Te gustaría más información o prefieres contactarnos directamente?',
    desarrollo: 'Desarrollamos software a medida que impulsa la productividad de tu empresa. ¿Tienes un proyecto en mente?',
    redes: 'Gestionamos redes empresariales seguras y eficientes. ¿Necesitas consultoría en redes?',
    ia: 'Automatizamos servicios de WhatsApp con IA para optimizar la atención al cliente. ¿Quieres automatizar tu negocio?'
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleServiceClick = (serviceId, serviceName) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: serviceName
    }
    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: serviceDescriptions[serviceId] || 'Excelente opción. ¿Te gustaría contactar con nuestro equipo?'
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: inputValue
      }
      setMessages(prev => [...prev, userMessage])
      setInputValue('')

      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: 'Gracias por tu mensaje. 📝 Nos pondremos en contacto pronto. ¿Hay algo más en lo que podamos ayudarte?'
        }
        setMessages(prev => [...prev, botMessage])
      }, 500)
    }
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
        title="Abrir chat"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-full h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 border-t-4 border-orange-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Tech Synergy Chat</h3>
            <p className="text-sm opacity-90">Pregunta por nuestros servicios</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-orange-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Services */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t bg-white">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Servicios disponibles:</p>
              <div className="grid grid-cols-2 gap-2">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id, service.name)}
                    className="text-xs bg-gradient-to-r from-orange-400 to-red-500 text-white p-2 rounded hover:shadow-lg transition"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
