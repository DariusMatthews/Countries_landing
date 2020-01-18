import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../images/search-glass.svg';
import DownBtn from '../images/down-btn.svg';

export default function Main({toggle}) {
  //states to hold all user interactions and countries
  const [userText, setUserText] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [userSelect, setUserSelect] = useState('');
  const [countries, setCountries] = useState([]);
  const [clicked, setClick] = useState(false);

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
    setUserSearch(userText);
  }

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

      {/* User Region Filter Options */}
      <ul
        className={toggle ? "list list--light" : "list list--dark"}>
        <li
          className={toggle ? "list__item list__item--title list__item--title-light list__item--light" : "list__item list__item--title list__item--title-dark list__item--dark"}>
          <button
            className={toggle ? "list__btn btn btn--light" : "list__btn btn btn--dark"}
            onClick={() => setClick(!clicked)}>
            Filter by Region
            <img className={toggle ? "list__img list__img--light" : "list__img list__img--dark"} src={DownBtn} alt="Down"/>
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

      {countries.map(country => (
        <h1 key={country.alpha3Code}>
          <Link to={`/country/${country.alpha3Code}`}>
            {country.name}
          </Link>
        </h1>
      ))}
    </div>
  )
}
