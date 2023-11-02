import { useHttp } from 'hooks/useHttp'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { fetchMovies } from 'services/api'
import { Item, LinkDetails, List, LogoIcon } from '../Movies/Movies.styled'



export const Home = () => {
    const location = useLocation();
    const [movies] = useHttp(fetchMovies)

    return (


        <div>
            <div>
                <h2>Trending today </h2>

                <List>
                    {movies?.map(movie => (
                        <Item key={movie.id}>
                            <LinkDetails
                                to={`/movies/${movie.id.toString()}`}
                                cover={movie.poster_path}
                                state={{ from: location }}>
                                <LogoIcon /> {movie.title}

                            </LinkDetails>
                        </Item>
                    ))}
                </List>
            </div>

        </div>

    )
}


