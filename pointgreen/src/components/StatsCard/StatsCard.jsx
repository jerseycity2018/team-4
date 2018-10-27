import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './StatsCard.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class StatsCard extends PureComponent {
  render(){
    const { classes, num, title } = this.props;

    return (
      <div class="StatsCard">
        <Paper className={classes.root} elevation={1}>
          <h2>{num}</h2>
          <Typography variant="h5" component="h3">
            {title}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StatsCard);
