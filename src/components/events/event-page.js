import Header from "../ui/header/header";
import "../events/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Events from "../ui/events/events";
import Pagination from "../ui/pagination/pagination";
import Modal from "react-modal";
import Filters from "../ui/filters/filters";
import { useAuth, logout } from "../../api";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [logged] = useAuth();
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "4px solid",
      borderColor: 'blue',
    },
  };

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };
  const afterFilterModalClose = () => {
    console.log("Modal closed");
  };
  const addClick =() =>{
    navigate('/Events/AddEvent');
  }

  useEffect(() => {
    const getEvents = () => {
      setLoading(true);
      axios
        .get("http://localhost:3000/api/events")
        .then((response) => {
          const data = response.data;
          setEvents(data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getEvents();
  }, []);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEVent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEVent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <p className="event-text">Пошук</p>
      <input type='search' className="event-input"></input>
      {logged && (
        <>
          <button className="header-button" onClick={addClick}>
            Добавити подію
          </button>
        </>
      )}
      <img
        onClick={openFilterModal}
        className="filter-logo"
        src="./filter-logo.webp"
        alt="Filter"
      />
      <hr></hr>
      <Events events={events} loading={loading} />
      <Modal
        isOpen={filterModalOpen}
        onAfterOpen={afterFilterModalClose}
        onRequestClose={closeFilterModal}
        style={customStyles}
        contentLabel="Filter Modal"
      >
        <Filters />
      </Modal>
    </div>
  );
};
export default EventPage;
