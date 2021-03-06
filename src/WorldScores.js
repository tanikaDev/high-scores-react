import React from 'react'
import Table from 'react-bootstrap/Table';

function WorldScores({worldScores}) {
		console.log(worldScores)
		let worldRankOrder = [];
		
		worldScores.map(({name, scores}) => scores.map(player => worldRankOrder.push({
				country: name,
				name: player.n,
				score: player.s
		})))

		worldRankOrder.sort((a,b) => b.score - a.score);

		console.log(worldRankOrder)
		return (
				<>
					<Table>
							<thead>
								<tr className="table-heading">
									<th>Rank</th>
									<th>Score</th>
									<th>Player</th>
									<th>Country</th>
								</tr>
							</thead>
						<tbody className="table-body">
							{worldRankOrder.map((player, index) => (
								<tr>
									<td className="table-data">{index+1}</td>
									<td className="table-data">{player.score}</td>
									<td className="table-data">{player.name}</td>
									<td className="table-data">{player.country}</td>
								</tr>
						))}
						</tbody>
					</Table>
					<ul>
						
					</ul>
					
				</>
		);
}

export default WorldScores;