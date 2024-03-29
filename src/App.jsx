import './App.css';
import React, { useState, Suspense, Component } from 'react';
import { Provider } from 'react-redux';
import { Button, Input } from '@mui/material'

import Signup from './components/SignandLogin/Signup.jsx';
import Login from './components/SignandLogin/Login.jsx'

import store from './components/store/store.js';
import StoreCounter from './components/StoreCounter.jsx';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import ChildComponent from './components/ErrorBoundary/ChildComponent.jsx'
import Basiccomponent from './components/BasicComponent.jsx'
import CounterComponent from './components/propdrilAndcounter.js/CounterComponent.jsx.jsx'
import ConditionalRender from './components/ConditionalRender.jsx';
import FormComponent from './components/FormComponent.jsx'
import UseEffectHook from './components/UseEffectHook.jsx';
import OptimisticComponent from './components/OptimisticComponent'
import CompositionHOC from './components/CompositionHOC.jsx'


import { Routes, Route } from 'react-router-dom';

//LAZY LOADING AND CODE SPLITING(TASK 15)
//ROUTER (TASK 7)
const Home = React.lazy(() => import('./components/router/Home'));
const About = React.lazy(() => import('./components/router/About.jsx'));
const Contact = React.lazy(() => import('./components/router/Contact.jsx'));

function App() {
  const [isUseEffectHook, setIsUseEffectHook] = useState(false)

  function handleShowandHideUseEffect() {
    setIsUseEffectHook(!isUseEffectHook)
  }


  return (

    //ONLY ROUTING AND SIGNUP AND LOGIN
    <div className="App">
      {/* LAZY LOADING AND CODE SPLITING (TASK15)  && ROUTER (TASK 7)*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div >

    //REMAINING FRONTEND TASKS

    // <div className="App">
    //   <Basiccomponent />
    //   <hr />
    //   <CounterComponent />
    //   <hr />
    //   <ConditionalRender />
    //   <hr />
    //   <FormComponent />
    //   <hr />
    //   <OptimisticComponent />
    //   <br></br>
    //   <hr />
    //   <Button variant="contained" color="primary" onClick={handleShowandHideUseEffect}>show/hide use effect component</Button>
    //   {isUseEffectHook ? <UseEffectHook /> : null}
    //   <hr />
    //   {/*HOC*/}
    //   <CompositionHOC />
    //   <hr />
    //   {/* <ErrorBoundary>
    //     <ChildComponent />
    //   </ErrorBoundary> */}

    //   <hr />
    //   <Provider store={store}>
    //     <div>
    //       <StoreCounter />
    //     </div>
    //   </Provider>
    // </div>
  );
}
export default App;
