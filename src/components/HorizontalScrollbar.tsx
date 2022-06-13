import React from 'react';
import { Box } from '@mui/material';
import { BodyPart } from './BodyPart';

type Props = {
    bodyPart: string;
    setBodyPart: (bodyPart: string) => void;

    bodyParts: string[];
    setBodyParts: (bodyParts: string[]) => void;
};

const HorizontalScrollbar = ({ bodyParts }: Props) => {
    return (
        <div>
            {bodyParts.map((item) => {
                return (
                    <Box key={item} itemID={item} title={item} m={'0 40px'}>
                        <BodyPart key={item} />
                    </Box>
                );
            })}
        </div>
    );
};

export default HorizontalScrollbar;
