const Events = ({ events, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <ul>{events.map((event) => (
    <li key = {event.id}>{event.title}</li>
  ))}</ul>;
};
export default Events;