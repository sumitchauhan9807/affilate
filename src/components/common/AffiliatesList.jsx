import {
  XCircleIcon,
  CheckBadgeIcon
 } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"
import {getUrlFT} from 'src/helpers'

function AffiliatesList({affiliates,submittedMediaUrl}) {
  return (
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Image</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Full Name</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Username</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Skype</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Phonenumber</th>

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
            <td className="text-center py-2 px-4 border-b border-grey-light">{aff.user_basic ? aff.user_basic.skype : ""}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{aff.base_profile.phone}</td>

            <td className="text-center py-2 px-4 border-b border-grey-light">
              <center>
                {aff.profileComplete ? <CheckBadgeIcon style={{color:"green"}}  className="h-8 w-8"/> :<XCircleIcon style={{color:"red"}}  className="h-8 w-8"/>}
              </center>
            </td>
            <td className="text-center py-2 px-4 border-b border-grey-light">
              <Link to={`${submittedMediaUrl}/${aff.id}`} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Media
              </Link>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default AffiliatesList