import React, {Component} from 'react';
import { Collection, MultiBadgeContainer, StatsCard } from '../../components';
import './Stats.css'

class Stats extends Component{
  render(){
    let badges = [[
      {type: "compost", desc: "Composted leftovers from a meal", earned: 5},
      {type: "recycle", desc: "Recycled a bottle or can", earned: 8},
      {type: "vegetarian", desc: "Ate a vegetarian meal", earned: 12},
    ], [
      {type: "compost", desc: "Composted leftovers from a meal", earned: 10},
      {type: "publicTransit", desc: "Took public transportation", earned: 8},
      {type: "windTurbine", desc: "Installed a wind turbine", earned: 1},
    ]];

    let puzzles = [{
      imgUrl: "/puzzles/logo-rare.png", reward: "Free t-shirt", company: "rare", progress: 100, hideButton: true
    }, {
      imgUrl: "https://illuminatisymbols.info/wp-content/uploads/illuminati-symbols-Starbucks-Coffee-Logo.gif", reward: "Free coffee", company: "Starbucks", progress: 100, hideButton: true
    }];

    return(
      <div className="Wallet container">
        <h1>Lifetime Stats</h1>
        <h2>Overview</h2>
        <div className="cardContainer">
          <StatsCard num="84" title="Lifetime Leaves"/>
          <StatsCard num="17" title="Lifetime Photos"/>
          <StatsCard num="137" title="Lifetime Impressions"/>
        </div>
        <h2>Completed puzzles</h2>
        <Collection puzzle={puzzles[0]} badges={badges[0]}/>
        <Collection puzzle={puzzles[1]} badges={badges[1]}/>
        <h2>All collected badges</h2>
        <MultiBadgeContainer />
      </div>
    )
  }
}
export default Stats;
