// import Model from './Model/router'
// import Website from './website/router'
import Recuiter from 'src/views/Recuiter/router'
import Manager from 'src/views/Manager/router'
import Login from 'src/views/Login'
import { useHistory ,useLocation } from 'react-router-dom';
import React, { useEffect ,useRef,useState,lazy,Suspense} from 'react'
// import 'index.css'


function IndexWeb() {
  
const location = useLocation()
  let currentPath = location.pathname
  let isRecuiter = currentPath.includes('recuiter')
  let isManager = currentPath.includes('manager')
  let isWebsite = !isRecuiter  && !isManager


  console.log(isManager,"isManager")
  // let isAdmin =  currentPath.includes('admin')
  // let isWebsite = !isDashboard && !isAdmin
  
  
  return (
    <React.Fragment>
      {isRecuiter && <Recuiter/>}
      {isWebsite && <Login/>}
      {isManager && <Manager/>}
    </React.Fragment>
  )
}

export default  IndexWeb