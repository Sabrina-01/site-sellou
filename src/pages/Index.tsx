
import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // CTA Section animation
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const section = entry.target;
          if (!section.hasAttribute('data-animated')) {
            section.setAttribute('data-animated', 'true');
            
            const ctaContent = section.querySelector('.cta-content');
            
            if (ctaContent) {
              (ctaContent as HTMLElement).style.transition = 'all 0.8s ease-out';
              (ctaContent as HTMLElement).style.opacity = '1';
              (ctaContent as HTMLElement).style.transform = 'translateY(0)';
            }
          }
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-10% 0px'
    });

    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
      ctaObserver.observe(ctaSection);
    }

    return () => {
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
              alt="Sellou" 
              className="h-8"
            />
          </a>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <a href="#inicio" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Início</a>
            <a href="#servicos" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Serviços</a>
            <a href="#sobre" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Sobre</a>
            <a href="#equipe" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Equipe</a>
            <a href="#contato" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Contato</a>
          </nav>
          <div>
            <a href="https://forms.gle/NNfEEyxHa6v6JPuJ6" target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Bem-vindo(a) ao futuro das vendas
              </h1>
              <p className="text-xl text-gray-700 mb-10 max-w-[520px]">
                Performance excepcional em um toque
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://forms.gle/NNfEEyxHa6v6JPuJ6" 
                  target="_blank"
                  className="group relative bg-gradient-to-r from-[#35DD48] to-[#008440] text-white px-12 py-4 rounded-full font-medium whitespace-nowrap overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                >
                  <span className="relative z-10 text-lg">Contrate nossos serviços</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#008440]/20 via-[#35DD48]/20 to-[#008440]/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-100 p-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500">Dashboard Sellou</div>
                  <div className="w-6"></div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm text-[#008440]">Receita</h4>
                      <div className="text-2xl font-bold mb-1 text-[#008440]">R$ 75.771,68</div>
                      <div className="text-xs text-gray-500">Período atual</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm text-[#008440]">Ticket Médio</h4>
                      <div className="text-2xl font-bold mb-1 text-[#008440]">R$ 1.762,13</div>
                      <div className="text-xs text-gray-500">Por cliente</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm text-blue-600">Total de Clientes</h4>
                      <div className="text-2xl font-bold mb-1 text-blue-600">6</div>
                      <div className="text-xs text-gray-500">Ativos</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm text-orange-600">Usuários Ativos</h4>
                      <div className="text-2xl font-bold mb-1 text-orange-600">1</div>
                      <div className="text-xs text-gray-500">Online agora</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="text-[#008440] font-semibold">Sellou</span> transformando resultados de vendas com estratégias comprovadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Serviços</span>
            <h2 className="text-3xl font-bold mb-2">Soluções Completas em Vendas</h2>
            <p className="text-gray-600">Estratégias personalizadas para maximizar seus resultados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#35DD48]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Consultoria Estratégica</h3>
              <p className="text-gray-600 text-center">Análise profunda do seu negócio com estratégias personalizadas para acelerar vendas e maximizar resultados.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#35DD48]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Plataforma de Vendas</h3>
              <p className="text-gray-600 text-center">Tecnologia avançada para otimizar processos de vendas, CRM integrado e automação de marketing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#35DD48]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Treinamento de Equipe</h3>
              <p className="text-gray-600 text-center">Capacitação completa para sua equipe de vendas com metodologias comprovadas e acompanhamento personalizado.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#35DD48]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Palestras</h3>
              <p className="text-gray-600 text-center">Eventos inspiradores e educativos sobre vendas, liderança e crescimento empresarial para motivar sua equipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Sobre Nós</span>
            <h2 className="text-3xl font-bold mb-2">Transformando Negócios Através de Vendas</h2>
            <p className="text-gray-600">Somos especialistas em potencializar resultados comerciais</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-gray-600 mb-6">
                  Na Sellou, nossa missão é transformar a maneira como as empresas vendem, oferecendo soluções inovadoras que combinam estratégia, tecnologia e capacitação para maximizar o potencial comercial de cada cliente.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-gray-600 mb-6">
                  Ser reconhecida como a principal referência em soluções de vendas no Brasil, ajudando empresas de todos os portes a alcançarem resultados excepcionais e sustentáveis.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Excelência:</strong>
                      <span className="text-gray-600"> Buscamos sempre a melhor performance em tudo que fazemos</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Inovação:</strong>
                      <span className="text-gray-600"> Utilizamos as mais modernas tecnologias e metodologias</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Transparência:</strong>
                      <span className="text-gray-600"> Mantemos relacionamentos claros e honestos com nossos clientes</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Resultados:</strong>
                      <span className="text-gray-600"> Focamos em entregar resultados concretos e mensuráveis</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Nossa Equipe</span>
            <h2 className="text-3xl font-bold mb-2">Especialistas em Vendas</h2>
            <p className="text-gray-600">Conheça os profissionais que fazem a diferença</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/8c91ba33-b728-43a4-aa16-79f4d1c1b75a.png" 
                  alt="Anderson Medeiros" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Anderson Medeiros</h3>
              <p className="text-gray-600 text-sm mb-4">
                Executivo com 25+ anos de experiência em estratégia comercial, liderança de grandes times e expansão de receita. Especialista em planejamento, canais B2B/B2C e negociação com grandes contas.
              </p>
              <a 
                href="https://www.linkedin.com/in/anderson-medeiros-929870153/" 
                target="_blank" 
                className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Ver perfil no LinkedIn
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/059c4784-a98f-4e23-b03f-719c95bbabb7.png" 
                  alt="Andersson S. Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Andersson S. Silva</h3>
              <p className="text-gray-600 text-sm mb-4">
                Consultor com mais de 14 anos de atuação em estratégia, inovação e M&A. Conselheiro certificado, investidor e sócio de múltiplos negócios com forte atuação no ecossistema empresarial e educacional.
              </p>
              <a 
                href="https://www.linkedin.com/in/anderssilva/" 
                target="_blank" 
                className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Ver perfil no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden cta-section">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center cta-content opacity-0 translate-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar suas Vendas?</h2>
            <p className="text-xl text-gray-600 mb-8">Junte-se a centenas de empresas que já transformaram seus resultados com a Sellou</p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://forms.gle/NNfEEyxHa6v6JPuJ6" 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-medium whitespace-nowrap transform hover:scale-105 transition-all duration-300"
              >
                Quero vender com a Sellou
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
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
                <a href="/politica-privacidade" className="text-gray-500 hover:text-[#35DD48] text-sm transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
