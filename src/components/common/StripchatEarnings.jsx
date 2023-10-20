import { useState } from 'react';
import ActorStripchatEarningsChart from 'src/components/common/charts/ActorStripchatEarnings'


function StripchatEarnings({stripChatData,stripchatAmount}) {
  const [showDropdown,toggleDropdown] = useState(false)
  const [representation , setRepresentation ] = useState('table')
  return (
    <>
  <div className="mb-8">
    <button onClick={()=> toggleDropdown(prev => !prev) } id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none      focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Data Representation 
          <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
      </button>
    <div id="dropdown" className={`z-10 absolute ${!showDropdown && 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a onClick={(e)=> {e.preventDefault(); setRepresentation('table') ;toggleDropdown(false) }} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Table</a>
          </li>
          <li>
            <a href="#" onClick={(e)=> {e.preventDefault(); setRepresentation('chart');toggleDropdown(false)}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chart</a>
          </li>
        </ul>
    </div>
  </div>
    { representation == 'table' && 
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
    }
      { representation == 'chart' && 
        <center>
          <ActorStripchatEarningsChart
            earnings={stripChatData.earnings}
          />
        </center>
      }
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