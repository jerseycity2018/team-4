import React, {Component} from 'react';
import { Collection, MultiBadgeContainer } from '../../components';
import './Wallet.css'

class Wallet extends Component{
  render(){
    let badges = [[
      {type: "compost", desc: "Composted leftovers from a meal", earned: 5, required: 5},
      {type: "recycle", desc: "Recycled a bottle or can", earned: 8, required: 8},
      {type: "vegetarian", desc: "Ate a vegetarian meal", earned: 12, required: 12},
    ], [
      {type: "compost", desc: "Composted leftovers from a meal", earned: 5, required: 10},
      {type: "publicTransit", desc: "Took public transportation", earned: 8, required: 8},
      {type: "windTurbine", desc: "Installed a wind turbine", earned: 0, required: 1},
    ], [
      {type: "publicTransit", desc: "Took public transportation", earned: 8, required: 10},
      {type: "windTurbine", desc: "Installed a wind turbine", earned: 0, required: 1},
    ]];

    let puzzles = [{
      imgUrl: "/puzzles/logo-rare.png", reward: "Free t-shirt", company: "rare", progress: 100
    }, {
      imgUrl: "https://illuminatisymbols.info/wp-content/uploads/illuminati-symbols-Starbucks-Coffee-Logo.gif", reward: "Free coffee", company: "Starbucks", progress: 40
    }, {
      imgUrl: "https://banner2.kisspng.com/20180424/uww/kisspng-chase-bank-jpmorgan-chase-car-finance-loan-chase-5adf8d0d931767.1989114615246000776025.jpg", reward: "Internship", company: "JPMorgan", progress: 0
    }];

    return(
      <div className="Wallet container">
        <h1>Wallet</h1>
        <h2>Puzzles in-progress</h2>
        <Collection puzzle={puzzles[0]} badges={badges[0]}/>
        <Collection puzzle={puzzles[1]} badges={badges[1]}/>
        <Collection puzzle={puzzles[2]} badges={badges[2]}/>
        <h2>Completed badges</h2>
        <MultiBadgeContainer />
      </div>
    )
  }
}
export default Wallet;
