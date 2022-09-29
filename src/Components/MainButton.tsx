import Button from '@mui/material/Button';
import {styled, Theme} from '@mui/material/styles';
import {Badge, Box, Stack, Typography, useMediaQuery} from "@mui/material";
import React, {useContext} from "react";
import {MyContext} from "../Context/MyContext";
// noinspection ES6PreferShortImport
import {Menu} from '../react-app-env.d';

const TheButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: '33px',
    backgroundColor: 'transparent',
    height: '80px',
    color: '#e0d7ec',
    textTransform: 'none',
    fontWeight: '500',
    '&:hover': {
        backgroundColor: '#905fd5'
    }
});

interface Props {
    icon: any
    text: string
}

const MainButton: React.FC<Props> = ({icon, text}) => {
    const {menu, setMenu, quizStarted} = useContext(MyContext);

    const changeMenu = (menu: string) => setMenu(menu)

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <TheButton
            disableRipple
            sx={{
                backgroundColor: menu === text ? '#844ed2' : '',
                width: isSmallScreen?'100px':null,
            }}
            onClick={() => changeMenu(text)}
        >
            <Stack>
                <Box sx={{height: 22}}>
                    <Badge color={"success"} variant="dot" invisible={!((text === Menu.Quiz) && (quizStarted))}>
                        {icon}
                    </Badge>
                </Box>
                <Typography>
                    {text}
                </Typography>
            </Stack>
        </TheButton>
    );
}

export default MainButton;
