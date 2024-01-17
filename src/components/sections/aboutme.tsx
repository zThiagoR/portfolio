export default function AboutMe() {
  return (
    <section id="Sobre mim" className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center lg:h-screen lg:flex-row-reverse">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/56285370?v=4"
            alt=""
            className="h-48 w-48 rounded-full lg:h-64 lg:w-64"
          />
        </div>
        <div className="mx-auto max-w-screen-md p-8 text-center text-white">
          <div className="text-5xl font-bold">Thiago M.</div>
          <span className="text-xl">FullStack Developer</span>
          <h2 className="mt-2 font-poppins text-2xl font-medium">Quem sou eu?</h2>
          <p className="mt-4 text-lg">
          Sou um desenvolvedor full-stack com competências sólidas tanto em frontend quanto em backend, especializado na criação de soluções web inovadoras e eficientes. Meu compromisso com o desenvolvimento contínuo de habilidades técnicas e adaptação às tendências emergentes do setor é um pilar central da minha abordagem profissional.
          <br />
          <br />
          Atualmente, estou concluindo o curso de Ciências da Computação na Universidade Estácio, uma etapa crucial para aprofundar minhas habilidades teóricas e práticas. Minha abordagem ao desenvolvimento de software combina rigor técnico com soluções criativas, permitindo-me enfrentar e superar desafios tecnológicos com eficácia e inovação.
          </p>
        </div>
      </div>
    </section>
  );
}
