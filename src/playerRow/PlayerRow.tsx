import {Component} from "react";
import {PlayerData} from "../models/standings-models";
import Standings from "../standings/Standings";

class PlayerRow extends Component {
    playerProps: any;

    constructor(props: { rank: number|string, player: PlayerData, sortedKey: string }) {
        super(props);

        this.playerProps = props;


    }

    isSorted(sortName: string): string {
        if (sortName === this.playerProps.sortedKey) {
            return 'sortable sortedColumn';
        }
        return 'sortable';
    }

    render() {
        return (
            <tr>
                <td>{this.playerProps.rank}</td>
                <td className="playerName">{(this.playerProps.player.WeeksPlayed >= 4) ? <strong>{this.playerProps.player.Name}</strong> : this.playerProps.player.Name}</td>
                <td className={this.isSorted('Week1')}>{(this.playerProps.player.Week1 !== null) ? this.playerProps.player.Week1 : '-'}</td>
                <td className={this.isSorted('Week2')}>{(this.playerProps.player.Week2 !== null) ? this.playerProps.player.Week2 : '-'}</td>
                <td className={this.isSorted('Week3')}>{(this.playerProps.player.Week3 !== null) ? this.playerProps.player.Week3 : '-'}</td>
                <td className={this.isSorted('Week4')}>{(this.playerProps.player.Week4 !== null) ? this.playerProps.player.Week4 : '-'}</td>
                <td className={this.isSorted('Week5')}>{(this.playerProps.player.Week5 !== null) ? this.playerProps.player.Week5 : '-'}</td>
                <td className={this.isSorted('Week6')}>{(this.playerProps.player.Week6 !== null) ? this.playerProps.player.Week6 : '-'}</td>
                <td className={this.isSorted('SumOfBests')}>{this.playerProps.player.SumOfBests}</td>
                <td className={this.isSorted('Total')}>{this.playerProps.player.Total}</td>
                <td className={this.isSorted('Average')}> {(this.playerProps.player.Average !== null) ? Math.round(this.playerProps.player.Average * 100) / 100 : "n/a"}</td>
                <td className={this.isSorted('WeeksPlayed')}>{this.playerProps.player.WeeksPlayed}</td>
            </tr>
        );
    }


}

export default PlayerRow;