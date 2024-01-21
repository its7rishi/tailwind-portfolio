const Pagination = ({
  totalProjects,
  projectsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        disabled={currentPage === 1}
      >
        «
      </button>
      {pages.map((page, index) => (
        <input
          key={index}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={page}
          checked={page === currentPage}
          onChange={() => setCurrentPage(page)}
        />
      ))}
      <button
        className="join-item btn"
        onClick={() =>
          setCurrentPage((prev) => (prev < pages.length ? prev + 1 : prev))
        }
        disabled={currentPage === pages.length}
      >
        »
      </button>
    </div>
  );
};
export default Pagination;
