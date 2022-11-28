import Header from "../ui/header/header";
import "../events/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Events from "../ui/events/events";
import Modal from "react-modal";
import Filters from "../ui/filters/filters";
import { useAuth } from "../../api";
import { useNavigate } from "react-router-dom";
import Pagination from "../ui/pagination/pagination";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);
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
      borderColor: "blue",
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
  const addClick = () => {
    navigate("/Events/AddEvent");
  };

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
  
  return (
    <div>
      <Header />
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
      <Events events={currentEvents} loading={loading} />
      <Pagination eventsPerPage ={eventsPerPage} totalEvents ={events.length} paginate = {setCurrentPage}/>
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
