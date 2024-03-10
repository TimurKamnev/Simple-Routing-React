import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import './Styles/styles.scss'
import LogIn from "./Components/LogIn";
import Layout from "./Layout/Layout";
import NotFound from "./Components/NotFound";


function App() {

  // const {pathname} = useLocation();
  // тот же способ что и с route родителём.
  // useEffect(() => {
  //   alert(`Вы находитесь на странице ${pathname}`)
  // },[pathname])

  return (
    <div className="App">
      {/*{*/}
      {/*  pathname === '/login' ? '' : <Header/>*/}
      {/*}*/}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
    </div>
  );
}

export default App;
