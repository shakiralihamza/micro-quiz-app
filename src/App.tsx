import React, {useState} from 'react';
import LeftComponent from "./Components/LeftComponent";
import {Grid, ThemeProvider} from "@mui/material";
import {MyContext} from "./Context/MyContext";
// noinspection ES6PreferShortImport
import {Difficulty, Menu} from './react-app-env.d';
import RightComponent from "./Components/RightComponent";
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4203d5',
        }
    },
});

interface ContextType {
    menu: string
    difficulty: string
    NoOfQuestions: number
    setMenu: (menu: string) => void
    setDifficulty: (difficulty: string) => void
    setNoOfQuestions: (NoOfQuestions: number) => void
}

function App() {
    const [menu, setMenu] = useState<string>(Menu.Settings);
    const [difficulty, setDifficulty] = useState<string>(Difficulty.Easy)
    const [NoOfQuestions, setNoOfQuestions] = React.useState<number>(5);
    const ContextValues: ContextType = {
        menu,
        setMenu,

        difficulty,
        setDifficulty,

        NoOfQuestions,
        setNoOfQuestions
    }

    return (
        <MyContext.Provider value={ContextValues}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{height: '100vh'}}>
                    <Grid item sx={{
                        backgroundImage: 'linear-gradient(to bottom, #4203d5, #5e02a9)',
                        width: '130px'
                    }}>
                        <LeftComponent/>
                    </Grid>
                    <Grid item xs sx={{backgroundColor: '#fdf8ef'}}>
                        <RightComponent/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MyContext.Provider>
    );
}

export default App;
