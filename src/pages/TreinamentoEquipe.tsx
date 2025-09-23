import React from 'react';
import { ArrowLeft, Users, CheckCircle, BookOpen, Trophy, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const TreinamentoEquipe = () => {
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
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Treinamento de Equipe
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Capacitação completa para sua equipe de vendas com metodologias comprovadas e acompanhamento personalizado.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Treinamento
            </a>
          </div>
        </div>
      </section>

      {/* Módulos do Treinamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Módulos do Treinamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Técnicas avançadas de vendas</h3>
                  <p className="text-gray-600">Metodologias modernas de vendas, negociação e fechamento de contratos de alto valor.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Desenvolvimento de soft skills</h3>
                  <p className="text-gray-600">Comunicação assertiva, inteligência emocional e habilidades interpessoais essenciais.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Treinamento em ferramentas digitais</h3>
                  <p className="text-gray-600">Capacitação no uso de Força de vendas, automação de marketing e ferramentas de produtividade.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Coaching individual e em grupo</h3>
                  <p className="text-gray-600">Sessões personalizadas para desenvolver potencial individual e trabalho em equipe.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Certificação e acompanhamento contínuo</h3>
                  <p className="text-gray-600">Certificação oficial e suporte contínuo para garantir a aplicação dos conhecimentos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia de Ensino */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Metodologia de Ensino</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Teoria + Prática</h3>
                <p className="text-gray-600">Combinamos conhecimento teórico sólido com exercícios práticos e simulações reais.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gamificação</h3>
                <p className="text-gray-600">Utilizamos elementos de gamificação para tornar o aprendizado mais envolvente e efetivo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Feedback Contínuo</h3>
                <p className="text-gray-600">Avaliações constantes e feedback personalizado para acelerar o desenvolvimento individual.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos Disponíveis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Formatos Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Presencial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Workshops intensivos</li>
                  <li>• Dinâmicas em grupo</li>
                  <li>• Role-plays e simulações</li>
                  <li>• Networking entre participantes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Online</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Aulas ao vivo interativas</li>
                  <li>• Plataforma de aprendizado</li>
                  <li>• Gravações para revisão</li>
                  <li>• Flexibilidade de horários</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Desenvolva uma Equipe de Alta Performance</h2>
            <p className="text-xl text-gray-600 mb-8">Invista no desenvolvimento da sua equipe e colha resultados excepcionais</p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Proposta de Treinamento
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

export default TreinamentoEquipe;