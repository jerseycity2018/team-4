import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Badge } from '..';
import './Collection.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Collection extends PureComponent {
  render(){
    const { classes, badges, puzzle} = this.props;

    const style = {
      filter: `grayscale(${100-puzzle.progress}%)`
    };

    let myButton;
    if (!puzzle.hideButton) {
      if (puzzle.progress === 100)
        myButton = <Button variant="contained" className="redeemButton">Redeem</Button>;
      else
        myButton = <Button variant="contained" disabled>{puzzle.progress}%</Button>;
    }

    return(
      <div class="Collection">
        <Paper className={classes.root} elevation={1}>
          <div class="badgeList">
            {badges.map((badge) => <Badge type={badge.type} bgColor={badge.bgColor} desc={badge.desc} earned={badge.earned} required={badge.required}/>)}
          </div>
          <div className="puzzleInfo">
            <img style={style} src={puzzle.imgUrl} />
            <div className="puzzleText">
              <h3>{puzzle.reward}</h3>
              <p>{puzzle.company}</p>
            </div>
            {myButton}
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Collection);
