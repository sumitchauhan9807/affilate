import { useEffect,useState } from "react"
import {STRIPCHAT_PAYOUTS} from 'src/queries'
import {apolloClient} from 'src/index'
import {useParams} from 'react-router-dom';
import Loader from 'src/components/UI/Loader'
import { useAlert } from 'react-alert'
import StripchatPayouts from 'src/components/common/StripchatPayouts'

function ActorStripchatPayouts() {

  let [isLoading,setLoading] = useState(false)
  const params = useParams();
  const alertUser = useAlert()
  let [stripChatData,setStripData] = useState({
    payouts:[],
    actor:{}
  })

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: STRIPCHAT_PAYOUTS,
          variables: {
            id:params.id,
          },
          fetchPolicy:'no-cache'
        })
        if(data.actorStripchatPayouts) {
          setStripData(data.actorStripchatPayouts)
        }
       setLoading(false)
      }catch(e) {
        setLoading(false)
        alertUser.error(e.message)
      }
    })()
  },[])
  return (
    <div className="flex-1 p-4">
    {isLoading && <Loader/>}
   <div className="bg-white p-8 rounded-md">
       <h2 className="text-gray-500 text-lg font-semibold pb-4">Stripchat Earnings of {stripChatData?.actor?.username}</h2>
       <div className="my-1" /> 
       <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
       <StripchatPayouts
         stripChatData={stripChatData}
         />
     </div>
</div>
  )
}
export default ActorStripchatPayouts