import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {signOut} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {InputTextField} from "../customized/InputTextField";
import {StyledButton} from "../customized/StyledButton";
import {selectUserInfo} from "../../redux/common/userInfo/selectors";
import {updateAccountDate} from "../../controllers/authControllers";
import {setRenderProject} from "../../redux/common/renderProject";
import {auth} from "../../firebase";
import {MAIN_ROUTE} from "../../constants/routes";
import {PAGE_PRIMARY_COLOR, PAGE_SECONDARY_COLOR} from "../../constants/colors";


const useStyles = makeStyles(() => {
    return {
        main: {
            display: "flex",
            justifyContent: "center",
        },
        wrapper: {
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            height: 600,
            width: 500,
            backgroundColor: PAGE_SECONDARY_COLOR,
            borderRadius: 15,

        },
        container:{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        buttonSection: {
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
        },
        hint: {
            color: "gray",
            fontFamily: "sans-serif",
            fontSize: 12,
            marginTop: 50
        },
        errorMessage:{
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontFamily: "sans-serif",
            fontSize: 15
        },
        textFieldBlock:{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        },
        text:{
            fontFamily: "sans-serif",
            fontSize: 20,
            color: PAGE_PRIMARY_COLOR
        },
        h1: {
            textAlign: "center",
            color: PAGE_PRIMARY_COLOR
        }
    }
})

function UserProfile() {
    const userInfo = useSelector(selectUserInfo);
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setEmail(userInfo.email);
        setAvatarUrl(userInfo.avatarUrl);
        setUserName(userInfo.userName);
    }, [userInfo])


    const handleSubmit = async (event) => {
       event.preventDefault();

        setEmail(email.trim());
        if(avatarUrl){
            setAvatarUrl(avatarUrl.trim());
        }
        setUserName(userName.trim());
        setPassword(password.trim());

       try{
           await updateAccountDate({email, password, avatarUrl, userName});
       }catch (e) {
           setErrorMessage(e.message);
           return;
       }

       history.push(MAIN_ROUTE);
       if(password){
           await signOut(auth);
       }else{
           dispatch(setRenderProject());
       }
    }

    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <h1 className={classes.h1}>Profile Information</h1>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <div className={classes.textFieldBlock}>
                            <span className={classes.text}>Email: </span>
                            <InputTextField  value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={classes.textFieldBlock}>
                            <span className={classes.text}>Username: </span>
                            <InputTextField  value={userName} onChange={e => setUserName(e.target.value)}/>
                        </div>
                        <div className={classes.textFieldBlock}>
                            <span className={classes.text}>Avatar url: </span>
                            <InputTextField value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)}/>
                        </div>
                        <div className={classes.textFieldBlock}>
                            <span className={classes.text}>New Password: </span>
                            <InputTextField value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>


                        <div className={classes.errorMessage}>
                            {errorMessage
                                ? errorMessage
                                : <span style={{color:PAGE_SECONDARY_COLOR}}>hint</span> }
                        </div>

                        <div className={classes.buttonSection}>
                            <StyledButton variant="contained" type="submit">Update Profile</StyledButton>
                        </div>

                        <p className={classes.hint}>*password should at least 6 symbols</p>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default UserProfile;