import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Pagination from './Pagination';
import Search from '../images/search-glass.svg';
import DownBtn from '../images/down-btn.svg';

export default function Main({ toggle }) {
  //states to hold all user interactions, countries, and pagination
  const [userText, setUserText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [userSelect, setUserSelect] = useState('');
  const [countries, setCountries] = useState([]);
  const [clicked, setClick] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //how many countries will be on each page
  const countriesPerPage = 24;

  //array to hold regions to choose from
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  //inital render effect
  useEffect(() => {
    const fetchAll = async () => {
      const response = await axios('https://restcountries.eu/rest/v2/all');
      const { data } = response
      setCountries(data);
    }
    fetchAll();
  }, []);

  //user search effect
  useEffect(() => {
    const fetchSearch = async () => {
      const response = await axios(`https://restcountries.eu/rest/v2/name/${userSearch}`);
      const { data } = response
      setCountries(data);
    }
    fetchSearch();
  }, [userSearch]);

  //user region select effect
  useEffect(() => {
    const fetchSelect = async () => {
      const response = await axios(`https://restcountries.eu/rest/v2/region/${userSelect}`);
      const { data } = response
      setCountries(data);
    }
    fetchSelect();
  }, [userSelect]);

  //input change handler
  const changeHandler = e => {
    const { value } = e.target
    setUserText(value);
  }

  //submit handler
  const submitHandler = e => {
    e.preventDefault();
    if (userText.length === 0) {
      setErrorText('Please enter country name');
    } else {
      setErrorText('');
      setUserSearch(userText);
    }
    console.log(errorText);
  }

  //get current cards per page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  //Change Page and start at top of page on click
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="main">
      {/* User Search From */}
      <form
        onSubmit={submitHandler}
        className={toggle ? "form form--light" : "form form--dark"}>
        <input
          placeholder="Search for a country..."
          onChange={changeHandler}
          type="text"
          className={toggle ? "form__input form__input--light" : "form__input form__input--dark"}
        />
        <button
          type="submit"
          className={toggle ? "form__btn btn btn--light" : "form__btn btn btn--dark"}>
          <img
            className={toggle ? "form__img form__img--light" : "form__img form__img--dark"}
            src={Search}
            alt="search"
          />
        </button>
      </form>

      <p className="main__errorText">{errorText}</p>

      {/* User Region Filter Options */}
      <ul
        className={toggle ? "list list--light" : "list list--dark"}>
        <li
          className={toggle ? "list__item list__item--title list__item--title-light list__item--light" : "list__item list__item--title list__item--title-dark list__item--dark"}>
          <button
            className={toggle ? "list__btn btn btn--light" : "list__btn btn btn--dark"}
            onClick={() => setClick(!clicked)}>
            Filter by Region
            <img className={toggle ? "list__img list__img--light" : "list__img list__img--dark"} src={DownBtn} alt="Down" />
          </button>
        </li>
        {clicked && regions.map(region =>
          <li
            className={toggle ? "list__item list__item--light" : "list__item list__item--dark"}>
            <button
              className={toggle ? "btn btn--light" : "btn btn--dark"}
              onClick={() => setUserSelect(region)}>
              {region}
            </button>
          </li>)
        }
      </ul>

      {/* Country Cards  */}
      <Cards
        countries={currentCountries}
        toggle={toggle}
      />

      {/* Pagination list */}
      <Pagination
        countriesPerPage={countriesPerPage} 
        totalCountries={countries.length} 
        paginate={paginate}
        toggle={toggle}
      />
    </div>
  )
}
