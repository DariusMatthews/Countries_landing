import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Main() {
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
    <div>
      {/* User Search From */}
      <form onSubmit={submitHandler} className="form">
        <input onChange={changeHandler} type="text" className="form__input" />
        <button type="submit" className="form__button">Submit</button>
      </form>

      {/* User Region Filter Options */}
      <ul>
        <li><button onClick={() => setClick(!clicked)}>Filter by Region</button></li>
        {clicked && regions.map(region =>
          <li>
            <button onClick={() => setUserSelect(region)}>
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
