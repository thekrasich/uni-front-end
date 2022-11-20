import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../login-page/login";
import WelcomePage from "../welcome-page/welcome-page";

const MainComponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Login" element ={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};
export default MainComponent;
