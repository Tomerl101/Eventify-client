import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/ControlPoint';

const styles = theme => ({
    card: {
        width: 230,
        Height: 200
    },
    media: {
    },
    cardContent: {
        height: 284,
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
        const { classes, item } = this.props;
        return (
            <Grid item>
                <MuiCard className={classes.card} onClick={this.onCardClick}>
                    <CardActionArea>
                        <CardContent className={classes.cardContent}>
                            <IconButton aria-label="forward">
                                <AddIcon fontSize='large' />
                            </IconButton>
                        </CardContent>
                    </CardActionArea>
                </MuiCard>
            </Grid>
        );
    }
}

export default withStyles(styles)(inject('store')(observer(AddEventCard)));
