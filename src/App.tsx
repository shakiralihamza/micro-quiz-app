import React from 'react';
import LeftComponent from "./Components/LeftComponent";
import {Grid} from "@mui/material";

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
