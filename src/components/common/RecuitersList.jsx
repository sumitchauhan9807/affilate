import { Link } from "react-router-dom"

function RecuitrsList({recuiters}) {
  console.log(recuiters)
  
  return (
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Full Name</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Username</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Actors Recuited</th>
      </tr>
    </thead>
    <tbody>
      {recuiters.map((recuiter)=>{
        return (
          <tr className="p-8 hover:bg-grey-lighter h-12">
            <td className="text-center py-2 px-4 border-b border-grey-light">{recuiter.email}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{recuiter.name}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{recuiter.username}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">
            <Link to={`/manager/recuites/affiliates/${recuiter.id}`} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Actors Recuited
              </Link>
            </td>
          </tr>
        )
      })}
    </tbody>
    </table>
  )
}

export default RecuitrsList