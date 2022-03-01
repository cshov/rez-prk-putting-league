import {Component} from "react";
import * as d3 from 'd3';
import {PlayerData} from "../models/standings-models";
import Championship from "../championship/Championship";

/*function PlayerChart (props: { playerDataObject: PlayerData; }){

    const playerObject: PlayerData = props.playerDataObject;
    // playerObject: PlayerData;
    //
    // constructor(props: { playerDataObject: PlayerData; }) {
    //     super(props);
    //     this.state = {data: []};
    //
    //     this.playerObject = props.playerDataObject;
    // }

    return (
        <div>
            <h3>{playerObject.Name}</h3>
        </div>
    )

}*/


class PlayerChart extends Component {

    playerDataObject: PlayerData;

    constructor(props: PlayerData) {
        super(props);
        this.playerDataObject = props;
    }

    render() {
      return (
          <div>
              <h3>{this.playerDataObject.Name}</h3>
          </div>
      )
    }

}

export default PlayerChart;