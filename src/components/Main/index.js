import React from 'react'
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPain from './RightPain';
const Main = () => {
    const style = {
        paper: { padding: 20, marginTop: 10, marginBottom: 10 }
    }
    return (
        <Grid container>
            <Grid item sm>
                <LeftPane styles={style} />
            </Grid>

            <Grid item sm>
                <RightPain styles={style} />
            </Grid>


        </Grid>
    );
}

export default Main;