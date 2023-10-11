import Chart from 'src/components/Basic/Chart'
import AffiliatesList from 'src/components/Recuiter/AffiliatesList'
function Dashboard() {
  return (
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
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Affiliates</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                 <AffiliatesList/>
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
          
  )
}

export default Dashboard