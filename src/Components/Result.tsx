import React, {useContext} from 'react';
import {MyContext} from "../Context/MyContext";
import {Box, Typography} from "@mui/material";

function Result() {
    const {result} = useContext(MyContext);
    return (
        <Box sx={{
            width: '100%', height: '100%',
            backgroundColor: '#fdf8ef',
        }}>
            <Typography textAlign={'center'} variant={"h4"} pt={20}>
                {
                    result == null
                        ?
                        <>No result to show, please finish a quiz first.</>
                        :
                        <>Finished Quiz's Score: {result}</>
                }
            </Typography>
        </Box>
    );
}

export default Result;