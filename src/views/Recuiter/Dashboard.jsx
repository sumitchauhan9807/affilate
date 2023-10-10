import Chart from 'src/components/Basic/Chart'
function Dashboard() {
  return (
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        
        <div className="flex flex-col h-screen bg-gray-100">
          {/* Barra de navegación superior */}
          <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:flex items-center"> {/* Se oculta en dispositivos pequeños */}
                <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2" />
                <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
              </div>
              <div className="md:hidden flex items-center"> {/* Se muestra solo en dispositivos pequeños */}
                <button id="menuBtn">
                  <i className="fas fa-bars text-gray-500 text-lg" /> {/* Ícono de menú */}
                </button>
              </div>
            </div>
            {/* Ícono de Notificación y Perfil */}
            <div className="space-x-5">
              <button>
                <i className="fas fa-bell text-gray-500 text-lg" />
              </button>
              {/* Botón de Perfil */}
              <button>
                <i className="fas fa-user text-gray-500 text-lg" />
              </button>
            </div>
          </div>
          {/* Contenido principal */}
          <div className="flex-1 flex">
            {/* Barra lateral de navegación (oculta en dispositivos pequeños) */}
            <div className="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
              <nav>
                <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
                  <i className="fas fa-home mr-2" />Inicio
                </a>
                <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
                  <i className="fas fa-file-alt mr-2" />Autorizaciones
                </a>
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
            {/* Área de contenido principal */}
            <div className="flex-1 p-4">
              {/* Campo de búsqueda */}
              <div className="relative max-w-md w-full">
                <div className="absolute top-1 left-2 inline-flex items-center p-2">
                  <i className="fas fa-search text-gray-400" />
                </div>
                <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
              </div>
              {/* Contenedor de las 4 secciones (disminuido para dispositivos pequeños) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                {/* Sección 1 - Gráfica de Usuarios (disminuida para dispositivos
            
                <!-- Sección 1 - Gráfica de Usuarios */}
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                  <div className="my1-" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px  mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container items-center" style={{position: 'relative', width: '100%'}}>
                  <center><Chart
                    type="area"
                  /></center>
                
                  </div>
                </div>
                {/* Sección 2 - Gráfica de Comercios */}
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container" style={{position: 'relative',  height:"150px",width: '100%'}}>
                  <center><Chart
                    type="line"
                  /></center>
                    <canvas id="commercesChart" />
                  </div>
                </div>
                {/* Sección 3 - Tabla de Autorizaciones Pendientes (disminuida para dispositivos pequeños) */}
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <table className="w-full table-auto text-sm">
                    <thead>
                      <tr className="text-sm leading-normal">
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                        <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                      </tr>
                      {/* Añade más filas aquí como la anterior para cada autorización pendiente */}
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">María Gómez</td>
                        <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">Carlos López</td>
                        <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                        <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                        <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                        <td className="py-2 px-4 border-b border-grey-light">Luis Martínez</td>
                        <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Botón "Ver más" para la tabla de Autorizaciones Pendientes */}
                  <div className="text-right mt-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                      Ver más
                    </button>
                  </div>
                </div>
                {/* Sección 4 - Tabla de Transacciones (disminuida para dispositivos pequeños) */}
                <div className="bg-white p-4 rounded-md mt-4">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <table className="w-full table-auto text-sm">
                    <thead>
                      <tr className="text-sm leading-normal">
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                        <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Ana Torres</td>
                        <td className="py-2 px-4 border-b border-grey-light">28/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$2000</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Juan Ramírez</td>
                        <td className="py-2 px-4 border-b border-grey-light">29/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1800</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">María Gómez</td>
                        <td className="py-2 px-4 border-b border-grey-light">30/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$2100</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Luis González</td>
                        <td className="py-2 px-4 border-b border-grey-light">31/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1700</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Laura Pérez</td>
                        <td className="py-2 px-4 border-b border-grey-light">01/08/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$2400</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                        <td className="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1950</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                        <td className="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1850</td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
                        <td className="py-2 px-4 border-b border-grey-light">04/08/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$2300</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Botón "Ver más" para la tabla de Transacciones */}
                  <div className="text-right mt-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Script para las gráficas */}
      </div>
  )
}

export default Dashboard