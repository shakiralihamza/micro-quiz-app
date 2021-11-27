import React, {useContext} from 'react';
import {MyContext} from "../Context/MyContext";
import {Box, Typography} from "@mui/material";

function Result() {
    const {result, quizStarted} = useContext(MyContext);
    return (
        <Box sx={{
            width: '100%', height: '100%',
            backgroundColor: '#fdf8ef',
        }}>
            <Typography textAlign={'center'} variant={"h4"} pt={20}>
                {
                    result == null
                        ?
                        <>No result to show, please finish a quiz first</>
                        :
                        quizStarted
                            ?
                            <>Please finish the quiz first</>
                            :
                            <>Last finished Quiz's Score: <span style={{color: '#71a943'}}>{result}</span></>
                }
            </Typography>
        </Box>
    );
}

export default Result;