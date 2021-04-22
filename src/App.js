import allCountryScores from "./scores"
import Table from 'react-bootstrap/Table';
import Logo from "./img/high-score-board-banner.jpg";
import './App.css';

function DisplayLogo() {
  return (
    <>
      <div className="row justify-content-center">
        <img className="col-6 col-md-6" src={Logo} />
      </div>
    </>
  );
}

function TableHeadings() {
  return (
    <>
      <thead>
        <tr className="table-heading">
          <th>Rank</th>
          <th>Score</th>
          <th>Player</th>
        </tr>
      </thead>
    </>
  );
}

function PlayerScore(player, index) {
  return (
    <>
      <tr>
        <td key={index} className="rank-data table-data">{index+1}</td>
        <td key={player.s} className="score-data table-data">{player.s}</td>
        <td key={player.n} className="player-data table-data">{player.n}</td>
      </tr>
    </>
  );
}

function CountryFlag(country) {
  let countryFlags = [{
    country: "Ethiopia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Ethiopia_%28Blank%29.svg",
  },
  {
    country: "Scotland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
  },
  {
    country: "England",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
  },
  {
    country: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  },
  {
    country: "Colombia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
  },
  {
    country: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    country: "Iran",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  },
  {
    country: "Bangladesh",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  }];

  let countryFlagSrc = "";
  for (let i = 0; i < countryFlags.length; i++){
    let currentCountry = countryFlags[i];
    if (currentCountry.country.includes(country)) {
      countryFlagSrc = currentCountry.flag;
    }
  }
  return (
    <>
        <img className="col-2 col-md-2 col-lg-1" src={countryFlagSrc} alt="country" />
    </>
  );
}

function HighScoreTable(country, scores) {

  console.log(Logo);
  let countryFlag = CountryFlag(country);
  let player = scores.map((player, index) => {
    return PlayerScore(player, index);
  });
  return (
    <>
      <div className="row country-table">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <div className="row">
            {countryFlag}
            <h2 className="country-heading">{country}</h2>
          </div>
          <Table>
            <TableHeadings />
            <tbody className="table-body">
                {player}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

function PageHeading() {
  return (
    <>
      <div className="row justify-content-center">
        <h1 className="col-10 col-md-12 page-heading text-center">World High Score Ranking</h1>
      </div>
    </>
  );
}

function GetCountry() {
  let country = allCountryScores.map((country) => {
    let countryName = country.name;
    let countryScores = country.scores;
    return HighScoreTable(countryName, countryScores)
  })
  return country;
};

// function GetCountry() {
//   let countries = [];
//   let countryScores = [];

//   for (let i = 0; i < allCountryScores.length; i++) {
//     countries.push(allCountryScores[i].name);
//     countries.push(allCountryScores[i].scores);
//   }
//   return HighScoreTable(countries, countryScores)
// };

function App() {
  return (
    <>
      <div className="container">
      <div className="row justify-content-center">
        <DisplayLogo />
        <PageHeading />
      </div>
        <GetCountry />
      </div>
    </>
  );
}

export default App;
