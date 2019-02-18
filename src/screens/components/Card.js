import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    width: 275,
    height: 340
  },
  media: {
    height: 180,
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.light
  }
});


class Card extends Component {

  onCardClick = () => {
    const { _id } = this.props.item;
    this.props.history.push(`/playlists/${_id}`);
  }

  render() {
    const { classes, item } = this.props;
    const { event_img: imageUrl, name: eventName } = item;
    return (
      <Grid item>
        <MuiCard className={classes.card} onClick={this.onCardClick}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={eventName}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h5">
                {eventName}
              </Typography>
              <Typography component="p">
                this is my amazing event playlist
          </Typography>
            </CardContent>
          </CardActionArea>
        </MuiCard>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Card));