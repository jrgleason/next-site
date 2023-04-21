import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {DialogTitle} from "@mui/material";

function ContactMe() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={"text-black"}>
            <Button onClick={handleOpen}>Email Me</Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Contact Me</DialogTitle>
            </Dialog>
        </div>
    );
}

export { ContactMe }