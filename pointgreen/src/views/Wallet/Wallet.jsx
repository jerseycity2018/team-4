import React, {Component} from 'react';
import { Collection } from '../../components';

class Wallet extends Component{
  render(){
    let badges = [[
      {type: "compost", bgColor: "#0BC6DC", desc: "Composted leftovers from a meal", earned: 5, required: 5},
      {type: "recycle", bgColor: "#0BC6DC", desc: "Recycled a bottle or can", earned: 8, required: 8},
      {type: "vegetarian", bgColor: "#0BC6DC", desc: "Ate a vegetarian meal", earned: 12, required: 12},
    ], [
      {type: "compost", bgColor: "#0BC6DC", desc: "Composted leftovers from a meal", earned: 5, required: 10},
      {type: "publicTransit", bgColor: "#0BC6DC", desc: "Took public transportation", earned: 8, required: 8},
      {type: "windTurbine", bgColor: "#0BC6DC", desc: "Installed a wind turbine", earned: 0, required: 1},
    ], [
      {type: "publicTransit", bgColor: "#0BC6DC", desc: "Took public transportation", earned: 8, required: 10},
      {type: "windTurbine", bgColor: "#0BC6DC", desc: "Installed a wind turbine", earned: 0, required: 1},
    ]];

    let puzzles = [{
      imgUrl: "/puzzles/logo-rare.png", reward: "Free t-shirt", company: "rare", progress: 100
    }, {
      imgUrl: "/puzzles/logo-rare.png", reward: "Free coffee", company: "Starbucks", progress: 40
    }, {
      imgUrl: "/puzzles/logo-rare.png", reward: "Internship", company: "JPMorgan", progress: 0
    }];

    return(
      <div className="Wallet container">
        <h1>Wallet</h1>
        <h2>Puzzles in-progress</h2>
        <Collection puzzle={puzzles[0]} badges={badges[0]}/>
        <Collection puzzle={puzzles[1]} badges={badges[1]}/>
        <Collection puzzle={puzzles[2]} badges={badges[2]}/>
        <h2>Completed badges</h2>
        <h2>Redeemed puzzles</h2>
      </div>
    )
  }
}
export default Wallet;
