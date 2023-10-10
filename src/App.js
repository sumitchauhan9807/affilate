
import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from 'src/redux/store'


import Login from './views/Login'
import IndexWeb from 'src/views/IndexWeb'
import './index.css';

function App() {
  return (
    <div className="App">
      <Provider store={store().store}>
      <PersistGate loading={'Loading'} persistor={store().persistor}>
          <IndexWeb/>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
