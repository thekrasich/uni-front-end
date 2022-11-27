import Header from "../ui/header/header";
import "../events/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Events from "../ui/events/events";
import Pagination from "../ui/pagination/pagination";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

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
      <p className="event-text">Назва події</p>
      <input className="event-input"></input>
      <img className="filter-logo" src="./filter-logo.webp" alt="Filter" />
      <hr></hr>
      <Events events={currentEvents} loading ={loading}/>
      <Pagination eventsPerPage={eventsPerPage} totalEvents = {events.length} paginate ={paginate}/>
    </div>
  );
};
export default EventPage;
