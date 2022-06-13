import React, { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Exercises from '../components/Exercises';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <Hero />
            <SearchBar bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises />
        </Box>
    );
};

export default Home;
