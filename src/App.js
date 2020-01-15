import React from 'react';
import './App.scss';

/* 
  steps to build logic:
    1. Setup states to hold:
      i. user text input search
      ii. filtered continent selection
      iii. countries array info from api
      iv. Specific country details
      v. true/false toggle for light/dark mode
    2. Setup useEffects when:
      i. page initially renders
      ii. country api params update
        - happens when user search or filter continents
      iii. user wants to see specific country details
    3. Map countries across the websites as card components
    4. Setup react router so each card leads to a full page description component of country
*/

function App() {
  const [toggle, setToggle] = useState(true);


  return (
    <div className="App">
    </div>
  );
}

export default App;
