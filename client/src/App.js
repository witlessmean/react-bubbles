import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import Login from "./components/Login.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <PrivateRoute path="/bubblepage" component={BubblePage} />
          <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;


