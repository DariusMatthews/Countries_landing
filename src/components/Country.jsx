import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow-left.svg';

export default function Country({ match, toggle }) {
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

  // pulling specific variables out of country
  const { languages, currencies } = country;

  return (
    <div className="country">
      <Link className="country__backLink" to="/">
        <div className={toggle ? "country__backBtn country__backBtn--light" : "country__backBtn country__backBtn--dark"}>
          <img src={arrow} alt="back arrow" className={toggle ? "country__arrow country__arrow--light" : "country__arrow country__arrow--dark"} />
          <span className={toggle ? "country__btnText country__btnText--light" : "country__btnText country__btnText--dark"}>
            Back
        </span>
        </div>
      </Link>

      <img src={country.flag} alt={country.name} className="country__flag" />

      <h1 className={toggle ? "country__title country__title--light" : "country__title country__title--dark"}>
        {country.name}
      </h1>

      <ul className="country__list country__list--top">
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Native Name:
          </span>
          {country.nativeName}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Population:
          </span>
          {country.population}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Region:
          </span>
          {country.region}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Sub Region:
          </span>
          {country.subRegion}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Capital:
          </span>
          {country.capital}
        </li>
      </ul>

      <ul className="country__list">
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Top Level Domain:
          </span>
          {country.topLevelDomain}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Currencies:
          </span>
          {currencies !== undefined && currencies.map((currency, index) => {
            //logic for no comma at end of currency array
            const currencyString = currencies.length === index + 1 ? currency.name : `${currency.name}, `;

            return currencyString;
          })}
        </li>
        <li className={toggle ? "country__listItem country__listItem--light" : "country__listItem country__listItem--dark"}>
          <span className="country__subTitle">
            Languages:
          </span>
          {languages !== undefined && languages.map((language, i) => {
            //logic for no comma at end of languages array
            const langString = languages.length === i + 1 ? language.name : `${language.name}, `;

            return langString;
          })}
        </li>
      </ul>

      <h2 className={toggle ? "country__borderTitle country__borderTitle--light" : "country__borderTitle country__borderTitle--dark"}>
        Border Countries:
      </h2>

      <div className="country__borders">
        {/* when neighbors isn't undefined, the array will be mapped out to link to neighboring countries */}
        {neighbors !== undefined && neighbors.map(neighbor => (
          <Link
            key={neighbor}
            to={`/country/${neighbor}`}>
            <button
              onClick={() => setApi(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)}
              className={toggle ? "country__borderBtn country__borderBtn--light" : "country__borderBtn country__borderBtn--dark"}
            >
              {neighbor}
            </button>
          </Link>
        ))}
      </div>

    </div>
  )
}
