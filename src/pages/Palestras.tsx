import React from 'react';
import { ArrowLeft, CheckCircle, Mic, Users, Video, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Palestras = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
              alt="Sellou" 
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <Link to="/#inicio" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Início</Link>
            <Link to="/#servicos" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Serviços</Link>
            <Link to="/#sobre" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Sobre</Link>
            <Link to="/#equipe" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Equipe</Link>
            <Link to="/#contato" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Contato</Link>
          </nav>
          <div>
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-[#008440] hover:text-[#35DD48] mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para página inicial
            </Link>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#35DD48]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Palestras
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Eventos inspiradores e educativos sobre vendas, liderança e crescimento empresarial para motivar sua equipe.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Palestra
            </a>
          </div>
        </div>
      </section>

      {/* Temas das Palestras */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Temas das Palestras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Palestras motivacionais para equipes</h3>
                  <p className="text-gray-600">Conteúdo inspirador para energizar equipes e aumentar a motivação no ambiente de trabalho.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Workshops práticos de vendas</h3>
                  <p className="text-gray-600">Sessões interativas com técnicas práticas que podem ser aplicadas imediatamente.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eventos corporativos personalizados</h3>
                  <p className="text-gray-600">Palestras customizadas para atender às necessidades específicas da sua empresa.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Conteúdo sobre liderança e gestão</h3>
                  <p className="text-gray-600">Desenvolvimento de líderes e gestores para maximizar performance das equipes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Formatos presenciais e online</h3>
                  <p className="text-gray-600">Flexibilidade total com opções presenciais, online ou híbridas conforme sua necessidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Tipos de Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Keynotes</h3>
                <p className="text-gray-600">Palestras principais para grandes eventos, convenções e conferências empresariais.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Workshops</h3>
                <p className="text-gray-600">Sessões práticas e interativas para grupos menores com foco em aplicação prática.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Webinars</h3>
                <p className="text-gray-600">Apresentações online ao vivo com interação em tempo real e alcance global.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temas Principais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Temas Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#35DD48]">Vendas e Performance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Técnicas de vendas de alta performance</li>
                  <li>• Mindset de vendedor de sucesso</li>
                  <li>• Superação de objeções</li>
                  <li>• Vendas consultivas</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#35DD48]">Liderança e Gestão</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Liderança inspiradora</li>
                  <li>• Gestão de equipes de alta performance</li>
                  <li>• Comunicação eficaz</li>
                  <li>• Desenvolvimento de talentos</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#35DD48]">Transformação Digital</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vendas digitais</li>
                  <li>• Automação de processos</li>
                  <li>• CRM e tecnologia</li>
                  <li>• Marketing digital para vendas</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#35DD48]">Motivação e Desenvolvimento</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Superação de limites</li>
                  <li>• Resiliência e persistência</li>
                  <li>• Desenvolvimento pessoal</li>
                  <li>• Trabalho em equipe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inspire sua Equipe com Conteúdo de Qualidade</h2>
            <p className="text-xl text-gray-600 mb-8">Transforme eventos em momentos marcantes de aprendizado e motivação</p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento para Palestra
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
                  alt="Sellou" 
                  className="h-6 brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">Performance excepcional em um toque.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:anderson@sellou.com.br" className="text-gray-400 hover:text-[#35DD48] transition-colors">
                    Email: anderson@sellou.com.br
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5547996353818" target="_blank" className="text-gray-400 hover:text-[#35DD48] transition-colors">
                    WhatsApp: +55 (47) 99635-3818
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/sellouvendas" target="_blank" className="text-gray-400 hover:text-[#35DD48] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/sellou-app-vendas" target="_blank" className="text-gray-400 hover:text-[#35DD48] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@sellou-vendas" target="_blank" className="text-gray-400 hover:text-[#35DD48] transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">© 2025 Sellou. Todos os direitos reservados.</p>
              <div className="flex space-x-6">
                <Link to="/politica-privacidade" className="text-gray-500 hover:text-[#35DD48] text-sm transition-colors">Política de Privacidade</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Palestras;