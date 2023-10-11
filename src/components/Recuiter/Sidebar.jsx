import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation();
  let pathname = location.pathname
  return(
    <div className="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
    <nav>
      <Link to="/recuiter" className={`block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white ${pathname == '/recuiter' && 'bg-cyan-400 text-white'}`}>
        <i className="fas fa-home mr-2" />Dashboard
      </Link>
      <Link to="/recuiter/affiliate" className={`block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white ${pathname == '/recuiter/affiliate' && 'bg-cyan-400 text-white'}`}>
        <i className="fas fa-file-alt mr-2" />Affiliate Link
      </Link>
      <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
        <i className="fas fa-users mr-2" />Usuarios
      </a>
      <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
        <i className="fas fa-store mr-2" />Comercios
      </a>
      <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
        <i className="fas fa-exchange-alt mr-2" />Transacciones
      </a>
    </nav>
    {/* Ítem de Cerrar Sesión */}
    <a className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto" href="#">
      <i className="fas fa-sign-out-alt mr-2" />Cerrar sesión
    </a>
    {/* Señalador de ubicación */}
    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2" />
    {/* Copyright al final de la navegación lateral */}
    <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>
  </div>
  )
}

export default Sidebar