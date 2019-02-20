import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class EventForm extends Component {

    handleChange = event => {
        const { onChangeInputs } = this.props.store;
        onChangeInputs(event.target.name, event.target.value);
    };

    render() {
        const { classes } = this.props;
        const { inputPlaylistsUri,
            inputEventImg,
            inputEventName,
            inputEventDescription } = this.props.store
        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Event Name</InputLabel>
                    <Input
                        id="component-simple"
                        name='inputEventName'
                        value={inputEventName}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Event Image</InputLabel>
                    <Input
                        id="component-simple"
                        name='inputEventImg'
                        value={inputEventImg}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                    <FormHelperText id="component-helper-text">Image URL</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Description</InputLabel>
                    <Input
                        id="component-simple"
                        name='inputEventDescription'
                        value={inputEventDescription}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Playlists</InputLabel>
                    <Input
                        id="component-simple"
                        name='inputPlaylistsUri'
                        value={inputPlaylistsUri}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                    <FormHelperText id="component-helper-text">Enter playlist LIST by thier id's</FormHelperText>
                </FormControl>

            </div>
        );
    }
}

export default withStyles(styles)(inject('store')(observer(EventForm)));