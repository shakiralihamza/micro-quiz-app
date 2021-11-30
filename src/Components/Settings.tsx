import {Box, Grid, SelectChangeEvent, Typography} from '@mui/material';
import Slider from '@mui/material/Slider';
import React, {useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// noinspection ES6PreferShortImport
import {Difficulty} from "../react-app-env.d";
import {MyContext} from "../Context/MyContext";

const marks = [
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 15,
        label: '15',
    },
    {
        value: 20,
        label: '20',
    },
];


function Settings() {
    const {difficulty, setDifficulty, NoOfQuestions, setNoOfQuestions} = useContext(MyContext);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setNoOfQuestions(newValue);
    };
    const handleDifficultyChange = (event: SelectChangeEvent) => setDifficulty(event.target.value as string)
    return (
        <Box sx={{
            width: '100%', height: '100%',
            backgroundColor: '#fdf8ef',
        }}>
            <Grid container alignContent={'center'} justifyContent={'center'} sx={{height: '100%'}}>
                <Grid item>
                    <Grid container spacing={3} sx={{padding: '20px 40px 0'}} alignItems={'center'}>
                        <Grid item xs={"auto"}>
                            <Typography>Number of Questions:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{marginLeft: '20px'}}>
                            <Box>
                                <Slider
                                    value={NoOfQuestions}
                                    min={5}
                                    max={20}
                                    step={null}
                                    onChange={handleSliderChange}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={"auto"}>
                            <Typography>Difficulty:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{marginLeft: '20px'}}>
                            <FormControl fullWidth>
                                <Select
                                    value={difficulty}
                                    onChange={handleDifficultyChange}
                                >
                                    <MenuItem value={Difficulty.Easy}>{Difficulty.Easy}</MenuItem>
                                    <MenuItem value={Difficulty.Medium}>{Difficulty.Medium}</MenuItem>
                                    <MenuItem value={Difficulty.Hard}>{Difficulty.Hard}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Settings;