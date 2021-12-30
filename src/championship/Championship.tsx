import {Component} from "react";
import StandingsData from "../data/standings.json";
import {PlayerData} from "../models/standings-models";
import './Championship.scss';


class Championship extends Component {

    constructor(props: any) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        const players: PlayerData[] = [...StandingsData];

        players.filter((player: PlayerData) => {
            return player.WeeksPlayed >= 4;
        });

        this.setState({ data: players })
    }

    render() {

        // @ts-ignore
        let sortedData: PlayerData[] = [...StandingsData];//this.state.data;

        sortedData = sortedData.filter((player: PlayerData) => {
            return player.WeeksPlayed >= 4;
        });

        return (
            <div className="championshipWrapper">
                <h2>Seedings for the Season Championship Tournament (1/4/22)</h2>
                <p>Bracket will be determined based on seedings the night of the tournament as we are not sure how many will show up</p>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="playerName">Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sortedData.map((player: PlayerData) => (
                        <tr>
                            <td>{sortedData.indexOf(player) + 1}</td>
                            {/*<td>{sortedData[sortedData.indexOf(player)]}</td>*/}
                            <td className="playerName">{player.Name}</td>
                            <td>{player.SumOfBests}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }


}

export default Championship;