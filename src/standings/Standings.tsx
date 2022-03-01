import './Standings.scss';
// import StandingsData from "../data/standings.json";
import StandingsData from "../data/standings2.json";
import {PlayerData} from "../models/standings-models";
import {Component,} from "react";
import PlayerChart from "../playerChart/PlayerChart";

// import PlayerRow from '../playerRow/PlayerRow';

class Standings extends Component {
    sortedKey: string;

    constructor(props: any) {
        super(props);
        this.state = {data: []};
        this.onSort = this.onSort.bind(this);
        this.sortedKey = 'SumOfBests';
    }

    componentDidMount() {
        const players: PlayerData[] = [...StandingsData];

        this.addStandardDeviations(players);

        this.setState({ data: players })
    }

    onSort(event: any, sortKey: string){
        this.sortedKey = sortKey;
        // @ts-ignore
        const data = this.state.data;
        data.sort((a: any,b: any) => b[sortKey] -a[sortKey])
        this.setState({data})
    }

    isSorted(sortName: string): string {
        if (sortName === this.sortedKey) {
            return 'sortable sortedColumn';
        }
        return 'sortable';
    }

    addStandardDeviations(players: PlayerData[]) {
        players.forEach((player: PlayerData) => {
            player.StdDev = this.getStandardDeviation(player);
        })
    }

    getStandardDeviation(player: PlayerData) {
        const unfilteredArray: any[] = [player.Week1, player.Week2, player.Week3, player.Week4, player.Week5, player.Week6, player.Week7, player.Week8 ];
        const array: number[] = unfilteredArray.filter((val) => typeof(val) === 'number');
        const n = array.length
        const mean = array.reduce((a, b) => a + b) / n

        //

        return Math.round(Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n) * 100) / 100

        // return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    }

    render() {
        // @ts-ignore
        const sortedData = this.state.data;

        return (
            <div className="standingsWrapper">
                <p>Season 2 stats</p>
                <p>*Names in bold have qualified for the finals by playing 4 weeks</p>
                <table>
                    <tr className={"sortableHeaders"}>
                        <th></th>
                        <th className="playerName">Name</th>
                        <th title="Scores from Week 1" className={this.isSorted('Week1')} onClick={e => this.onSort(e, 'Week1')}>W1</th>
                        <th title="Scores from Week 2" className={this.isSorted('Week2')} onClick={e => this.onSort(e, 'Week2')}>W2</th>
                        <th title="Scores from Week 3" className={this.isSorted('Week3')} onClick={e => this.onSort(e, 'Week3')}>W3</th>
                        <th title="Scores from Week 4" className={this.isSorted('Week4')} onClick={e => this.onSort(e, 'Week4')}>W4</th>
                        <th title="Scores from Week 5" className={this.isSorted('Week5')} onClick={e => this.onSort(e, 'Week5')}>W5</th>
                        <th title="Scores from Week 6" className={this.isSorted('Week6')} onClick={e => this.onSort(e, 'Week6')}>W6</th>
                        <th title="Scores from Week 7" className={this.isSorted('Week7')} onClick={e => this.onSort(e, 'Week7')}>W7</th>
                        <th title="Scores from Week 8" className={this.isSorted('Week8')} onClick={e => this.onSort(e, 'Week8')}>W8</th>
                        <th title="Sum of the best 4 rounds played" className={this.isSorted('SumOfBests')} onClick={e => this.onSort(e, 'SumOfBests')}>Best 4</th>
                        <th title="Standard deviation" className={this.isSorted('StdDev')} onClick={e => this.onSort(e, 'StdDev')}>Std Dev</th>
                        {/*<th title="Total score for all weeks played" className={this.isSorted('Total')} onClick={e => this.onSort(e, 'Total')}>Total</th>*/}
                        <th title="Average score for all weeks played" className={this.isSorted('Average')} onClick={e => this.onSort(e, 'Average')}>Average</th>
                        {/*<th title="Number of weeks played" className={this.isSorted('WeeksPlayed')} onClick={e => this.onSort(e, 'WeeksPlayed')}>Weeks Played</th>*/}
                    </tr>
                    {sortedData.map((player: PlayerData) => (
                        // <PlayerRow
                        //     rank={sortedData[sortedData.indexOf(player)][this.sortedKey] !== null ? sortedData.indexOf(player) + 1 : '-'}
                        //     player={player}
                        //     sortedKey={this.sortedKey}></PlayerRow>


                        <tr>
                            <td>{sortedData[sortedData.indexOf(player)][this.sortedKey] !== null ? sortedData.indexOf(player) + 1 : '-'}</td>
                            <td className="playerName">{(player.WeeksPlayed >= 4) ? <strong>{player.Name}</strong> : player.Name}</td>
                            <td className={this.isSorted('Week1')}>{(player.Week1 !== null) ? player.Week1 : '-'}</td>
                            <td className={this.isSorted('Week2')}>{(player.Week2 !== null) ? player.Week2 : '-'}</td>
                            <td className={this.isSorted('Week3')}>{(player.Week3 !== null) ? player.Week3 : '-'}</td>
                            <td className={this.isSorted('Week4')}>{(player.Week4 !== null) ? player.Week4 : '-'}</td>
                            <td className={this.isSorted('Week5')}>{(player.Week5 !== null) ? player.Week5 : '-'}</td>
                            <td className={this.isSorted('Week6')}>{(player.Week6 !== null) ? player.Week6 : '-'}</td>
                            <td className={this.isSorted('Week7')}>{(player.Week7 !== null) ? player.Week7 : '-'}</td>
                            <td className={this.isSorted('Week8')}>{(player.Week8 !== null) ? player.Week8 : '-'}</td>
                            <td className={this.isSorted('SumOfBests')}>{player.SumOfBests}</td>
                            <td className={this.isSorted('StdDev')}>{this.getStandardDeviation(player)}</td>
                            {/*<td className={this.isSorted('Total')}>{player.Total}</td>*/}
                            <td className={this.isSorted('Average')}> {(player.Average !== null) ? Math.round(player.Average * 100) / 100 : "n/a"}</td>
                            {/*<td className={this.isSorted('WeeksPlayed')}>{player.WeeksPlayed}</td>*/}
                        </tr>
                    ))}

                    {/*{sortedData.map((player: PlayerData) => (
                        // <PlayerChart playerDataObject={player} />
                        <PlayerChart { ...player} />
                    ))}
*/}


                </table>
            </div>
        );
    }
}

export default Standings;
