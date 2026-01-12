import { BrowserRouter, Routes, Route, Link } from "react-router";

import './App.css';
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import Staff from "./pages/Staff";
import StaffMember from "./pages/StaffMember";
import UserPostsPage from "./pages/UserPostsPage";
function App() {
  return (
<>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/profile/:userProfile" element= {<UserProfile />}>
        <Route path="posts" element={<UserPostsPage />}/>
        </Route>
        <Route element={<Staff />} path="/staff">
          <Route element={<StaffMember />} path={":staffMember"} />
          </Route>
      </Routes>
  </>
  );
}

export default App;