import './Standings.css';
import StandingsData from "../data/standings.json";
import {PlayerData} from "../models/standings-models";

function Standings() {

    const players: PlayerData[] = [...StandingsData];

    // @ts-ignore
    return (
        <div className="standingsWrapper">
            {/*<h3>Standings</h3>*/}
            <table>
                <tr>
                   <th>Name</th>
                    <th>Week 1</th>
                    <th>Week 2</th>
                    <th>Week 3</th>
                    <th>Total</th>
                    <th>Average</th>
                    <th>Weeks Played</th>
                </tr>
                {players.map((player: PlayerData) => (
                <tr>
                    <td>{player.Name}</td>
                    <td>{player.Week1}</td>
                    <td>{player.Week2}</td>
                    <td>{player.Week3}</td>
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
