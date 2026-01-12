
import './App.css'
import {Routes, Route} from "react-router";
import About from './components/About';
import MainSection from './components/MainSection';

export default function App() {
 

  return (
    <>
    {/* <Header /> */}
      <h1>SPA and routing</h1>
      {/* Routing system */}
      <Routes>
        <Route element={<MainSection />} path={"/"} />
        <Route elemnet={<About />} path={"/about"} />
      </Routes>
    </>
  )
}


