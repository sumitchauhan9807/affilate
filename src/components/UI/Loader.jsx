import 'src/assets/css/loader.css'
function Loader(props) {
  return (
<div>
  <div
    className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
  >
    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
     {props.progress &&
      <div className="w-1/2 mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${props.progress}%`}}> {props.progress}%</div>
      </div> 
     }
  </div>
</div>
  )
}
export default Loader