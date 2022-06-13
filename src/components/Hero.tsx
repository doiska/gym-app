import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HeroImage from '../assets/images/banner.png';

const Hero = () => {
    return (
        <Box
            sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
            position="relative"
            p="20px"
        >
            <Typography color={'#FF2625'} fontWeight={600} fontSize={'26px'}>
                Fitness is a state of being.
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px"
                mt="30px"
            >
                Find your perfect workout
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out our fitness programs and see if you are fit.
            </Typography>
            <Button
                variant={'contained'}
                color={'error'}
                sx={{ backgroundColor: '#ff2625', padding: '10px' }}
            >
                Explore exercises
            </Button>
            <Typography
                fontWeight={600}
                color={'#ff2625'}
                fontSize={'200px'}
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' },
                }}
            >
                Exercise
            </Typography>
            <img
                src={HeroImage}
                alt={'Hero image'}
                className={'hero-banner-img'}
            />
        </Box>
    );
};

export default Hero;
