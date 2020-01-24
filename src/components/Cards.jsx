import React from 'react'
import { Link } from 'react-router-dom';

export default function Cards({countries, toggle}) {
  return (
    <div className="main__cardSection">
    {countries.map(country => (
      <div 
        key={country.alpha3Code}
        className={toggle ? "card card--light" : "card card--dark"}>
          <Link to={`${process.env.PUBLIC_URL}/country/${country.alpha3Code}`}>
            <img
              className="card__img"
              src={country.flag}
              alt={country.name}
            />
          </Link>
          <Link
          className={toggle ? "card__link card__link--light" : "card__link card__link--dark"}
          to={`${process.env.PUBLIC_URL}/country/${country.alpha3Code}`}>
            <h2 className="card__title">{country.name}</h2>
          </Link>
          <ul className="card__list">
            <li className={toggle ? "card__listItem card__listItem--light" : "card__listItem card__listItem--dark"}>
              <span className="card__description">
                Population:
              </span>
              {country.population}
            </li>
            <li className={toggle ? "card__listItem card__listItem--light" : "card__listItem card__listItem--dark"}>
              <span className="card__description">
                Region:
              </span>
              {country.region}
            </li>
            <li className={toggle ? "card__listItem card__listItem--light" : "card__listItem card__listItem--dark"}>
              <span className="card__description">
                Capital:
              </span>
              {country.capital}
            </li>
          </ul>
      </div>
      ))}
    </div>
  )
}
