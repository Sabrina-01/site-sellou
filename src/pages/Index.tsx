
import React, { useEffect } from 'react';
import { TrendingUp, Laptop, GraduationCap, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

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


  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#35DD48]" />,
      title: "Consultoria Estratégica",
      description: "Análise profunda do seu negócio com estratégias personalizadas para acelerar vendas e maximizar resultados.",
      link: "/consultoria-estrategica"
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#35DD48]" />,
      title: "Plataforma de Vendas",
      description: "Tecnologia avançada para otimizar processos de vendas, Força de vendas integrado e automação de marketing.",
      link: "/plataforma-vendas"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#35DD48]" />,
      title: "Treinamento de Equipe",
      description: "Capacitação completa para sua equipe de vendas com metodologias comprovadas e acompanhamento personalizado.",
      link: "/treinamento-equipe"
    },
    {
      icon: <Presentation className="w-8 h-8 text-[#35DD48]" />,
      title: "Palestras",
      description: "Eventos inspiradores e educativos sobre vendas, liderança e crescimento empresarial para motivar sua equipe.",
      link: "/palestras"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
              alt="Sellou" 
              className="h-6 sm:h-8"
            />
          </a>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <a href="#inicio" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Início</a>
            <a href="#servicos" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Serviços</a>
            <a href="#sobre" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Sobre</a>
            <a href="#equipe" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Equipe</a>
            <a href="#contato" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Contato</a>
          </nav>
          <div>
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap text-xs sm:text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#35DD48] to-[#008440]">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                Bem-vindo(a) ao futuro das vendas
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 md:mb-10 max-w-[520px] mx-auto md:mx-0">
                Performance excepcional em um toque
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                  target="_blank"
                  className="bg-[#008440] hover:bg-[#35DD48] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
                >
                  <span className="text-sm sm:text-base lg:text-lg">Contrate nossos serviços</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg shadow-xl overflow-hidden max-w-md mx-auto md:max-w-none">
                <img 
                  src="/lovable-uploads/dashboard-sellou.jpeg" 
                  alt="Dashboard Sellou - Plataforma de Vendas" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Serviços</span>
            <h2 className="text-3xl font-bold mb-2 text-[#008440]">Soluções Completas em Vendas</h2>
            <p className="text-gray-600">Estratégias personalizadas para maximizar seus resultados</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-4 flex-grow text-sm sm:text-base">{service.description}</p>
                  <div className="text-center mt-auto">
                    <span className="bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                      Saiba mais
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Resultados</span>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Resultados que vendem mais</h2>
              <p className="text-gray-600">Dados comprovados do impacto das nossas soluções</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-[#35DD48] mb-2 group-hover:text-[#008440] transition-colors">
                    +29%
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Vendas
                  </div>
                  <div className="text-xs text-gray-500">
                    com Força de vendas
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-[#35DD48] mb-2 group-hover:text-[#008440] transition-colors">
                    +17%
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Equipes mais produtivas
                  </div>
                  <div className="text-xs text-gray-500">
                    e assertivas
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-[#35DD48] mb-2 group-hover:text-[#008440] transition-colors">
                    +20%
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Eficiência
                  </div>
                  <div className="text-xs text-gray-500">
                    com consultoria
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-[#35DD48] mb-2 group-hover:text-[#008440] transition-colors">
                    30%
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Ciclo de vendas
                  </div>
                  <div className="text-xs text-gray-500">
                    mais rápido
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  Fontes: McKinsey, Forbes Insights, The Business Research Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Sobre Nós</span>
            <h2 className="text-3xl font-bold mb-2 text-[#008440]">Transformando Negócios Através de Vendas</h2>
            <p className="text-gray-600">Somos especialistas em potencializar resultados comerciais</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-gray-600 mb-6">
                  Ser o principal facilitador de performance em vendas entre representantes e indústrias/distribuidores
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-gray-600 mb-6">
                  Ser a maior rede de software de vendas do Brasil até 2030
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Transparência e União:</strong>
                      <span className="text-gray-600"> Mantemos relacionamentos claros e honestos, promovendo a união em todas as nossas ações</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Excelência e Comprometimento:</strong>
                      <span className="text-gray-600"> Buscamos sempre a melhor performance com total dedicação aos nossos objetivos</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#35DD48] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900">Raça e Foco no Resultado:</strong>
                      <span className="text-gray-600"> Temos determinação e foco absoluto na entrega de resultados concretos e mensuráveis</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-[#008440] rounded-full text-sm font-medium mb-3">Nossa Equipe</span>
            <h2 className="text-3xl font-bold mb-2 text-[#008440]">Especialistas em Vendas</h2>
            <p className="text-gray-600">Conheça os profissionais que fazem a diferença</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/8c91ba33-b728-43a4-aa16-79f4d1c1b75a.png" 
                  alt="Anderson Medeiros" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Anderson Medeiros</h3>
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

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/059c4784-a98f-4e23-b03f-719c95bbabb7.png" 
                  alt="Andersson S. Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Andersson S. Silva</h3>
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
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5] relative overflow-hidden cta-section">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center cta-content opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-[#008440]">Pronto para Transformar suas Vendas?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">Junte-se a centenas de empresas que já transformaram seus resultados com a Sellou</p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg max-w-xs sm:max-w-none text-center"
              >
                Quero vender com a Sellou
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#008440] text-white pt-16 pb-8">
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
