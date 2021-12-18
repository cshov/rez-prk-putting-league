import './Standings.css';
import StandingsData from "../data/standings.json";
import {PlayerData} from "../models/standings-models";
import {Component, MouseEvent} from "react";

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

    render() {
        // @ts-ignore
        const sortedData = this.state.data;

        return (
            <div className="standingsWrapper">
                <p>Now Sortable! Just click on the column you want to sort by</p>
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
                        <th title="Sum of the best 4 rounds played" className={this.isSorted('SumOfBests')} onClick={e => this.onSort(e, 'SumOfBests')}>Best 4</th>
                        <th title="Total score for all weeks played" className={this.isSorted('Total')} onClick={e => this.onSort(e, 'Total')}>Total</th>
                        <th title="Average score for all weeks played" className={this.isSorted('Average')} onClick={e => this.onSort(e, 'Average')}>Average</th>
                        <th title="Number of weeks played" className={this.isSorted('WeeksPlayed')} onClick={e => this.onSort(e, 'WeeksPlayed')}>Weeks Played</th>
                    </tr>
                    {sortedData.map((player: PlayerData) => (
                        <tr>
                            <td>{sortedData.indexOf(player) + 1}</td>
                            <td className="playerName">{(player.WeeksPlayed >= 4) ? <strong>{player.Name}</strong> : player.Name}</td>
                            <td className={this.isSorted('Week1')}>{(player.Week1 !== null) ? player.Week1 : '-'}</td>
                            <td className={this.isSorted('Week2')}>{(player.Week2 !== null) ? player.Week2 : '-'}</td>
                            <td className={this.isSorted('Week3')}>{(player.Week3 !== null) ? player.Week3 : '-'}</td>
                            <td className={this.isSorted('Week4')}>{(player.Week4 !== null) ? player.Week4 : '-'}</td>
                            <td className={this.isSorted('Week5')}>{(player.Week5 !== null) ? player.Week5 : '-'}</td>
                            <td className={this.isSorted('Week6')}>{(player.Week6 !== null) ? player.Week6 : '-'}</td>
                            <td className={this.isSorted('SumOfBests')}>{player.SumOfBests}</td>
                            <td className={this.isSorted('Total')}>{player.Total}</td>
                            <td className={this.isSorted('Average')}> {(player.Average !== null) ? Math.round(player.Average * 100) / 100 : "n/a"}</td>
                            <td className={this.isSorted('WeeksPlayed')}>{player.WeeksPlayed}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Standings;
