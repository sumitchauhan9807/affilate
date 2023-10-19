import { useEffect, useState } from 'react';
import RecuitersList from 'src/components/common/RecuitersList'
import {GET_MANAGER_RECUITERS_MANAGER} from 'src/queries'
import Loader from 'src/components/UI/Loader'
import { apolloClient } from "src/index";

function Recuiters() {

  const [isLoading,setLoading] = useState(false)
  const [recuiters,setRecuiters] = useState([])
  
  useEffect(() => {
    (async ()=>{
      try {
        setLoading(true)
        let { data } = await apolloClient.query({
          query: GET_MANAGER_RECUITERS_MANAGER,
          fetchPolicy: "no-cache",
        });
        if(data.getManagerRecuitersManager) {
          setRecuiters(data.getManagerRecuitersManager)
        }
        setLoading(false)
      }catch(e) {
        setLoading(false)
        alert(e)
      }
    })()
  }, []);

  return (
   <div className="flex-1 p-4">
    {isLoading && <Loader/>}
    <div className="bg-white p-8 rounded-md">
      <h2 className="text-gray-500 text-lg font-semibold pb-4">My Recuiters</h2>
      <div className="my-1" /> 
      <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
      <RecuitersList
      recuiters={recuiters}
      />
    </div>
  </div>
  )
}

export default Recuiters