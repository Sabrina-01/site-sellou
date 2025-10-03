import React from 'react';
import { ArrowLeft, BarChart3, CheckCircle, Database, Zap, Users2, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Link to="/" className="inline-flex items-center text-[#008440] hover:text-[#35DD48] mb-4 lg:mb-6 transition-colors text-sm lg:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para página inicial
              </Link>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 lg:mb-6">
                <Laptop className="w-8 h-8 lg:w-10 lg:h-10 text-[#35DD48]" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Plataforma de Vendas
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8">
                Tecnologia avançada para otimizar processos de vendas, Força de vendas integrado e automação de marketing.
              </p>
              <a 
                href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                target="_blank"
                className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Conhecer Plataforma
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg shadow-xl overflow-hidden">
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

      {/* Recursos da Plataforma */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4">Recursos da Plataforma</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão de Clientes</h3>
                  <p className="text-gray-600">Cadastre, acompanhe e organize toda a base de clientes em um só lugar, com histórico de compras e dados completos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão de Produtos</h3>
                  <p className="text-gray-600">Crie e edite facilmente seu catálogo de produtos, incluindo preços, descrições, imagens e políticas comerciais.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão de Pedidos</h3>
                  <p className="text-gray-600">Gere pedidos de forma rápida e prática, com cálculo automático de valores, descontos e condições comerciais.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dashboard de Vendas</h3>
                  <p className="text-gray-600">Visualize indicadores e métricas em tempo real, com relatórios claros sobre desempenho, faturamento e conversão.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Controle de Representantes</h3>
                  <p className="text-gray-600">Acompanhe a performance da sua equipe comercial, organize rotas, territórios e políticas de comissionamento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Vídeos */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 px-4">Plataforma em Ação</h2>
            <p className="text-center text-gray-600 mb-8 lg:mb-12 px-4">Veja como nossa plataforma funciona na prática</p>
            
            <Carousel className="w-full">
              <CarouselContent>
                {/* Slide 1: Pedidos */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/pedidos.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Pedidos digitais ágeis e sem erros</h3>
                      <p className="text-gray-600 mb-6">Reduza retrabalho e ganhe produtividade no fechamento.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 2: Tela Clientes */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/tela-clientes.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Gestão completa de clientes</h3>
                      <p className="text-gray-600 mb-6">Histórico, pedidos e informações organizadas em um só lugar.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 3: Criação de produto */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/criacao-produto.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Cadastre produtos em poucos cliques</h3>
                      <p className="text-gray-600 mb-6">Simples, rápido e prático, sem complicação.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 4: Gerenciamento */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/gerenciamento.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Controle total da operação</h3>
                      <p className="text-gray-600 mb-6">Processos, margens e resultados monitorados em tempo real.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 5: Dashboard */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/dashboard.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Inteligência comercial em tempo real</h3>
                      <p className="text-gray-600 mb-6">Acompanhe métricas, indicadores e resultados sem esforço.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 6: Login até empresa */}
                <CarouselItem>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/lovable-uploads/login-empresa.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">Acesso rápido e seguro para toda a equipe</h3>
                      <p className="text-gray-600 mb-6">Entre facilmente na plataforma e comece a vender em segundos.</p>
                      <a 
                        href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
                        target="_blank"
                        className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Quero usar a plataforma
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 px-4">Principais Funcionalidades</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Criação e Gestão de Produtos</h3>
                  <p className="text-gray-600">Estruture seu catálogo digital e mantenha sempre atualizado.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cadastro e Gestão de Clientes</h3>
                  <p className="text-gray-600">Informações organizadas para fortalecer o relacionamento e aumentar a recompra.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emissão e Gestão de Pedidos</h3>
                  <p className="text-gray-600">Pedidos digitais ágeis, sem erros e com integração direta ao fluxo de vendas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dashboard Inteligente</h3>
                  <p className="text-gray-600">Acompanhe resultados em tempo real com dados estratégicos para decisões rápidas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão Comercial Integrada</h3>
                  <p className="text-gray-600">Controle de margens, políticas comerciais, representantes e resultados em uma única plataforma.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 px-4">Revolucione seu Processo de Vendas</h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 px-4">Descubra como nossa plataforma pode transformar seus resultados comerciais</p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
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