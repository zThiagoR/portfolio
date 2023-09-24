export default function AboutMe() {
  return (
    <section id="aboutme" className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row-reverse md:h-screen">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/56285370?v=4"
            alt=""
            className="h-48 w-48 rounded-full md:h-64 md:w-64"
          />
        </div>
        <div className="mx-auto max-w-screen-md p-8 text-center text-white">
          <div className="text-4xl font-bold">Thiago M.</div>
          <span className="text-lg">FullStack Developer</span>
          <h2 className="mt-2 font-economica text-2xl font-medium">Quem sou eu?</h2>
          <p>
            Como desenvolvedor full-stack, minha paixão está em criar soluções web criativas e inovadoras. Tenho experiência tanto no desenvolvimento frontend quanto no backend, e meu foco é aprendizado contínuo e aprimoramento de minhas habilidades.
            <br />
            <br />
            Apaixonado por tecnologia e sempre em busca de novos conhecimentos. Atualmente estou cursando Ciências da Computação no último período na Universidade Estácio de Sá.
          </p>
        </div>
      </div>
    </section>
  );
}
