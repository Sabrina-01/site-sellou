import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Laptop, Target, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlataformaVendas = () => {
  const [activeVideo, setActiveVideo] = useState('login');

  const videos = [
    {
      id: 'login',
      title: 'Acesso imediato e sem fricção',
      subtitle: 'Login até empresa',
      description: 'Entre e comece a vender em segundos. Simples, rápido e intuitivo.',
      video: '/lovable-uploads/login-empresa.mp4'
    },
    {
      id: 'produto',
      title: 'Catálogo organizado, pedido sem erro',
      subtitle: 'Criação de produto',
      description: 'Cadastre e atualize produtos facilmente, mantendo informações padronizadas.',
      video: '/lovable-uploads/criacao-produto.mp4'
    },
    {
      id: 'dashboard',
      title: 'Decisão rápida com dados reais',
      subtitle: 'Dashboard',
      description: 'Veja os números que importam e aja com confiança.',
      video: '/lovable-uploads/dashboard.mp4'
    },
    {
      id: 'clientes',
      title: 'Histórico completo de cada cliente',
      subtitle: 'Tela Clientes',
      description: 'Relacionamento e recompra simplificados, tudo em um só painel.',
      video: '/lovable-uploads/tela-clientes.mp4'
    },
    {
      id: 'pedidos',
      title: 'Fechamento em segundos',
      subtitle: 'Pedidos',
      description: 'Gere pedidos rápidos e precisos, do carrinho à confirmação.',
      video: '/lovable-uploads/pedidos.mp4'
    },
    {
      id: 'gerenciamento',
      title: 'Controle total da operação',
      subtitle: 'Gerenciamento',
      description: 'Acompanhe tudo em tempo real — margens, resultados e desempenho da equipe.',
      video: '/lovable-uploads/gerenciamento.mp4'
    }
  ];

  const activeVideoData = videos.find(v => v.id === activeVideo);

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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#35DD48] to-[#008440] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors text-sm lg:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para página inicial
              </Link>
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Laptop className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Plataforma Sellou
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-4 font-medium">
                A tecnologia que transforma sua operação comercial em uma máquina de performance previsível.
              </p>
              <p className="text-lg lg:text-xl text-white/90 mb-8">
                Da prospecção ao fechamento, tudo em um só lugar: simples, rápido e conectado.
              </p>
              <a 
                href="#videos"
                className="inline-block bg-white text-[#008440] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Ver a plataforma em ação
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white/20">
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

      {/* Por que usar a plataforma Sellou */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Controle total, zero complicação.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pensada para quem vende, gerencia e quer crescer com clareza.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div className="flex items-start bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#35DD48] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Unifica processos</h3>
                  <p className="text-gray-600">Tudo — clientes, produtos, pedidos e representantes — num só painel.</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#35DD48] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Dá velocidade</h3>
                  <p className="text-gray-600">Menos cliques, mais fechamento.</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#35DD48] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Gera previsibilidade</h3>
                  <p className="text-gray-600">Dashboards e relatórios em tempo real.</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#35DD48] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Aumenta engajamento</h3>
                  <p className="text-gray-600">Equipe conectada, produtiva e orientada a resultados.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20conhecer%20melhor%20a%20Plataforma%20Sellou." 
                target="_blank"
                className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Quero conhecer melhor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Veja a plataforma em ação */}
      <section id="videos" className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Veja como a Sellou simplifica sua rotina
              </h2>
              <p className="text-xl text-gray-600">
                Clique em uma função abaixo para assistir em ação.
              </p>
            </div>

            {/* Tabs/Accordion for videos */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Tabs - Desktop */}
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200">
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(video.id)}
                    className={`px-4 py-4 text-sm font-medium transition-all ${
                      activeVideo === video.id
                        ? 'bg-[#35DD48] text-white'
                        : 'bg-white text-gray-700 hover:bg-[#008440] hover:text-white border-b-2 border-[#35DD48]'
                    }`}
                  >
                    {video.subtitle}
                  </button>
                ))}
              </div>

              {/* Mobile Accordion */}
              <div className="md:hidden">
                {videos.map((video) => (
                  <div key={video.id} className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveVideo(video.id === activeVideo ? '' : video.id)}
                      className={`w-full px-4 py-4 text-left font-medium transition-all ${
                        activeVideo === video.id
                          ? 'bg-[#35DD48] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {video.subtitle}
                    </button>
                    {activeVideo === video.id && (
                      <div className="animate-fade-in">
                        <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                          <video
                            key={video.id}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ objectFit: 'contain' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={video.title}
                          >
                            <source src={video.video} type="video/mp4" />
                          </video>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{video.title}</h3>
                          <p className="text-gray-600 mb-4">{video.description}</p>
                          <a 
                            href={`https://wa.me/5547996353818?text=Olá,%20quero%20usar%20a%20função%20de%20${video.subtitle}%20da%20Plataforma%20Sellou.`}
                            target="_blank"
                            className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            Quero usar essa função
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Video Content - Desktop */}
              {activeVideoData && (
                <div className="hidden md:block animate-fade-in">
                  <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                    <video
                      key={activeVideoData.id}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ objectFit: 'contain' }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={activeVideoData.title}
                    >
                      <source src={activeVideoData.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{activeVideoData.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{activeVideoData.description}</p>
                    <a 
                      href={`https://wa.me/5547996353818?text=Olá,%20quero%20usar%20a%20função%20de%20${activeVideoData.subtitle}%20da%20Plataforma%20Sellou.`}
                      target="_blank"
                      className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                      Quero usar essa função
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-[#35DD48]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para transformar seu time comercial?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Simplifique a operação, ganhe velocidade e aumente resultados com a Sellou.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20contratar%20a%20Plataforma%20Sellou." 
              target="_blank"
              className="inline-block bg-[#008440] hover:bg-[#006030] text-white px-10 py-5 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Contrate agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
                alt="Sellou" 
                className="h-8 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Transformando vendas em resultados.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/#inicio" className="text-gray-400 hover:text-[#35DD48] transition-colors">Início</Link></li>
                <li><Link to="/#servicos" className="text-gray-400 hover:text-[#35DD48] transition-colors">Serviços</Link></li>
                <li><Link to="/#sobre" className="text-gray-400 hover:text-[#35DD48] transition-colors">Sobre</Link></li>
                <li><Link to="/#contato" className="text-gray-400 hover:text-[#35DD48] transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">
                WhatsApp: <a href="https://wa.me/5547996353818" target="_blank" className="text-[#35DD48] hover:underline">(47) 99635-3818</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sellou. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlataformaVendas;
