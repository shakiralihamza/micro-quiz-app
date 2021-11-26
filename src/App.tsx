import React, {useState} from 'react';
import LeftComponent from "./Components/LeftComponent";
import {Grid} from "@mui/material";
import {MyContext} from "./Context/MyContext";
// noinspection ES6PreferShortImport
import { Menu } from './react-app-env.d';

interface ContextType {
    menu: string
    setMenu: (menu: string) => void
}

function App() {
    const [menu, setMenu] = useState<string>(Menu.Settings);
    const ContextValues: ContextType = {
        menu,
        setMenu
    }

    return (
        <MyContext.Provider value={ContextValues}>
            <Grid container sx={{height: '100vh'}}>
                <Grid item sx={{
                    backgroundImage: 'linear-gradient(to bottom, #4203d5, #5e02a9)',
                    width: '130px'
                }}>
                    <LeftComponent/>
                </Grid>
                <Grid item xs sx={{backgroundColor: '#fdf8ef'}}>

                </Grid>
            </Grid>
        </MyContext.Provider>
    );
}

export default App;
