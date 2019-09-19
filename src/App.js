import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Home from './Containers/Home/Home';
import {store, persistor} from './Store'
import ButtonAppBar from './Components/Navbar/navbar'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <ButtonAppBar />

        <Home />


      </PersistGate>
      </Provider>

    </div>
     
  );
}

export default App;
