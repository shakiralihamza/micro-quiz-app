import {Grid, Stack} from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import MainButton from "./MainButton";
import QuizIcon from '@mui/icons-material/Quiz';
// noinspection ES6PreferShortImport
import { Menu } from '../react-app-env.d';
import FactCheckIcon from '@mui/icons-material/FactCheck';

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
                   <MainButton icon={<SettingsIcon fontSize={'small'}/>} text={Menu.Settings}/>
                   <MainButton icon={<QuizIcon fontSize={'small'}/>} text={Menu.Quiz}/>
                   <MainButton icon={<FactCheckIcon fontSize={'small'}/>} text={Menu.Result}/>
                </Stack>
            </Grid>
        </Grid>

    );
}

export default LeftComponent;