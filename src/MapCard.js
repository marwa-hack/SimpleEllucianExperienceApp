import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../node_modules/@ellucian/react-design-system/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Typography
} from '../node_modules/@ellucian/react-design-system/core';
import GoogleMap from './GoogleMap.js'

const styles = () => ({
    actions: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between'
    },
    card: {
        width: '30rem',
    },
    centerContent: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    media: {
        height: '30.625rem',
    },
});

/**
 * Map Card
 */
function MapCard(props) {
    const { classes } = props;
    const customId = 'MapCard';

    return (
        <div className={classes.root} id={`${customId}_Container`}>
            <Typography id={`${customId}_CardDescription`} paragraph>
                This is a google maps card in development mode, no API key provided.
            </Typography>
            <Card className={classes.card} id={`${customId}_Card0`}>
                <CardHeader title="A Map Card"/>
                <CardContent id={`${customId}_CardContent0`}>
                    <Typography variant="body2" align="center">
                        <GoogleMap />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

MapCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapCard);