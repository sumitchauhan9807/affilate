import { useEffect, useState } from "react";
import { GET_ACTOR_MEDIA_RECUITER } from "src/queries";
import { apolloClient } from "src/index";
import { useParams } from "react-router-dom";
import UserMedia from 'src/components/common/UserMedia'
import Loader from 'src/components/UI/Loader'

function ViewUserMedia() {

  const params = useParams();
  let [mediaData,setMediaData] = useState({})
  const [isLoading,setLoading] = useState(false)
  
  useEffect(() => {
    (async ()=>{
      try {
        setLoading(true)
        let { data } = await apolloClient.query({
          query: GET_ACTOR_MEDIA_RECUITER,
          variables: {
            id: params.id,
          },
          fetchPolicy: "no-cache",
        });
        if(data.getActorMedia) {
          setMediaData(data.getActorMedia)
        }
        setLoading(false)
      }catch(e) {
        setLoading(false)
        alert(e)
      }
    })()
  }, []);

  if(!mediaData.mediaGallery) return <Loader/>
  return (
    <>
    {isLoading && <Loader/>}
      <div className="flex-1 p-4">
        <UserMedia
        mediaData={mediaData}
        />
      </div>
    </>
  );
}

export default ViewUserMedia;

