import { useHttp } from 'hooks/useHttp'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCast } from 'services/api'
import { Item, List } from './Cast.styled'
import PropTypes from 'prop-types';

const MovieCast = () => {
    const { movie_id } = useParams()
    const [cast] = useHttp(fetchMovieCast, movie_id)
    return (
        <div>
            <h2>Movie Cast</h2>
            <List>
                {cast?.map(actor => (
                    <Item key={actor.id}>
                        <img
                            width="200px"
                            height="300px"
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                                    : `${process.env.PUBLIC_URL}/images/ava.png`
                            }
                            alt={actor.original_name}
                        />
                        <p>{actor.name}</p></Item>
                ))}
            </List>
        </div>
    )
}



export default MovieCast