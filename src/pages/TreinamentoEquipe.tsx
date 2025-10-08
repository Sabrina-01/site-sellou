import React from 'react';
import { ArrowLeft, CheckCircle, BookOpen, Trophy, MessageSquare, Target, Lightbulb, Clock, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
              <GraduationCap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 px-4">
              Treinamentos
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 px-4">
              Desenvolvemos pessoas e transformamos resultados através de treinamentos práticos e estratégicos.
            </p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." 
              target="_blank"
              className="bg-[#008440] hover:bg-white hover:text-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition-all duration-300 hover:shadow-lg inline-block"
            >
              Solicitar Treinamento
            </a>
          </div>
        </div>
      </section>

      {/* Nossa Metodologia */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#008440]">Nossa Metodologia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Realidade prática de campo</h3>
                  <p className="text-gray-600">Treinamentos baseados em experiências reais do dia a dia comercial.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ferramentas estratégicas</h3>
                  <p className="text-gray-600">Instrumentos eficazes para vendas e liderança de alto impacto.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dinâmicas reflexivas</h3>
                  <p className="text-gray-600">Atividades que promovem reflexão e ação imediata.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Aplicação imediata</h3>
                  <p className="text-gray-600">Direcionamento claro para implementação no dia a dia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais de Anderson Medeiros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Diferenciais de Anderson Medeiros</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Foto do Anderson */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                    <img 
                      src="/lovable-uploads/8c91ba33-b728-43a4-aa16-79f4d1c1b75a.png" 
                      alt="Anderson Medeiros" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-[#35DD48]/20"></div>
                </div>
              </div>
              
              {/* Diferenciais */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Didática prática</h3>
                    <p className="text-gray-600">Abordagem direta e aplicável ao cotidiano comercial.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experiência executiva</h3>
                    <p className="text-gray-600">Vivência real como executivo comercial de alto nível.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Foco em resultados</h3>
                    <p className="text-gray-600">Atenção total aos indicadores e métricas de desempenho.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-[#35DD48] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Linguagem atual</h3>
                    <p className="text-gray-600">Comunicação inspiradora alinhada ao novo perfil de liderança.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos Disponíveis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#008440]">Formatos Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Treinamentos Express</h3>
                <p className="text-gray-600">Pílulas de impacto de 1h para eventos, convenções e lives.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Workshops Intensivos</h3>
                <p className="text-gray-600">Conteúdo aprofundado de 2h, 4h ou 8h com prática e plano de ação.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Programas e Mentorias</h3>
                <p className="text-gray-600">12 a 20 encontros trimestrais ou semestrais com plano estruturado.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 italic">
                Todos os formatos estão disponíveis presencialmente ou online ao vivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Treinamentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Treinamentos</h2>
            <div className="relative px-12">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {/* Card 1 - Domínio Comercial */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Domínio Comercial</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">A Jornada do Representante Imparável.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Desbloqueando a Mente Imbatível</li>
                            <li>• Representante Alfa</li>
                            <li>• Representante CEO</li>
                            <li>• Rota Lucrativa</li>
                            <li>• Vendendo em Modo de Combate</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Transformar vendedores comuns em CEOs do território, com autoconfiança, autoridade e performance.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Domínio%20Comercial." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 2 - Líder Diamante */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Líder Diamante</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Forjados na pressão, lapidados pela excelência.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Pressão como ferramenta de formação</li>
                            <li>• Diferença entre carvão e diamante</li>
                            <li>• Perfil do Líder Diamante</li>
                            <li>• Lapidação</li>
                            <li>• Valor e escassez</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Lapidação de mentalidade para líderes que brilham na crise e transformam pressão em potência.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Líder%20Diamante." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 3 - A Mente do Líder Extraordinário */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">A Mente do Líder Extraordinário</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Liderança inspiradora, estratégica e exemplar.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Despertar da Liderança MSC</li>
                            <li>• Autoliderança</li>
                            <li>• Mindfulness</li>
                            <li>• Altruísmo em Ação</li>
                            <li>• Compaixão com Discernimento</li>
                            <li>• Cultura MSC</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Modelo baseado em neurociência. Mais engajamento, equipes leais, cultura forte e decisões assertivas.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20A%20Mente%20do%20Líder%20Extraordinário." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 4 - Liderança em Tempos Difíceis */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Liderança em Tempos Difíceis</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Lidere na tempestade com coragem.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Papel do líder em cenários desafiadores</li>
                            <li>• Mentalidade antifrágil</li>
                            <li>• Comunicação na incerteza</li>
                            <li>• Gestão da energia emocional</li>
                            <li>• Planejamento ágil</li>
                            <li>• Liderança pelo exemplo</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Preparar CEOs, diretores e gerentes para manter clareza, coragem e performance mesmo nos piores cenários.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Liderança%20em%20Tempos%20Difíceis." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 5 - Gerente de Sucesso */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Gerente de Sucesso</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Você não gerencia tarefas. Você lidera destinos.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Características do Gerente de Sucesso</li>
                            <li>• Funções do Gerente de Vendas</li>
                            <li>• Liderança Eficaz</li>
                            <li>• Construção de Equipe Leal</li>
                            <li>• Satisfação do Cliente</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Formação de líderes estratégicos que inspiram, constroem lealdade e transformam resultados.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Gerente%20de%20Sucesso." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 6 - O Jogo Completo das Vendas */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">O Jogo Completo das Vendas</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Técnicas de abordagem, escuta ativa e negociação consultiva.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fundamentos da Venda Moderna</li>
                            <li>• Planejamento</li>
                            <li>• Técnicas de Abordagem</li>
                            <li>• Identificação de Necessidades</li>
                            <li>• Negociação</li>
                            <li>• Superando Objeções</li>
                            <li>• Fechamento</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Campo de batalha para transformar abordagens genéricas em vendas de impacto, com foco em margem e negociação estratégica.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20O%20Jogo%20Completo%20das%20Vendas." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 7 - Passos para Alta Performance */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Passos para Alta Performance</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Todo gigante começou com o primeiro passo certo.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fundamentos da Venda de Alta Performance</li>
                            <li>• Prospecção</li>
                            <li>• Processo Comercial</li>
                            <li>• Pós-venda</li>
                            <li>• Fidelização</li>
                            <li>• Métricas</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Passo a passo para SDRs, iniciantes e televendas dominarem técnica, processo e atitude.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Passos%20para%20Alta%20Performance." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 8 - Gestão Comercial e Desenvolvimento de Equipes */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão Comercial e Desenvolvimento de Equipes</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Contratação, KPIs e cultura de alta performance.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Montagem de time</li>
                            <li>• Reuniões eficazes</li>
                            <li>• Uso de KPIs</li>
                            <li>• Integração de vendas</li>
                            <li>• Cobrança e cultura</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Estratégias práticas para formar e sustentar times comerciais de alta performance.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Gestão%20Comercial%20e%20Desenvolvimento%20de%20Equipes." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 9 - Técnicas de Negociação e Poder de Persuasão */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Técnicas de Negociação e Poder de Persuasão</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Transforme objeções em oportunidades.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Negociação como jogo de influência ética</li>
                            <li>• Cliente 5.0</li>
                            <li>• IA como aliada</li>
                            <li>• Persuasão e conversão</li>
                            <li>• Encerramento irresistível</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Combina fundamentos clássicos com IA, empatia e dados para negociação estratégica e encantamento do cliente.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Técnicas%20de%20Negociação%20e%20Poder%20de%20Persuasão." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 10 - Formação e Técnicas de Vendas para Televendas */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Formação e Técnicas de Vendas para Televendas</h3>
                        <p className="text-[#35DD48] font-medium mb-4 italic">Transforme seu televendas em máquina de fechar negócios.</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Temas Abordados:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Processo de Vendas por Telefone</li>
                            <li>• Scripts práticos</li>
                            <li>• Técnicas para objeções</li>
                            <li>• Negociação por valor</li>
                            <li>• Fechamento eficiente</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm">
                          Virada de chave para transformar ligações em conversões reais, com foco em performance e realidade brasileira.
                        </p>
                        <a 
                          href="https://wa.me/5547996353818?text=Olá,%20tenho%20interesse%20no%20treinamento%20Formação%20e%20Técnicas%20de%20Vendas%20para%20Televendas." 
                          target="_blank"
                          className="w-full bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                        >
                          Quero este treinamento
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white border-2 border-[#35DD48] text-[#35DD48] hover:bg-[#35DD48] hover:text-white shadow-lg" />
                <CarouselNext className="right-2 bg-white border-2 border-[#35DD48] text-[#35DD48] hover:bg-[#35DD48] hover:text-white shadow-lg" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#008440]">Desenvolva Pessoas e Transforme Resultados</h2>
            <p className="text-xl text-gray-600 mb-8">Invista em treinamentos de impacto e colha performance excepcional</p>
            <a 
              href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20os%20treinamentos%20da%20Sellou." 
              target="_blank"
              className="bg-[#35DD48] hover:bg-[#008440] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Solicitar Informações
            </a>
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

export default TreinamentoEquipe;