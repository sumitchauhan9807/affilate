import { useEffect, useState } from "react"
import {apolloClient} from 'src/index'
import {GET_MANAGER_EARNIGS} from 'src/queries'
import Loader from 'src/components/UI/Loader'
import { useParams } from "react-router-dom";
import EarningsTable from 'src/components/common/EarningsTable'

function ManagerEarnings() {
  const [isLoading,setLoading] = useState(false)
  let [earnings,setEarnings] = useState([])
  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data} = await apolloClient.query({
          query: GET_MANAGER_EARNIGS,
          fetchPolicy: "no-cache" 
        })
        setLoading(false)
        if(data.getManagerEarnings){
          setEarnings(data.getManagerEarnings)
        }
      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])
  return (
    <>
    <div className="flex-1 p-4">
      
      <div className="bg-white p-8 rounded-md">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">My Earnings</h2>
          <div className="my-1" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
         <EarningsTable
           earnings={earnings}
         />
        </div>
     
    </div>
    {isLoading && <Loader/>}
   
  </>
  )
}
//
export default ManagerEarnings