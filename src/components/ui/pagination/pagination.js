const Pagination = ({eventsPerPage, totalEvents, paginate}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalEvents/eventsPerPage); index++) {
        pageNumbers.push(index);
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key = {number} className = "page-item">
                        <p onClick={() => paginate(number)}  className="page-link">
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;