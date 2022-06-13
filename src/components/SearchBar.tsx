import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

type Props = {
    search: string;
    onSearch: (search: string) => void;
};

const SearchBar = ({ search, onSearch }: Props) => {
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
                    onChange={(e) => onSearch(e.target.value)}
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
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchBar;
