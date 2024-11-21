// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import List_of_Dishes from "./Dishes/List_of_Dishes";
import DishList from "./Dishes/DishList";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<List_of_Dishes />} />
      <Route path="/lists" element={<DishList />} />
    </Routes>
  </Router>
);
