
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold" style={{ color: '#008440' }}>Sellou</a>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-10">
            <a href="/" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Início</a>
            <a href="#servicos" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Serviços</a>
            <a href="#sobre" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Sobre</a>
            <a href="#contato" className="mx-4 text-gray-700 hover:text-[#35DD48] transition-colors">Contato</a>
          </nav>
          <div>
            <a href="https://forms.gle/NNfEEyxHa6v6JPuJ6" target="_blank" className="bg-[#35DD48] hover:bg-[#008440] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Sua privacidade é importante para nós. A seguir, explicamos como coletamos, usamos e protegemos as informações que você compartilha conosco.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Informações Coletadas</h2>
            <p className="text-gray-700 mb-4">Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <strong>Informações fornecidas pelo usuário:</strong> Quando você preenche um formulário de contato, contratando nossos serviços ou interagindo com nossa plataforma, podemos coletar dados como nome, e-mail, telefone, etc.
              </li>
              <li className="mb-2">
                <strong>Informações de navegação:</strong> Utilizamos cookies e tecnologias semelhantes para rastrear informações de navegação, como seu endereço IP, páginas visitadas e tempo de permanência no site.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Uso das Informações</h2>
            <p className="text-gray-700 mb-4">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Oferecer e melhorar nossos serviços.</li>
              <li className="mb-2">Personalizar a experiência do usuário em nosso site.</li>
              <li className="mb-2">Compreender como você interage com nosso conteúdo e otimizar nosso marketing.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Compartilhamento de Informações</h2>
            <p className="text-gray-700 mb-6">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar serviços, ou quando exigido por lei.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies</h2>
            <p className="text-gray-700 mb-6">
              Nosso site usa cookies para melhorar a experiência de navegação. Você pode desabilitar os cookies no seu navegador, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Segurança das Informações</h2>
            <p className="text-gray-700 mb-6">
              Tomamos medidas razoáveis para proteger suas informações pessoais, mas não podemos garantir segurança absoluta.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Alterações nesta Política</h2>
            <p className="text-gray-700 mb-6">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você verifique esta página regularmente.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#35DD48]">Sellou</h4>
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

export default PrivacyPolicy;
