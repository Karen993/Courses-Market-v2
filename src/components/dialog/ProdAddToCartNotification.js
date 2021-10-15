import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProdAddToCartNotification({onOK}) {
    return(
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={onOK}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Product has been added to your cart.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onOK()} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}