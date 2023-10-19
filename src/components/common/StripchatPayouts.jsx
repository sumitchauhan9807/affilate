const getAmountUSD = (amount) => {
  return amount * 0.05
}

function StripchatPayouts({stripChatData}) {
  return (
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
        Amount Released (usd)
        </th>
        <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
        Company Share (usd)
        </th>
        <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
        Actor Share (usd)
        </th>
        <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
        Manager share (usd)
        </th>
        <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
        Recuiter Share (usd)
        </th>
      </tr>
    </thead>
    <tbody>
     {stripChatData.payouts.map((payout)=>{
       return (
        <tr className="hover:bg-grey-lighter">
        <td scope="row" className="text-center py-2 px-4 border-b border-grey-light">
         {getAmountUSD(payout.amount)}
        </td>
        <td className="text-center py-2 px-4 border-b border-grey-light">
        {getAmountUSD(payout.companyShare)}
        </td>
        <td className="text-center py-2 px-4 border-b border-grey-light">
        {getAmountUSD(payout.actorShare)}
        </td>
        <td className="text-center py-2 px-4 border-b border-grey-light">
        {getAmountUSD(payout.managerShare)}
        </td>
        <td className="text-center py-2 px-4 border-b border-grey-light">
        {getAmountUSD(payout.recuiterShare)}
        </td>
        
      </tr>
       )
     })}
    </tbody>
  </table>
  )
}
export default StripchatPayouts