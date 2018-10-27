import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Badge } from '..';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class MultiBadgeContainer extends PureComponent {
  render(){
    let badges = [
      {type: "compost", desc: "Composted leftovers from a meal", earned: 5},
      {type: "recycle", desc: "Recycled a bottle or can", earned: 8},
      {type: "vegetarian", desc: "Ate a vegetarian meal", earned: 12},
      {type: "compost", desc: "Composted leftovers from a meal", earned: 5},
      {type: "publicTransit", desc: "Took public transportation", earned: 8},
    ];

    const { classes } = this.props;

    return(
      <div>
        <Paper className={classes.root} elevation={1}>
          {badges.map((badge) => <Badge type={badge.type} bgColor={badge.bgColor} desc={badge.desc} earned={badge.earned} required={badge.required}/>)}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(MultiBadgeContainer);
