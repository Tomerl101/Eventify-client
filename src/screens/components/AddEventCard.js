import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/PlaylistAdd';

const styles = theme => ({
    card: {
        width: 230,
    },
    media: {
    },
    cardContent: {
        height: 321,
        padding: 0,
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        fontSize: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    }
});


class AddEventCard extends Component {

    onCardClick = async () => {
        console.log('clicked to add');
        const { setIsModalAddEventOpen } = this.props.store;
        setIsModalAddEventOpen(true);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item>
                <MuiCard className={classes.card} onClick={this.onCardClick}>
                    <CardActionArea>
                        <CardContent className={classes.cardContent}>
                            <IconButton aria-label="forward">
                                <AddIcon style={{ fontSize: '462%' }} />
                            </IconButton>
                        </CardContent>
                    </CardActionArea>
                </MuiCard>
            </Grid>
        );
    }
}

export default withStyles(styles)(inject('store')(observer(AddEventCard)));
