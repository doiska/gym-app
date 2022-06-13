import React, { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Exercises from '../components/Exercises';
import { exerciseRequestHeaders, fetchData } from '../utils/fetchData';

const Home = () => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            const res = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseRequestHeaders
            );
        }
    };

    return (
        <Box>
            <Hero />
            <SearchBar search={search} onSearch={setSearch} />
            <Exercises />
        </Box>
    );
};

export default Home;
