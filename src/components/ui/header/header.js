import "../header/style.css";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    const eventsClick = () =>{
        navigate("/Events");
    }
    const facultiesClick = () =>{
        navigate('/Faculties');
    }
    const enterClick = () =>{
        navigate('/Login');
    }
    const textClick = () =>{
        navigate('/');
    }
    return(
        <header className="header">
            <p className="header-text" onClick ={textClick}>Львівський національний університет імені Івана Франка</p>
            <button className="header-button" onClick={eventsClick}>Події</button>
            <button className="header-button" onClick = {facultiesClick}>Факультети</button>
            <button className="header-button" onClick={enterClick}>Вхід в систему</button>
        </header>
    )
}
export default Header;