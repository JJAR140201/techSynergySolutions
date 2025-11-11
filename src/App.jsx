import { useState } from 'react'
import './App.css'
import { Logo } from './components/Logo.jsx'
import { ThemeToggle } from './components/ThemeToggle.jsx'
import { ChatBot } from './components/ChatBot.jsx'
import { CONTACT_INFO } from './config/contact.js'

function App() {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900'}`}>
        <header className={`sticky top-0 z-50 border-b-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 shadow-lg border-orange-500' : 'bg-white shadow-md border-orange-400'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10"><Logo /></div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">Tech Synergy</h1>
                <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>SOLUTIONS</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#servicios" className={`transition font-medium ${isDark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>Servicios</a>
                <a href="#compromiso" className={`transition font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Compromiso</a>
                <a href="#contacto" className={`transition font-medium ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}>Contacto</a>
              </nav>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6"><span className="inline-block">👋 ¡Hola!</span></h2>
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Somos <span className="font-bold bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">Tech Synergy Solutions</span>, expertos en brindar soluciones tecnológicas integrales adaptadas a las necesidades de tu negocio.
            </p>
          </div>
        </section>

        <section id="servicios" className={`transition-colors duration-300 py-20 md:py-32 ${isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-gradient-to-br from-gray-100 to-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestros Servicios</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className={`p-8 rounded-lg border-l-4 border-red-600 transition-all duration-300 ${isDark ? 'bg-gray-700 shadow-lg hover:shadow-2xl hover:shadow-red-500/30' : 'bg-white shadow-lg hover:shadow-2xl hover:shadow-red-300/50'}`}>
                <div className="text-4xl mb-4">🔧</div>
                <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-red-400' : 'text-red-700'}`}>Mantenimiento de Equipos</h4>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ofrecemos servicios de mantenimiento preventivo y correctivo de equipos de cómputo. Mantén tu infraestructura en óptimas condiciones.</p>
              </div>
              <div className={`p-8 rounded-lg border-l-4 border-green-600 transition-all duration-300 ${isDark ? 'bg-gray-700 shadow-lg hover:shadow-2xl hover:shadow-green-500/30' : 'bg-white shadow-lg hover:shadow-2xl hover:shadow-green-300/50'}`}>
                <div className="text-4xl mb-4">💻</div>
                <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-green-400' : 'text-green-700'}`}>Desarrollo de Software</h4>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Desarrollamos software a medida que impulsa la productividad y la innovación en tu organización.</p>
              </div>
              <div className={`p-8 rounded-lg border-l-4 border-blue-600 transition-all duration-300 ${isDark ? 'bg-gray-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30' : 'bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-300/50'}`}>
                <div className="text-4xl mb-4">🌐</div>
                <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Gestión de Redes</h4>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Gestionamos redes empresariales seguras y eficientes. Conectividad confiable para tu negocio.</p>
              </div>
              <div className={`p-8 rounded-lg border-l-4 border-orange-500 transition-all duration-300 ${isDark ? 'bg-gray-700 shadow-lg hover:shadow-2xl hover:shadow-orange-500/30' : 'bg-white shadow-lg hover:shadow-2xl hover:shadow-orange-300/50'}`}>
                <div className="text-4xl mb-4">🤖</div>
                <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Automatización con IA</h4>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Realizamos automatización de servicios de WhatsApp utilizando inteligencia artificial, para optimizar la atención al cliente.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="compromiso" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className={`p-12 rounded-xl shadow-2xl transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800'}`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Nuestro Compromiso</h3>
            <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${isDark ? 'text-gray-200' : 'text-blue-100'}`}>
              Nuestro compromiso es ayudarte a potenciar la tecnología de tu empresa con <span className="font-bold text-white">soluciones confiables, modernas y escalables.</span>
            </p>
          </div>
        </section>

        <footer id="contacto" className={`py-12 border-t-4 transition-colors duration-300 ${isDark ? 'bg-gray-900 border-orange-500' : 'bg-gray-900 border-orange-400'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10"><Logo /></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">Tech Synergy Solutions</h2>
              </div>
              <p className="text-gray-300 text-lg font-semibold mb-6">Conectamos tecnología con eficiencia e innovación.</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105">
                  Gmail
                </a>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105">
                  WhatsApp
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2025 Tech Synergy Solutions. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
      <ChatBot />
    </div>
  )
}

export default App