import { useEffect, useState } from "react"
import {apolloClient} from 'src/index'
import {GET_RECUITER_AFFILIATES} from 'src/queries'
import {getUrlFT} from 'src/helpers'
import Loader from 'src/components/UI/Loader'
import {
 XCircleIcon,
 CheckBadgeIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"
function AffiliatesList() {

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
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Image</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Full Name</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Username</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Profile Complete</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">View Submitted Media</th>
      </tr>
    </thead>
    <tbody>
      {affiliates.map((aff)=>{
        return (
          <tr className="hover:bg-grey-lighter">
            <td className="text-center py-2 px-4 border-b border-grey-light"><center><img src={getUrlFT(aff.profilePic)} alt="Foto Perfil" className="rounded-full h-10 w-10" /></center></td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{aff.base_profile.firstName + " "+ aff.base_profile.lastName}</td>

            <td className="text-center py-2 px-4 border-b border-grey-light">{aff.username}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{aff.email}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">
              <center>
                {aff.profileComplete ? <CheckBadgeIcon style={{color:"green"}}  className="h-8 w-8"/> :<XCircleIcon style={{color:"red"}}  className="h-8 w-8"/>}
              </center>
            </td>
            <td className="text-center py-2 px-4 border-b border-grey-light">
              <Link to={`/recuiter/usermedia/${aff.id}`} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Media
              </Link>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  </>
  )
}
export default AffiliatesList


