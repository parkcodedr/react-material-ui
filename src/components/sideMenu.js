import React from 'react';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        height: '100%',
        width: '320px',
        backgroundColor: '#253053',
        margin: '0px'
    }
})

const SideMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>

        </div>
    );
}

export default SideMenu;