import {Grid, Stack, useMediaQuery} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MainButton from "./MainButton";
import QuizIcon from '@mui/icons-material/Quiz';
// noinspection ES6PreferShortImport
import {Menu} from '../react-app-env.d';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import {Theme} from "@mui/material/styles";

function MainMenu() {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            justifyContent={'center'}
            alignContent={'center'}
            sx={{height: '100%'}}
        >
            <Grid item xs={12} sm={10}>
                <Stack
                    spacing={isSmallScreen?0:6}
                    justifyContent={'space-evenly'}
                    direction={isSmallScreen?'row':'column'}
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
