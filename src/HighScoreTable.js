import React from 'react'
import Table from 'react-bootstrap/Table';
import CountryFlag from "./CountryFlag.js"
import TableHeadings from "./TableHeadings.js"
import PlayerScore from "./PlayerScore.js"

function HighScoreTable( { countryDetails }) {

	const {name, scores} = countryDetails;

    return (
      <>
        <div className="row country-table">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
							<div className="row">
								<CountryFlag country={name} />
								<h2 className="country-heading">{name}</h2>
        			</div>
        			<Table>
							<TableHeadings />
							<tbody className="table-body">
								{scores.map((score) => (
									<PlayerScore key={score.n} player={score} />
								))}
							</tbody>
						</Table> 
						</div>
				</div>
          
      </>
    );
  }

  export default HighScoreTable;