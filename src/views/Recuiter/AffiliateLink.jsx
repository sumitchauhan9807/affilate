import {useSelector,useDispatch} from 'react-redux'
import { useAlert } from 'react-alert'

function AffiliateLink() {
  const alertUser = useAlert()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  let affiliateLink = `https://mazuproductions.com/register?aff=${user.userData.username}`
  const copyToClipbaord = () => {
    navigator.clipboard.writeText(affiliateLink);
    alertUser.success('copied to clipboard')
  }
  return (
    <div className=" w-full p-4 text-center">
     <center>
     <div  className="text-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Following is your Affiliate Link</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400"><b><a href={affiliateLink} target="_blank">{affiliateLink}</a></b></p>
        <button onClick={copyToClipbaord} type="button" class=" mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Copy Your Affiliate Link</button>
      </div>
       </center>
    </div>
  )
}

export default AffiliateLink