import React, { useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/api';
import { useLocation } from 'react-router-dom';
import { Item, LinkDetails, List, LogoIcon } from 'pages/Movies/Movies.styled';

import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


export const Movies = () => {

    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSetQuery = (movieName) => {
        setSearchParams({ search: movieName });
    }
    const searchParam = searchParams.get('search') ?? '';
    useEffect(() => {
        const handleSearch = async (movieName) => {
            try {
                console.log('Введений текст для пошуку:', movieName);
                // Викликати функцію пошуку та отримати результати
                const results = await searchMovies(movieName);
                console.log('Результати пошуку:', results);
                setSearchResults(results);
            } catch (error) {
                console.error('Помилка пошуку фільмів:', error);
            }
        };

        searchParam && handleSearch(searchParam)

    }, [searchParam, setSearchParams]);


    return (
        <div>
            {/* <Link to={goBackRef.current}>Go back</Link> */}
            <h1>Movies</h1>
            <SearchForm handleSetQuery={handleSetQuery} />
            <div>
                {/* <h2>Результати пошуку:</h2> */}
                <List>
                    {searchResults?.map((movie) => (
                        <Item key={movie.id}>
                            <LinkDetails to={movie.id.toString()}
                                cover={movie.poster_path}
                                state={{ from: location, searchResults }}
                            >
                                <LogoIcon />{movie.title}
                            </LinkDetails>
                        </Item>
                    ))}
                </List>
            </div>
        </div>
    );
};
