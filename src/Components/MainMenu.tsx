import {Grid, Stack, useMediaQuery} from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import MainButton from "./MainButton";
import QuizIcon from '@mui/icons-material/Quiz';
// noinspection ES6PreferShortImport
import {Menu} from '../react-app-env.d';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function MainMenu() {
    // @ts-ignore
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            justifyContent={'center'}
            alignContent={'center'}
            sx={{width: '100%', height: '100%'}}
        >
            <Grid item xs={12} sm={10}>
                <Stack
                    spacing={isSmallScreen?0:6}
                    justifyContent={'space-evenly'}
                    direction={isSmallScreen?'row':'column'}
                    sx={{
                        width: '100%',
                        height: '100%',
                        margin: isSmallScreen?'10px 0':null
                    }}
                >
                    <MainButton icon={<SettingsIcon fontSize={'small'}/>} text={Menu.Settings}/>
                    <MainButton icon={<QuizIcon fontSize={'small'}/>} text={Menu.Quiz}/>
                    <MainButton icon={<FactCheckIcon fontSize={'small'}/>} text={Menu.Result}/>
                </Stack>
            </Grid>
        </Grid>

    );
}

export default MainMenu;