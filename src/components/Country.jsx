import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow-left.svg';

export default function Country({ match }) {
  // states from country info and api call 
  const [api, setApi] = useState(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3code}`);
  const [country, setCountry] = useState({});
  const [neighbors, setNeighbors] = useState([]);

  // effect on api render 
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios(api);
      const { data } = response;
      setCountry(data);
    }
    fetchCountry();
  }, [api]);

  // effect on country render 
  useEffect(() => {
    const { borders } = country;
    setNeighbors(borders);
  }, [country])

  return (
    <div className="country">
      <Link to="/">
        <div className="country__backBtn">
          <img src={arrow} alt="back arrow" className="country__arrow" />
          <span className="country__back">
            Back
        </span>
        </div>
      </Link>
      <img src={country.flag} alt={country.name} className="country__flag"/>
      <h1>{country.name}</h1>
      <ul>
        <li>Native Name: {country.nativeName}</li>
        <li>Population: {country.population}</li>
        <li>Region: {country.region}</li>
        <li>Sub Region: {country.subRegion}</li>
        <li>Capital: {country.capital}</li>
      </ul>

      {/* when neighbors isn't undefined, the array will be mapped out to link to neighboring countries */}
      {neighbors !== undefined && neighbors.map(neighbor => (
        <Link to={`/country/${neighbor}`}>
          <button onClick={() => setApi(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)}>
            {neighbor}
          </button>
        </Link>
      ))}

    </div>
  )
}
