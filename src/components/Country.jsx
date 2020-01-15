import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const {borders} = country;
    setNeighbors(borders);
  }, [country])
  
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{country.name}</h1>

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
