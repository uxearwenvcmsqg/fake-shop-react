import ReactPaginate from 'react-paginate';
import './pagination.scss';

function index({ onChangePage }) {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={10}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
}

export default index;
