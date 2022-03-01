import {Component} from "react";
import StandingsData from "../data/standings.json";
import {PlayerData} from "../models/standings-models";
import './Rules.scss';


class Rules extends Component {

    constructor(props: any) {
        super(props);
        // this.state = {data: []};
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="rulesWrapper">
                <h2>Rules for the league</h2>
                <ul>
                    <li>Each player will play 3 rounds each</li>
                    <li>Each round, the player gets 2 putts each from 5 different stations, adding up to 10 attempted putts per round</li>
                    <li></li>
                </ul>
                <p></p>

            </div>
        );
    }


}

export default Rules;