import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface Props {}

const HourSelector: React.FC<Props> = () => {
    const [selectedHours, setSelectedHours] = useState<number[]>([]);

    const handleHourClick = (hour: number) => {
        setSelectedHours((prevSelectedHours) =>
            prevSelectedHours.includes(hour)
                ? prevSelectedHours.filter((h) => h !== hour)
                : [...prevSelectedHours, hour]
        );
    };

    return (
        <Box p={2}>
            <Typography variant="h6" gutterBottom>
                Select the hours:
            </Typography>
            <Box display="flex" justifyContent="space-between">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
                    (hour) => (
                        <Button
                            key={hour}
                            variant={selectedHours.includes(hour) ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => handleHourClick(hour)}
                        >
                            {hour}:00
                        </Button>
                    )
                )}
            </Box>
        </Box>
    );
};

export default HourSelector;