import {makeStyles} from "@mui/styles";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

import {PAGE_PRIMARY_COLOR, PAGE_SECONDARY_COLOR} from "../../constants/colors";


const marginSize = 20;

const useStyles = makeStyles(() => {
    return {
        container: {
            height: '60px',
            backgroundColor: PAGE_PRIMARY_COLOR,
            display: 'flex',
            justifyContent: 'space-between'
        },
        logo: {
            marginLeft: '10px'
        },
        linkPassive: {
            color: PAGE_SECONDARY_COLOR,
            marginLeft: marginSize,
            marginRight: marginSize,
            fontSize: 20,
            fontFamily: "sans-serif",
            textDecoration: 'none'
        },
        linkActive: {
            color: PAGE_PRIMARY_COLOR,
            backgroundColor: PAGE_SECONDARY_COLOR,
            border: '8px solid',
            borderColor: PAGE_SECONDARY_COLOR,
            borderRadius: 10,
            marginLeft: marginSize,
            marginRight: marginSize,
            fontSize: 20,
            fontFamily: "sans-serif",
            textDecoration: 'none'
        },
        linkBox: {
            display: "flex",
            alignItems: "center",
        },
        popupMenuLink:{
            color: PAGE_PRIMARY_COLOR,
            fontFamily: "sans-serif",
            textDecoration: 'none',
            fontSize: 15,
        },
        userAvatar: {
            height: 45,
            width: 45,
            marginLeft: marginSize,
            marginRight: marginSize,
            cursor: 'pointer'
        },
        userName: {
            color: PAGE_PRIMARY_COLOR,
            fontFamily: "sans-serif",
            textDecoration: 'none',
            fontSize: 15,
            margin: 15
        }
    }
})

const LogInButton = styled(Button)(() => ({
    color: PAGE_SECONDARY_COLOR,
    backgroundColor: PAGE_PRIMARY_COLOR,
    border: '1px solid',
    borderColor: PAGE_SECONDARY_COLOR,
    borderRadius: 5,
    fontFamily: 'sans-serif',
    marginLeft: marginSize,
    marginRight: marginSize,
    '&:hover': {
        backgroundColor: PAGE_SECONDARY_COLOR,
        color: PAGE_PRIMARY_COLOR
    },
}));

export {useStyles, LogInButton};