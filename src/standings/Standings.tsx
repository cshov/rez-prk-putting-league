import './Standings.css';
import StandingsData from "../data/standings.json";
import {PlayerData} from "../models/standings-models";

function Standings() {

    const players: PlayerData[] = [...StandingsData];

    // @ts-ignore
    return (
        <div className="standingsWrapper">
            {/*<h3>Standings</h3>*/}

            <p>*Names in bold have qualified for the finals by playing 4 weeks</p>
            <table>
                <tr>
                    <th></th>
                    <th className="playerName">Name</th>
                    <th>W1</th>
                    <th>W2</th>
                    <th>W3</th>
                    <th>W4</th>
                    <th>W5</th>
                    <th>Best 4</th>
                    <th>Total</th>
                    <th>Average</th>
                    <th>Weeks Played</th>
                </tr>
                {players.map((player: PlayerData) => (
                <tr>
                    <td>{players.indexOf(player) + 1}</td>
                    <td className="playerName">{(player.WeeksPlayed >= 4) ? <strong>{player.Name}</strong> : player.Name}</td>
                    <td>{(player.Week1 !== null) ? player.Week1 : '-'}</td>
                    <td>{(player.Week2 !== null) ? player.Week2 : '-'}</td>
                    <td>{(player.Week3 !== null) ? player.Week3 : '-'}</td>
                    <td>{(player.Week4 !== null) ? player.Week4 : '-'}</td>
                    <td>{(player.Week5 !== null) ? player.Week5 : '-'}</td>
                    <td>{player.SumOfBests}</td>
                    <td>{player.Total}</td>
                    <td> {(player.Average !== null) ? Math.round(player.Average * 100) / 100 : "n/a"}</td>
                    <td>{player.WeeksPlayed}</td>
                </tr>
                ))}
            </table>
        </div>
    );
}

export default Standings;
