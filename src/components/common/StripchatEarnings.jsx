function StripchatEarnings({stripChatData,stripchatAmount}) {
  return (
    <>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Earnings
              </th>
              <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Start Date
              </th>
              <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                End Date
              </th>
              <th scope="col" className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody>
           {stripChatData.earnings.map((stripData)=>{
             return (
              <tr className="hover:bg-grey-lighter">
              <td scope="row" className="text-center py-2 px-4 border-b border-grey-light">
                {stripData.totalEarnings}
              </td>
              <td className="text-center py-2 px-4 border-b border-grey-light">
               {formatDate(stripData.startDate)}
              </td>
              <td className="text-center py-2 px-4 border-b border-grey-light">
               {formatDate(stripData.endDate)}
              </td>
              <td className="text-center py-2 px-4 border-b border-grey-light">
               {stripData.isPaid ? <span style={{color:'green'}}>Payment Released</span> : <span style={{color:'blue'}}>Payment Pending</span>}
              </td>
            </tr>
             )
           })}
          </tbody>
        </table>
       
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400  p-4">
        <span className="font-bold uppercase text-gray-500 mb-4">Unpaid Amount : {stripchatAmount.unpaidAmount}</span> <br/>
        <span className="font-bold uppercase text-gray-500">Paid Amount : {stripchatAmount.amountPaid}</span><br/>
        <span className="font-bold uppercase text-gray-500 mb-4">Total Amount Earned  : {stripchatAmount.totalAmount}</span> 
      </div>
      </>
  
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
export default StripchatEarnings