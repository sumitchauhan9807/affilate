import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from "apollo-upload-client";
import {BrowserRouter} from "react-router-dom" 
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const baseUrl = "https://api.mazupanel.info/graphql"
// const baseUrl = "http://localhost:8080/graphql"


const getAuthToken = () => {
  let reduxData = localStorage.getItem('persist:root')
  if(!reduxData) return null
  reduxData = JSON.parse(reduxData)
  let userData = reduxData.user
  if(!userData) return null
  userData = JSON.parse(userData)
  return `Bearer ${userData.token}`
}

const getCommunityDomain = () => {
  let reduxData = localStorage.getItem('persist:root')
  if(!reduxData) return null
  reduxData = JSON.parse(reduxData)
  let userData = reduxData.user
  if(!userData) return null
  userData = JSON.parse(userData)
  return userData.community_domain
}
console.log(getAuthToken(),"asdasd")
const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: {
    ...previousContext.headers,
    authorization: getAuthToken(),
    'Community-Domain':'flirttool.com'
  }
}));
const uploadLink = createUploadLink({ uri: baseUrl });

export const apolloClient = new ApolloClient({
  link:setAuthorizationLink.concat(uploadLink),
  uri: baseUrl,
  cache: new InMemoryCache(),
});

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  // you can also just use 'scale'
  transition: transitions.FADE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ApolloProvider client={apolloClient}>
      <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
        </AlertProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
