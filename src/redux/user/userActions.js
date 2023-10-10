import { SET_USER_DATA ,UPDATE_SETUP_STEP,LOG_OUT_USER,CHNAGE_USERNAME ,SET_COMMUNITY_DOMAIN}  from './userTypes';

export const setUserData = (userData,token,userType) => {
  return {
    type: SET_USER_DATA,
    userData:userData,
    token:token,
    userType:userType
  }
}

export const updateSetupStep = (step) => {
  return {
    type: UPDATE_SETUP_STEP,
    stepCount:step
  }
}

export const logoutUser = () => {
  return {
    type: LOG_OUT_USER,
  }
}

export const changeUserName  = () =>{
  return {
    type:CHNAGE_USERNAME
  }
}

export const setCommunityDomain  = (domain) =>{
  return {
    type:SET_COMMUNITY_DOMAIN,
    domain:domain
  }
}