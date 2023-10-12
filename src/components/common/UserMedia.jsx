import {getUrl} from 'src/helpers'

function UserMedia({mediaData}) {
  console.log(mediaData,"mediaDatamediaDatamediaDatamediaData")
  let user = mediaData.user
  let gallery = mediaData.mediaGallery.media
  let pictures = gallery.filter(m => m.format.includes('image'))
  let videos = gallery.filter(m => m.format.includes('video'))

  return (
    <>
     <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h3 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">Default Media gallery of {user.username}</h3>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This is the default media gallery of .</p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            {pictures.map((pic)=>{
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="" src={pic.cloudUrl} />
                    {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic.cloudUrl} />
                    </div> */}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap -m-4 mt-12">
            {videos.map((video)=>{
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={video.cloudUrl} /> */}
                      <video width="320" height="240" controls>
                        <source src={video.cloudUrl} type={video.format}/>
                      </video>
                    {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default UserMedia