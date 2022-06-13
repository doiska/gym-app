import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
};

export default App;
