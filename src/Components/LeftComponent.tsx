import {Grid, Stack} from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import MainButton from "./MainButton";

function LeftComponent() {
    return (
        <Grid
            container
            justifyContent={'center'}
            alignContent={'center'}
            sx={{width: '100%', height: '100%'}}
        >
            <Grid item xs={10}>
                <Stack
                    spacing={6}
                    direction={'column'}
                    sx={{width: '100%', height: '100%'}}
                >
                   <MainButton icon={<SettingsIcon fontSize={'small'}/>} text={'Settings'}/>
                </Stack>
            </Grid>
        </Grid>

    );
}

export default LeftComponent;