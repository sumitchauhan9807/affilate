import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'src/components/UI/Loader'
import Sidebar from 'src/components/Manager/Sidebar'

import Dashboard from 'src/views/Manager/Dashboard'
import Recuiters from 'src/views/Manager/Recuiters'
import RecuiterAffiliates from 'src/views/Manager/RecuiterAffilates'
import ViewUserMedia from 'src/views/Manager/ViewUserMedia'


function RouterDashboard() {
  console.log("manager RENDER")
  const dispatch = useDispatch()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  console.log(user)
  if(!user) return <Loader/>
  if(!user.token) {
    setTimeout(()=>{
      window.location.href = '/login'
    },1000)
    return <Loader/>
  }
  if(user.userType != 'manager') {
    window.location.href = '/login'
    return <Loader/>
  }
  return (
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <div className="flex flex-col h-screen bg-gray-100 overflow-x-auto">
          {/* Barra de navegación superior */}
          <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div className="flex items-center">
              asd
              <div className="hidden md:flex items-center"> {/* Se oculta en dispositivos pequeños */}
                <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2" />
                <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
              </div>
              <div className="md:hidden flex items-center"> {/* Se muestra solo en dispositivos pequeños */}
                <button id="menuBtn">
                  <i className="fas fa-bars text-gray-500 text-lg" /> {/* Ícono de menú */}
                </button>
              </div>
            </div>
            {/* Ícono de Notificación y Perfil */}
            <div className="space-x-5">
              <button>
                <i className="fas fa-bell text-gray-500 text-lg" />
              </button>
              {/* Botón de Perfil */}
              <button>
                <i className="fas fa-user text-gray-500 text-lg" />
              </button>
            </div>
          </div>
          {/* Contenido principal */}
          <div className="flex-1 flex">
            <Sidebar/>
              <Routes>
                <Route exact path ="/manager" element= {<Dashboard/>}/>
                <Route exact path ="/manager/recuites" element= {<Recuiters/>}/>
                <Route exact path ="/manager/recuites/affiliates/:id" element= {<RecuiterAffiliates/>}/>
                <Route exact path ="/manager/affiliatesmedia/:id" element= {<ViewUserMedia/>}/>



                {/* <Route exact path ="/manager/affiliate" element= {<AffiliateLink/>}/>
                <Route exact path ="/manager/usermedia/:id" element= {<ViewUserMedia/>}/> */}
            </Routes>
        </div>
        {/* Script para las gráficas */}
      </div>
    </div>
  )
}

export default RouterDashboard