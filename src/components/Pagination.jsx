import React from 'react';

export default function Pagination({ countriesPerPage, totalCountries, paginate, toggle }) {
  const pageNumbers = [];

  //gives us correct amount of page numbers
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={toggle ? "pagination__item pagination__item--light" : "pagination__item pagination__item--dark"}
          >
            <button
              className={toggle ? "pagination__link pagination__link--light" : "pagination__link pagination__link--dark"}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
