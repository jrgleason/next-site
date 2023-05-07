import React, { useState } from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';
import HourSelector from './HourSelector';
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Scheduler } from "@aldabil/react-scheduler";


interface Props {
    label: string;
}

const HourPicker: React.FC<Props> = ({ label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button color="primary" onClick={handleOpen} className={"text-black"}>
                <span className={"text-black"}><FontAwesomeIcon icon={faCalendarAlt} /></span>
                <span className={"text-black"}>&nbsp;Schedule</span>
            </Button>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Select Hours</DialogTitle>
                <Scheduler events={[]} />
            </Dialog>
        </>
    );
};

export default HourPicker;