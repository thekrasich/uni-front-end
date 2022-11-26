import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "../events/event-page";
import FacultiesPage from "../faculties/faculties-page";
import LoginPage from "../login-page/login";
import Registration from "../registration/registration";
import WelcomePage from "../welcome-page/welcome-page";

const MainComponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Login" element ={<LoginPage/>}/>
          <Route path="/Registration" element={<Registration/>}/>
          <Route path ="/Faculties" element = {<FacultiesPage/>}>/</Route>
          <Route path ="/Events" element = {<EventPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};
export default MainComponent;