function EarningsTable({earnings}) {
  return (
    <table className="w-full table-auto text-sm">
    <thead>
      <tr className="text-sm leading-normal">
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Total Amount</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Company Share</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Recuiter</th>
        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Manager Share</th>
      </tr>
    </thead>
    <tbody>
      {earnings.map((earning)=>{
        return (
          <tr className="p-8 hover:bg-grey-lighter h-12">
            <td className="text-center py-2 px-4 border-b border-grey-light">{getAmountUSD(earning.amount)}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{getAmountUSD(earning.companyShare)}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{earning?.recuiter?.username}</td>
            <td className="text-center py-2 px-4 border-b border-grey-light">{getAmountUSD(earning.managerShare)}</td>
            
          </tr>
        )
      })}
    </tbody>
    </table>
  )
}

const getAmountUSD = (amount) => {
  return amount * 0.05
}
export default EarningsTable