import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
//we are nesting app within BrowserROuter, so App has access to the react router tools
//TODO: I want react router to be available in my App

//provider: ---> BrowserRouter 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
);


