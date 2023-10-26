export default function Navbar() {

  const menus = ['Sobre mim', 'Tecnologias', 'Projetos']

  return (
    <nav className="flex justify-center bg-primary text-white md:justify-end">
      <ul className="flex items-center font-quantico font-bold sm:text-xl">
        {menus.map((menu, index) => (
          <li key={index} className="cursor-pointer p-4 hover:bg-white hover:text-primary">{menu}</li>
        ))}
      </ul>
    </nav>
  )
}