import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {Box, Stack} from "@mui/material";
import React, {useContext} from "react";
import {MyContext} from "../Context/MyContext";

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
    const {menu, setMenu} = useContext(MyContext);

    const changeMenu = (menu: string) => setMenu(menu)

    return (
        <TheButton
            disableRipple
            sx={{
                backgroundColor: menu === text ? '#844ed2' : ''
            }}
            onClick={() => changeMenu(text)}
        >
            <Stack>
                <Box sx={{height: 22}}>
                    {icon}
                </Box>
                {text}
            </Stack>
        </TheButton>
    );
}

export default MainButton;