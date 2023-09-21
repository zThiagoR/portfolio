export default function Navbar() {

  const menus = ['About me', 'Tecnologias', 'Projetos']

  return (
    <nav className="flex justify-center md:justify-end">
      <ul className="flex items-center space-x-4">
        {menus.map((menu, index) => (
          <li key={index} className="cursor-pointer p-4 hover:bg-white hover:text-primary">{menu}</li>
        ))}
      </ul>
    </nav>
  )
}