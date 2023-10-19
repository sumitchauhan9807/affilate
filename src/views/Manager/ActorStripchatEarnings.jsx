import { useEffect ,useState } from "react"
import {apolloClient} from 'src/index'
import {Link, useParams} from 'react-router-dom';
import { useAlert } from 'react-alert'
import {STRIP_CHAT_DATA} from 'src/queries'
import StripchatEarnings from 'src/components/common/StripchatEarnings'
import Loader from 'src/components/UI/Loader'

function ActorStripchatEarnings() {
  let [isLoading,setLoading] = useState(false)
  let [meta,setMeta] = useState({
    stripChatUsername:"",
  })
  const params = useParams();
  const alertUser = useAlert()
  let [stripChatData,setStripData] = useState({
    earnings:[],
    actor:null
  })
  const [stripchatAmount, setStripchatAmount] = useState({
    amountPaid:0,
    unpaidAmount:0,
    totalAmount:0
  });
  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: STRIP_CHAT_DATA,
          variables: {
            id:params.id,
          },
          fetchPolicy:'no-cache'
        })
        if(data.stripChatData) {
          setStripData(data.stripChatData)
          setStripchatAmount(()=>{
            return {
              amountPaid:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                let ret = currentValue.isPaid ? Number(currentValue.totalEarnings) + acc : acc
                return ret
              },0),
              unpaidAmount:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                let ret = !currentValue.isPaid ? Number(currentValue.totalEarnings) + acc : acc
                return ret
              },0),
              totalAmount:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                return Number(currentValue.totalEarnings) + acc 
              },0)
            }
          })
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
          <StripchatEarnings
            stripChatData={stripChatData}
            stripchatAmount={stripchatAmount}
            />
        </div>
  </div>
    
  )
} 

export default ActorStripchatEarnings