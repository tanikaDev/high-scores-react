import React, { useState } from 'react';
import allCountryScores from "./scores"
import DisplayLogo from "./DisplayLogo"
import PageHeading from "./PageHeading"
import WorldScores from './WorldScores';
import HighScoreTable from "./HighScoreTable"
import './App.css';


function App() {

  const [sortScore, setSortScore] = useState(true);

		const SortScores = () => {
			sortScore ? allCountryScores.map(country => country.scores.sort((a,b) => a.s - b.s).reverse()) : allCountryScores.map(country => country.scores.sort((a,b) => a.s - b.s))
      setSortScore(!sortScore);
		};

  return (
    <>
      <div className="container">
      <div className="row justify-content-center">
        <DisplayLogo />
        <PageHeading />
      </div>
      <WorldScores worldScores={allCountryScores} /> 
      <div className="row justify-content-center">
        <button onClick={SortScores}>Change Order</button>
      </div>
        <h2 className="page-heading">Country High Scores</h2>
        {allCountryScores.sort((a, b) => {
          return (a.name > b.name) ? 1 : -1
        }).map((country) => (
          <HighScoreTable key={country.name} countryDetails={country} />
        ))}
      </div>
    </>
  );
}

export default App;
