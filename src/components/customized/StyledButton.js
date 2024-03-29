import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

import {PAGE_PRIMARY_COLOR, PAGE_PRIMARY_COLOR_DARK, PAGE_SECONDARY_COLOR} from "../../constants/colors";

export const StyledButton = styled(Button)(() => ({
    color: PAGE_SECONDARY_COLOR,
    backgroundColor: PAGE_PRIMARY_COLOR,
    borderRadius: 15,
    fontFamily: 'sans-serif',
    width: 200,
    height: 45,

    '&:hover': {
        backgroundColor: PAGE_PRIMARY_COLOR_DARK,
    },
}));

