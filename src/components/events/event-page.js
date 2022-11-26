import Header from "../ui/header/header";
import '../events/style.css'
const EventPage = () => {
    return(
        <div>
            <Header/>
            <p className="event-main-text">Події</p>
            <p>Назва події</p>
            <input></input>
            <button>Фільтри</button>
            <hr></hr>
        </div>
    )
}
export default EventPage;