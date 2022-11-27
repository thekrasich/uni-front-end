const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalEvents / eventsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <nav>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className="page-item"
          onClick={() => {
            paginate(number);
            
          }}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};
export default Pagination;
