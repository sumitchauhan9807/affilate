import { useEffect, useState } from "react"
import {apolloClient} from 'src/index'
import {GET_RECUITER_AFFILIATES} from 'src/queries'
import Loader from 'src/components/UI/Loader'
import AffiliateList from 'src/components/common/AffiliatesList'
function RecuiterAffiliatesList() {

  let [affiliates,setAffiliates] = useState([])
  const [isLoading,setLoading] = useState(false)

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data} = await apolloClient.query({
          query: GET_RECUITER_AFFILIATES,
          fetchPolicy: "no-cache" 
        })
        setLoading(false)
        if(data.getRecuiterAffiliates){
          setAffiliates(data.getRecuiterAffiliates)
        }
      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])
  return (
    <>
    {isLoading && <Loader/>}
    <AffiliateList
      affiliates={affiliates}
      submittedMediaUrl='/recuiter/usermedia'
    />
  </>
  )
}
export default RecuiterAffiliatesList


