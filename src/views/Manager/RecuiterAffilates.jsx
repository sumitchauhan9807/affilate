import { useEffect, useState } from "react"
import {apolloClient} from 'src/index'
import {GET_RECUITER_AFFILIATES_MANAGER} from 'src/queries'
import Loader from 'src/components/UI/Loader'
import { useParams } from "react-router-dom";
import AffiliatesList from 'src/components/common/AffiliatesList'

function RecuiterAffiliates() {

  let [affiliates,setAffiliates] = useState({
    affiliates:[]
  })
  const [isLoading,setLoading] = useState(false)
  const params = useParams();
  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data} = await apolloClient.query({
          query: GET_RECUITER_AFFILIATES_MANAGER,
          variables:{
            id:params.id
          },
          fetchPolicy: "no-cache" 
        })
        setLoading(false)
        if(data.getRecuiterAffiliatesManager){
          setAffiliates(data.getRecuiterAffiliatesManager)
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
          <h2 className="text-gray-500 text-lg font-semibold pb-4">My Actors</h2>
          <div className="my-1" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
         <AffiliatesList
           affiliates={affiliates.affiliates}
           submittedMediaUrl='/manager/affiliatesmedia'
           stripchatEarningsUrl='/manager/stripchatEarnings'
           stripchatPayoutUrl='/manager/stripchatPayouts'
         />
        </div>
     
    </div>
    {isLoading && <Loader/>}
   
  </>
  )
}
export default RecuiterAffiliates


