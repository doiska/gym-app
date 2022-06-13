import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchExercises, TExercise, RapidUrls } from '../utils/fetchExercises';
import HorizontalScrollbar from './HorizontalScrollbar';

type Props = {
    bodyPart: string;
    setBodyPart: (bodyPart: string) => void;
};

const SearchBar = ({ bodyPart, setBodyPart }: Props) => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState<TExercise[]>([]);
    const [bodyParts, setBodyParts] = useState<string[]>([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchExercises<string[]>(
                RapidUrls.BODY_PARTS
            );

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const res = await fetchExercises<TExercise[]>(RapidUrls.EXERCISES);

            const searched = res.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searched);
        }
    };

    return (
        <Stack
            alignItems={'center'}
            mt={'37px'}
            justifyContent={'center'}
            p={'20px'}
        >
            <Typography
                mb={'50px'}
                fontWeight={700}
                textAlign="center"
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
            >
                Awesome exercises for you to try
            </Typography>
            <Box position={'relative'} mb={'72px'}>
                <TextField
                    type={'text'}
                    value={search}
                    placeholder={'Search exercises'}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: {
                            lg: '1170px',
                            xs: '350px',
                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {
                            lg: '170px',
                            xs: '100px',
                        },
                        fontSize: {
                            lg: '20px',
                            xs: '14px',
                        },
                        height: '56px',
                        position: 'absolute',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    setBodyParts={setBodyParts}
                    bodyParts={bodyParts}
                />
            </Box>
        </Stack>
    );
};

export default SearchBar;
