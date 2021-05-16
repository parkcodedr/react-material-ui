import React from 'react';
import {
    AppBar, Toolbar, Typography,
    Button,
    IconButton, makeStyles, Grid, InputBase, Badge

} from '@material-ui/core';

import SettingsPowerOutlinedIcon from '@material-ui/icons/SettingsPowerOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';




export default function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase color="inherit" />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="error">
                                <SettingsPowerOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="error">
                                <MailOutlineOutlinedIcon />
                            </Badge>
                        </IconButton>

                    </Grid>

                </Grid>

            </Toolbar>
        </AppBar>
    );
}
