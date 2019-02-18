import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getEventPlaylists as getEventPlaylistsServer } from '../../../server/getEventPlaylists';


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

const onCardClick = (id) => {
  let playlists = getEventPlaylistsServer(id);
}

function Card(props) {
  const { classes, item } = props;
  const { event_img: imageUrl, name: eventName, _id } = item;
  return (
    <Grid item>
      <MuiCard className={classes.card} onClick={() => onCardClick(_id)}>
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

export default withStyles(styles)(Card);