import React from 'react';
import { ArrowLeft, BarChart3, CheckCircle, Database, Zap, Users2, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlataformaVendas = () => {
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
              <Laptop className="w-10 h-10 text-[#35DD48]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plataforma de Vendas
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Tecnologia avançada para otimizar processos de vendas, Força de vendas integrado e automação de marketing.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Conhecer Plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Recursos da Plataforma */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recursos da Plataforma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Força de vendas completo e intuitivo</h3>
                  <p className="text-gray-600">Sistema completo de gestão de relacionamento com clientes, fácil de usar e configurar.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automação de marketing digital</h3>
                  <p className="text-gray-600">Automatize campanhas, e-mails e follow-ups para nutrir leads e acelerar conversões.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão de pipeline de vendas</h3>
                  <p className="text-gray-600">Visualize e gerencie todo o processo de vendas com funil interativo e customizável.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Relatórios e dashboards em tempo real</h3>
                  <p className="text-gray-600">Acompanhe métricas importantes com dashboards intuitivos e relatórios personalizáveis.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Integração com principais ferramentas</h3>
                  <p className="text-gray-600">Conecte facilmente com WhatsApp, e-mail, redes sociais e outras ferramentas essenciais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Principais Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gestão de Leads</h3>
                <p className="text-gray-600">Capture, organize e qualifique leads automaticamente para maximizar conversões.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Automação Inteligente</h3>
                <p className="text-gray-600">Automatize tarefas repetitivas e processos complexos para focar no que realmente importa.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Analytics Avançado</h3>
                <p className="text-gray-600">Tenha insights profundos sobre performance de vendas e comportamento de clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolucione seu Processo de Vendas</h2>
            <p className="text-xl text-gray-600 mb-8">Descubra como nossa plataforma pode transformar seus resultados comerciais</p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Demonstração
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

export default PlataformaVendas;