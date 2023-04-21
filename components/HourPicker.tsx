import React, { useState } from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';
import HourSelector from './HourSelector';
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    label: string;
}

const HourPicker: React.FC<Props> = ({ label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button color="primary" onClick={handleOpen}>
                <FontAwesomeIcon icon={faCalendarAlt} className={"text-white text-2xl"}/>
            </Button>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Select Hours</DialogTitle>
                <HourSelector />
            </Dialog>
        </>
    );
};

export default HourPicker;