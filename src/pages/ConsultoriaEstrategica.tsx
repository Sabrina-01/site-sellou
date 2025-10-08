import React from 'react';
import { ArrowLeft, CheckCircle, Users, Target, TrendingUp, BarChart, MessageSquare, Presentation, Zap, Award, LineChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultoriaEstrategica = () => {
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
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4 lg:mx-10">
            <Link to="/#inicio" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Início</Link>
            <Link to="/#servicos" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Serviços</Link>
            <Link to="/#sobre" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Sobre</Link>
            <Link to="/#equipe" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Equipe</Link>
            <Link to="/#contato" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Contato</Link>
          </nav>
          <div className="flex-shrink-0">
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-3 lg:px-4 py-2 rounded-lg whitespace-nowrap text-xs lg:text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#35DD48] to-[#008440] py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-white hover:text-white/80 mb-4 lg:mb-6 transition-colors text-sm lg:text-base">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para página inicial
            </Link>
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 px-4">
              Consultoria Comercial Sellou
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 px-4">
              Transformamos processos comerciais fragmentados em máquinas de vendas de alta performance.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20transformar%20minha%20área%20comercial" 
              target="_blank"
              className="bg-[#008440] hover:bg-white hover:text-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition-all duration-300 hover:shadow-lg inline-block"
            >
              Quero transformar minha área comercial
            </a>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-12 lg:py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4 text-[#008440]">Soluções sob medida para sua operação comercial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultoria de Gestão Comercial</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mentoria</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Presentation className="w-6 h-6 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Palestras e Treinamentos</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Apoio com Software de Força de Vendas</h3>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20falar%20com%20um%20especialista" 
                target="_blank"
                className="bg-white hover:bg-gray-50 text-[#008440] border-2 border-[#008440] hover:border-[#35DD48] px-6 lg:px-8 py-3 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como atuamos */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4">Nosso jeito de transformar resultados</h2>
            <div className="space-y-4">
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Diagnóstico com propósito</strong> – entendemos gargalos e oportunidades antes de agir.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Time de alta performance</strong> – reestruturamos equipes com foco em produtividade real.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Liderança que inspira e entrega</strong> – formamos gestores com visão estratégica e domínio de dados.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Indicadores que guiam decisões</strong> – KPIs claros, previsibilidade e gestão por dados.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Processos padronizados</strong> – políticas comerciais que organizam e escalam resultados.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Cultura de performance</strong> – incentivos, reconhecimento e planos que sustentam engajamento.</p>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg"><strong>Consultoria com tecnologia</strong> – estratégia unida ao software de força de vendas para escalar performance.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20uma%20consultoria%20personalizada" 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Quero uma consultoria personalizada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Principais dores */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4">Seus desafios são a nossa especialidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Falta de estrutura no processo comercial</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Times desalinhados e de baixa performance</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Lideranças sem preparo estratégico</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Ausência de indicadores e previsibilidade</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Dificuldade em gerar e qualificar leads</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Baixa taxa de conversão e retenção de clientes</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Precificação incorreta e margens frágeis</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#35DD48] transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Concorrência agressiva sem diferenciação</h3>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20vamos%20resolver%20juntos" 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Vamos resolver juntos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4 text-[#008440]">Resultados que sustentam crescimento</h2>
            <div className="space-y-4 mb-10">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#35DD48]" />
                </div>
                <p className="text-gray-700 text-lg">Transformação real, prática e personalizada</p>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#35DD48]" />
                </div>
                <p className="text-gray-700 text-lg">Cultura de performance instalada no time</p>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#35DD48]" />
                </div>
                <p className="text-gray-700 text-lg">Processos claros e padronizados que escalam</p>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#35DD48]" />
                </div>
                <p className="text-gray-700 text-lg">Consultoria apoiada por tecnologia de vendas</p>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#35DD48]" />
                </div>
                <p className="text-gray-700 text-lg">Resultados sustentáveis e previsíveis</p>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20acelerar%20minhas%20vendas" 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full text-lg lg:text-xl font-bold transform hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
              >
                Entre em contato e acelere suas vendas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Sellou. Todos os direitos reservados.</p>
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

export default ConsultoriaEstrategica;