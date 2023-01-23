import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Countries } from "./components/Countries/Countries";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Country } from "./components/Country/Country";




function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<Countries/>}/>
        <Route path="/country/:countryName" element={<Country/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
