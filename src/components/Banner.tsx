import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import Snackbar from '@mui/material/Snackbar';
import * as React from "react";
import {FaCopy} from "react-icons/fa";


interface Props {
    onClick?: () => void;
}

function Banner({onClick}: Props) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <div onClick={handleClick}><FaCopy size={24} onClick={onClick} /></div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Текст скопирован в буфер обмена."
            />
        </>
    );
}

export default Banner
