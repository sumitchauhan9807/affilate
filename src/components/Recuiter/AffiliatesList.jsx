import { useEffect, useState } from "react"
import {apolloClient} from 'src/index'
import {GET_RECUITER_AFFILIATES} from 'src/queries'
function AffiliatesList() {

  let [affiliates,setAffiliates] = useState([])
  useEffect(()=>{
    (async ()=>{
      let {data} = await apolloClient.query({
        query: GET_RECUITER_AFFILIATES,
      })
      if(data.getRecuiterAffiliates){
        setAffiliates(data.getRecuiterAffiliates)
      }
    })()
  },[affiliates])
  return (
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Image</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Username</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
      </tr>
    </thead>
    <tbody>
      {affiliates.map((aff)=>{
        return (
          <tr className="hover:bg-grey-lighter">
            <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
            <td className="py-2 px-4 border-b border-grey-light">{aff.username}</td>
            <td className="py-2 px-4 border-b border-grey-light">{aff.email}</td>
        </tr>
        )
      })}
      
    </tbody>
  </table>
  )
}
export default AffiliatesList