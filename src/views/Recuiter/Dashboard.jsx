import Chart from 'src/components/Basic/Chart'
import AffiliatesList from 'src/components/Recuiter/AffiliatesList'
function Dashboard() {
  return (
    <div className="flex-1 p-4">
      <div className="bg-white p-8 rounded-md">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">My Actors</h2>
          <div className="my-1" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
          <AffiliatesList/>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
          <div className="my1-" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px  mb-6" /> 
          <div className="chart-container items-center" style={{position: 'relative', width: '100%'}}>
          <center><Chart
            type="area"
          /></center>
        
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
          <div className="my-1" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
          <div className="chart-container" style={{position: 'relative',  height:"150px",width: '100%'}}>
          <center><Chart
            type="line"
          /></center>
            <canvas id="commercesChart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard