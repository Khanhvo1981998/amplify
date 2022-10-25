import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";

import { userRoutes } from "./Routes/UserRoutes";
export const history = useNavigate

function App() {

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Modal />
    //   <Routes>

    //     <Route path='/login' element={<Login />} />
    //     <Route path='/register' element={<Register />} />
    //     <Route path='/home' element={<HomePage />} />
    //     <Route path='/contact' element={<Contact />} />
    //     {/* <Route path='/detail/:id' element={(<Detail />)} /> */}
    //     <Route path='/detail/:detailId' element={<Detail />} />

    //     <Route path='/profile' element={<Profile />} />
    //     <Route path='/checkout' element={<Checkout />} />

    //     <Route path='/' element={<HomePage />} />
    //     <Route path='*' element={<Error />} />
    //     <Route path='' element={<HOCmodal />} />

    //   </Routes>
    //   <Footer />
    // </BrowserRouter>


    <div className=" bg-zinc-900 relative">
      <BrowserRouter>
        <Routes>
          {userRoutes.map((route, index) => {
            return (
              <Route
                history={history}
                key={index}
                exact={route?.exact}
                path={route.path}
                element={route.Element}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
