import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, Users, TrendingUp, MessageCircle, Award, Clock, UserPlus, Zap, ArrowLeft } from 'lucide-react';
const Palestras = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" alt="Sellou" className="h-6 sm:h-8" />
          </a>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <a href="/#inicio" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Início</a>
            <a href="/#servicos" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Serviços</a>
            <a href="/#sobre" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Sobre</a>
            <a href="/#equipe" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Equipe</a>
            <a href="/#contato" className="mx-2 lg:mx-4 text-gray-700 hover:text-[#35DD48] transition-colors text-sm lg:text-base">Contato</a>
          </nav>
          <div>
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Sellou." target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap text-xs sm:text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Seção 1 - Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#35DD48] to-[#008440] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-white hover:text-white/80 mb-4 lg:mb-6 transition-colors text-sm lg:text-base">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para página inicial
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Palestras que despertam performance e propósito.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experiências vivas de liderança, vendas e alta performance — inspirando times a agir com mais foco, clareza e resultado.
            </p>
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20levar%20a%20Sellou%20para%20meu%20evento." target="_blank" className="inline-block bg-white text-[#008440] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Quero levar a Sellou para meu evento
            </a>
          </div>
        </div>
      </section>

      {/* Seção 2 - Sobre as Palestras Sellou */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Conteúdo que inspira. Estratégia que transforma.
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
                As palestras Sellou combinam experiência executiva, histórias reais e metodologias de performance comercial aplicadas no dia a dia de empresas e líderes.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
                Mais do que motivação, entregam clareza e direção prática para agir imediatamente.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">Cada encontro é desenhado para conectar emoção e execução com linguagem moderna, direta e inspiradora.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Conteúdo real</h3>
                <p className="text-gray-600 text-sm text-center">Criado por quem vive o mercado todos os dias.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Impacto imediato</h3>
                <p className="text-gray-600 text-sm text-center">Provoca reflexão e ação.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Personalização</h3>
                <p className="text-gray-600 text-sm text-center">Adaptadas ao público e segmento de cada evento.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Resultados mensuráveis</h3>
                <p className="text-gray-600 text-sm text-center">Foco em engajamento e mudança de comportamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Temas e Propósitos */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Palestras que conectam performance, cultura e liderança.
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Os temas da Sellou são moldados para líderes, equipes comerciais e organizações que desejam elevar seus resultados com propósito.
                Cada palestra é construída com base nas dores reais das empresas brasileiras — trazendo soluções práticas, inspiradoras e possíveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#008440] mb-3">O Preço do Sucesso</h3>
                <p className="text-gray-600 mb-4">
                  Uma reflexão profunda sobre escolhas, propósito e a verdadeira jornada do sucesso.
                </p>
                <p className="text-gray-600 text-sm">
                  Inspirada no livro homônimo de Anderson Medeiros, essa palestra provoca líderes e equipes a olharem para o sucesso de forma sustentável, humana e real.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#008440] mb-3">Domínio Comercial – A Jornada do Representante Imparável</h3>
                <p className="text-gray-600 text-sm">
                  Voltada para representantes e equipes de vendas, essa palestra mostra o caminho da disciplina, técnica e mentalidade que transformam um profissional comum em um vendedor imparável.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#008440] mb-3">Líder Diamante – A Mente que Inspira Resultados</h3>
                <p className="text-gray-600 text-sm">
                  Direcionada a líderes e gestores, aborda o papel do líder como espelho e alavanca de performance, unindo estratégia, cultura e propósito.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow lg:col-start-1 lg:col-end-2 lg:mx-auto lg:max-w-md">
                <h3 className="text-xl font-bold text-[#008440] mb-3">Como Construir um Time Comercial Imbatível</h3>
                <p className="text-gray-600 mb-4">
                  Palestra voltada a CEOs, diretores e líderes comerciais.
                </p>
                <p className="text-gray-600 text-sm">
                  Ensina como alinhar propósito, indicadores e comportamento para formar times autônomos e vencedores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow lg:col-start-2 lg:col-end-3 lg:mx-auto lg:max-w-md md:col-start-2">
                <h3 className="text-xl font-bold text-[#008440] mb-3">A Mente do Líder Extraordinário</h3>
                <p className="text-gray-600 mb-4">
                  Baseada nas práticas de liderança consciente e foco em resultados sustentáveis.
                </p>
                <p className="text-gray-600 text-sm">
                  Um mergulho no equilíbrio entre empatia, presença e alta performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - Diferenciais Sellou */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Mais do que palestras. Experiências que geram movimento.
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
                A Sellou transforma conhecimento em ação.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
                Cada palestra é cuidadosamente roteirizada para conectar propósito, energia e performance.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Com linguagem moderna e histórias reais do campo comercial, Anderson Medeiros traz uma entrega que combina técnica, emoção e estratégia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Didática prática e inspiradora</h3>
                <p className="text-gray-600">Linguagem clara, moderna e envolvente.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vivência executiva real</h3>
                <p className="text-gray-600">Mais de 25 anos liderando times e estratégias comerciais.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-[#35DD48]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foco em resultado</h3>
                <p className="text-gray-600">Palestras com propósito, ação e continuidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Formatos e Personalização */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Formatos disponíveis
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                As palestras Sellou podem ser realizadas em diferentes formatos, conforme o contexto e o público do evento.
                Do palco ao online, cada formato mantém a mesma intensidade, energia e entrega prática.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#008440]" />
                </div>
                <h3 className="text-xl font-bold text-[#008440] mb-3">Palestras Express</h3>
                <p className="text-gray-600">
                  Impacto rápido em até 1 hora, ideais para convenções e eventos corporativos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[#008440]" />
                </div>
                <h3 className="text-xl font-bold text-[#008440] mb-3">Palestras Imersivas</h3>
                <p className="text-gray-600">
                  2 a 4 horas de conteúdo com dinâmica, interação e plano de ação.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-[#008440]" />
                </div>
                <h3 className="text-xl font-bold text-[#008440] mb-3">Experiências Customizadas</h3>
                <p className="text-gray-600">
                  Roteiros desenvolvidos sob medida para equipes, convenções e treinamentos internos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 - CTA Final */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#008440] mb-6">
              Leve inspiração e resultado ao seu evento.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Desperte o potencial do seu time com uma palestra que combina propósito, energia e execução.
              Fale conosco e descubra como criar uma experiência inesquecível para sua equipe.
            </p>
            <a href="https://wa.me/5547996353818?text=Olá,%20quero%20agendar%20uma%20palestra%20com%20Anderson%20Medeiros." target="_blank" className="inline-block bg-[#35DD48] hover:bg-[#008440] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Agendar palestra com Anderson Medeiros
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
                <img src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" alt="Sellou" className="h-6 brightness-0 invert" />
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
    </div>;
};
export default Palestras;