import HoverGrow from "./components/HoverGrow";

function App() {
  return (
    <main className="container mx-auto p-2 md:p-6 w-full text-gray-50 flex flex-col items-center space-y-2">
      <div className="bg-gray-700 p-4 sticky top-0 rounded-md w-full flex flex-row justify-between items-center uppercase shadow-md z-20">
        <span>
          <img
            alt="Logo Wentz Dev"
            srcSet="https://i.imgur.com/vkBFMZ5.png"
            className="size-12"
          />
        </span>
        <nav>
          <ul className="flex flex-row justify-between gap-2 items-center">
            <li>
              <a
                href="#"
                className="rounded-md from-primary to-secondary shadow-md hover:translate-y-7 bg-gradient-to-r py-2 px-3 hover:text-xl hover:font-bold"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#Projetos"
                className="rounded-md from-primary to-secondary shadow-md hover:translate-y-7 bg-gradient-to-r py-2 px-3 hover:text-xl hover:font-bold"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#Servicos"
                className="rounded-md from-primary to-secondary shadow-md hover:transform hover:translate-y-7 bg-gradient-to-r py-2 px-3 hover:text-xl hover:font-bold"
              >
                Serviços
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-gray-700 bg-opacity-40 p-4 rounded-md w-full flex flex-col justify-evenly items-center space-y-3 min-h-[calc(100vh-100px)]">
        <h1 className="text-5xl font-bold text-gray-50 w-full h-full text-center animate-pulse">
          Wentz.dev Transformando seus sonhos em códigos, e os códigos em
          realidade!
        </h1>
        <p id="Projetos"></p>
      </div>

      <div className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10">
        <HoverGrow />
      </div>

      <section
        id="Servicos"
        className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10"
      >
        <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
          Transforme Suas Ideias em Realidade Digital
        </h1>
        <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
          Desenvolvimento Web, Aplicações Mobile e Desktop Eu crio soluções sob
          medida para transformar suas ideias em experiências digitais
          incríveis. Com uma abordagem centrada no usuário, ofereço serviços
          completos de desenvolvimento de sites, landing pages, portfólios,
          aplicações web, mobile e desktop.
        </p>
      </section>

      <section className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10">
        <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
          Nossos Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Desenvolvimento web
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Criação de sites e portais modernos, funcionais e responsivos.
              Desde sites institucionais até plataformas complexas, garantimos
              que seu negócio esteja sempre online e otimizado para todos os
              dispositivos.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Landing Pages
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Projetos focados em conversão, com design atrativo e
              funcionalidade simplificada. Ideal para campanhas de marketing e
              capturas de leads, nossas landing pages são feitas para gerar
              resultados.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Portfólios
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Mostre o seu trabalho de forma profissional com um portfólio
              impactante. Crio portfólios personalizados que destacam suas
              habilidades e realizam suas ideias em um design que impressiona.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Aplicações Web
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Desenvolvimento de sistemas e aplicativos web robustos e
              escaláveis, que automatizam processos e aumentam a eficiência do
              seu negócio. A maneira mais moderna de gerenciar o seu negócio!
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Aplicações Mobile
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Transforme sua ideia em um aplicativo móvel inovador, com uma
              interface intuitiva e performance excelente para dispositivos
              móveis. Crie um aplicativo que atenda às necessidades dos seus
              clientes.
            </p>
          </div>

          <div className="bg-gray-700 rounded-md p-2">
            <h2 className="bg-primary w-fit py-1 px-2 rounded-md shadow-md">
              Aplicações Desktop
            </h2>
            <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
              Soluções completas para quem precisa de softwares para desktop.
              Criação de aplicativos personalizados para Windows e Mac, com foco
              em funcionalidade e usabilidade. O que você precisa para seu
              negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 bg-opacity-40 p4- rounded-md w-full flex flex-col justify-between items-center space-y-3 p-2 md:p10">
        <div className="bg-gray-700 rounded-md p-2">
          <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
            Por que Escolher Nossos Serviços?
          </h1>
          <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
            O meu foco é na criação de soluções inovadoras e impactantes para o
            seu negócio. Estou sempre disponível para ajudar e responder às suas
            necessidades. Ofereço soluções personalizadas para atender às suas
            necessidades e objetivos. Além de qualidade, inovação e suporte
            completo.
          </p>
        </div>
      </section>

      <section className="bg-gray-700 bg-opacity-40 rounded-md w-full flex flex-col justify-between p-2">
        <div className="bg-gray-700 rounded-md p-2 space-y-3">
          <h1 className="w-full text-center bg-gradient-to-r from-secondary to-primary text-white text-xl font-bold rounded-lg py-4">
            Vamos Conversar?
          </h1>
          <p className="text-gray-50 text-justify bg-gray-700 py-2 px-4 rounded-md">
            Quer discutir uma ideia ou começar seu projeto? Entre em contato e
            transforme suas ideias em realidade digital.
          </p>
          <span className="flex flex-row justify-center">
            <a href="https://api.whatsapp.com/send?phone=5534996974791&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento.">
              <img
                src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                alt="whatsapp"
              />
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
