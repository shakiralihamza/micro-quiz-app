import React, {useContext} from 'react';
import {MyContext} from "../Context/MyContext";
import {Box, Grid, Typography} from "@mui/material";

function Result() {
    const {result, quizStarted} = useContext(MyContext);
    return (
        <Box sx={{
            height: '100%',
            backgroundColor: '#fdf8ef',
        }}>
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
                <Grid item xs={8} sm={10} md={'auto'}>
                    <Typography variant={"h4"} sx={{lineHeight: '1.5'}}>
                        {
                            result == null
                                ?
                                <>No result to show, please finish a quiz first</>
                                :
                                quizStarted
                                    ?
                                    <>Please finish the quiz first</>
                                    :
                                    <>Last finished Quiz's Score:<span style={{color: '#71a943'}}> {result}</span></>
                        }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Result;