import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import Dashboard from 'src/views/Recuiter/Dashboard'

import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'src/components/UI/Loader'





function RouterDashboard() {
  console.log("ModelDashboard RENDER")
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
  if(user.userType != 'recuiter') {
    window.location.href = '/login'
    return <Loader/>
  }

  return (
    <React.Fragment>
      <Routes>
        <Route exact path ="/recuiter" element= {<Dashboard/>}/> 
      </Routes>
    </React.Fragment>
  )
}

export default RouterDashboard