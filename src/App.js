import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import { userRoutes } from "./Routes/UserRoutes";
import Loading from './component/Loading/Loading';
export const history = useNavigate

function App() {

  return (
    <div className="relative bg-zinc-900">
      <BrowserRouter>
        <Loading />
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
