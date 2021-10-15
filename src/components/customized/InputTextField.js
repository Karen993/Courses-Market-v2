import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import {PAGE_PRIMARY_COLOR} from "../../constants/colors";

const InputTextField = styled(TextField)({
    width: 300,
    margin: 10,
    zIndex: 0,

    
    '& label.Mui-focused': {
        color: PAGE_PRIMARY_COLOR,
        borderWidth: 2,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: PAGE_PRIMARY_COLOR,
        color: PAGE_PRIMARY_COLOR,
        borderWidth: 2,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: PAGE_PRIMARY_COLOR,
            color: PAGE_PRIMARY_COLOR,
            borderWidth: 2,
        },
        '&:hover fieldset': {
            borderColor: PAGE_PRIMARY_COLOR,
            color: PAGE_PRIMARY_COLOR,
            borderWidth: 2,
        },
        '&.Mui-focused fieldset': {
            borderColor: PAGE_PRIMARY_COLOR,
            color: PAGE_PRIMARY_COLOR,
            borderWidth: 2,
        },
        borderRadius: 15,
    },
});

export {InputTextField}