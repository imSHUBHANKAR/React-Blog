import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/aboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (

    // <h1>
    //     <Header />
    //     <div className='app_body'>
    //     <AboutUs/>
    //     </div>
    //   </h1>
    <BrowserRouter>
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/profile' element={<h1>Profile Page</h1>}/>

        </Routes>
      </div>
      {/* <h1>
        <Header />
        <div className='app_body'>
        <AboutUs/>
        </div>
      </h1> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
