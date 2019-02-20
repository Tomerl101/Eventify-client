import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class EventForm extends Component {
    state = {
        name: 'Event Name',
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Event Name</InputLabel>
                    <Input
                        id="component-simple"
                        value={this.state.name}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Event Image</InputLabel>
                    <Input
                        id="component-simple"
                        value={this.state.image}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />

                    <FormHelperText id="component-helper-text">Image URL</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Event ID</InputLabel>
                    <Input
                        id="component-simple"
                        value={this.state.e_id}
                        onChange={this.handleChange}
                        aria-describedby="component-simple"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel component="legend">Add Playlists</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox value="playlist1" />
                            }
                            label="playlist1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="playlist2" />
                            }
                            label="playlist2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="playlist3"
                                />
                            }
                            label="playlist3"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

EventForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventForm);