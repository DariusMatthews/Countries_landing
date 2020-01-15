import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Country({ match }) {
  // states from country info and api call 
  const [api, setApi] = useState(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3code}`);
  const [country, setCountry] = useState({});

  // effect on initial render 
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios(api);
      const { data } = response
      console.log(data);
      setCountry(data);
    }
    fetchCountry();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>this is the country page</h1>
    </div>
  )
}
