import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {Box, Stack} from "@mui/material";
import React from "react";

const TheButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: '33px',
    height: '80px',
    color: '#e0d7ec',
    textTransform: 'none',
    fontWeight: '500',
    '&:focus': {
        backgroundColor: '#844ed2',
    },
});

interface Props {
    icon: any
    text: string
}
const MainButton: React.FC<Props> = ({icon, text}) => (
    <TheButton disableRipple>
        <Stack>
            <Box sx={{height: 22}}>
                {icon}
            </Box>
            {text}
        </Stack>
    </TheButton>
);

export default MainButton;