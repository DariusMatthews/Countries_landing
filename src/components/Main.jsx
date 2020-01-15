import React, { useState, useEffect } from 'react'

export default function Main() {
  const [userText, setUserText] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [userSelect, setUserSelect] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);
 
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${userSearch}`)
      .then(response => response.json())
      .then(data => setCountries(data));
  }, [userSearch]);
 
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/region/${userSelect}`)
      .then(response => response.json())
      .then(data => setCountries(data));
  }, [userSelect]);
  
  return (
    <div>
      
    </div>
  )
}
