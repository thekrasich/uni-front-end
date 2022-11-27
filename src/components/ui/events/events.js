import humanizeHoldingTime from "../../../unitls/date-unit";
import "../events/style.css";
import Tags from "../tags/tags";

const Events = ({ events, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {events.map((event) => (
        <div className="event-container">
          <p className="event-header-text" key={event.id}>
            {event.title}
          </p>
          <p className="event-date-text">
            {humanizeHoldingTime(
              new Date(event.startsAt),
              new Date(event.endsAt)
            )}
          </p>
          <hr></hr>
          <p className="event-container-text" key={event.id}>
            {event.description}
          </p>
          <Tags tags = {event.tags}/>
          <p></p>
        </div>
      ))}
    </div>
  );
};
export default Events;
