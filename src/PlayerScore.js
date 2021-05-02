import React from 'react' 

function PlayerScore( { player }) {
    const {n, s} = player;

    return (
        <tr >
          <td className="rank-data table-data">-</td>
          <td className="score-data table-data">{s}</td>
          <td className="player-data table-data">{n}</td>
        </tr>
  
    );
  }

export default PlayerScore