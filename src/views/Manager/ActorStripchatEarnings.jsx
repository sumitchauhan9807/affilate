import { useEffect ,useState } from "react"
import {apolloClient} from 'src/index'
import {Link, useParams} from 'react-router-dom';
import { useAlert } from 'react-alert'
import {STRIP_CHAT_DATA} from 'src/queries'
import StripchatEarnings from 'src/components/common/StripchatEarnings'
import Loader from 'src/components/UI/Loader'

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';



function ActorStripchatEarnings() {
  let [isLoading,setLoading] = useState(false)
  const [startDate, setStartDate] = useState(new Date('2023-10-05'));
  const [endDate, setEndDate] = useState(new Date());

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

  const resetFilter = () => {
    setStartDate(new Date('2023-10-05'))
    setEndDate(new Date())
  }
  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: STRIP_CHAT_DATA,
          variables: {
            id:params.id,
            start:startDate,
            end:endDate
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
  },[startDate,endDate])
  return (
   
    <div className="flex-1 p-4">
       {isLoading && <Loader/>}
      <div className="bg-white p-8 rounded-md">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">Stripchat Earnings of {stripChatData?.actor?.username}</h2>
          Start date  <DatePicker onChange={setStartDate} value={startDate} /> &nbsp;
          End Date  <DatePicker  onChange={setEndDate} value={endDate} />
      <br/>
      <br/>
    <button onClick={() => resetFilter() } className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Filter</button>
          <div className="my-1" /> 
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> 
          <StripchatEarnings
            stripChatData={stripChatData}
            stripchatAmount={stripchatAmount}
            representation='table'
            />
        </div>
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-32 p-4">
      <hr className="mb-6"/>
    </div>
  </div>
    
  )
} 
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
export default ActorStripchatEarnings