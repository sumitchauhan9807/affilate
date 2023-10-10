import BackgroundImage from '../assets/images/login-back.jpg'
import MazuLogo from '../assets/images/mazu-logo.png'
import {RECUITER_LOGIN} from 'src/queries'
import {apolloClient} from 'src/index'
import React ,{useState,useEffect,useRef} from 'react'
import Loader from 'src/components/UI/Loader'
import { useAlert } from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import {setUserData} from 'src/redux/index'
import { Link, useNavigate } from "react-router-dom";
function Login() {

  let username = React.createRef();
  let password = React.createRef();
	let [isLoading,setLoading] = useState(false)
  const alertUser = useAlert()
	const dispatch = useDispatch()
  const navigate = useNavigate();

  const doLogin = async () => {
    try {
      setLoading(true)
      let {data} = await apolloClient.mutate({
        mutation: RECUITER_LOGIN,
        variables: {
          username: username.current.value,
          password: password.current.value
        },
      })
      setLoading(false)
     if(data.recuiterLogin){ 
      alertUser.success("Logged in successfully")
      dispatch(setUserData(data.recuiterLogin.user,data.recuiterLogin.token,data.recuiterLogin.userType))
      setTimeout(()=>{
        navigate("/recuiter");
      },1000)
     }
    }catch(e) {
      setLoading(false)
      alertUser.error(e.message)
    }
  }


  return (
    <div>
      {isLoading && <Loader/> }
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-current lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
              <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{enableBackground: 'new 0 0 225 225'}} xmlSpace="preserve">
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                  <g>
                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Mazu Productions</div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold">Affilate Log in</h2>
          <div className="mt-12">
            
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                <input ref={username} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="username" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input ref={password} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Enter your password" />
              </div>
              <div className="mt-10">
                <button type="button" onClick={doLogin} className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg">
                  Log In
                </button>
              </div>
          
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{'background':`url(${BackgroundImage})`}} className=" lg:flex items-center justify-center  flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
         <img src={MazuLogo}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login