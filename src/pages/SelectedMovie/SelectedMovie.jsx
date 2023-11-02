import { useHttp } from 'hooks/useHttp'
import React, { useRef } from 'react'
import { fetchMovieById } from 'services/api'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { Container, Description, Image, ImageContainer, Links, ProdCompany, WrapperLink } from 'pages/SelectedMovie/SelectedMovie.styled'
import noimage from 'components/images/noimage.svg';
import Button from 'components/Button/Button'
import { Suspense } from 'react'
import PropTypes from 'prop-types';

const SelectedMovie = () => {
    const { movie_id } = useParams()
    const location = useLocation()
    const goBackRef = useRef(location.state?.from || '/')
    const [movie] = useHttp(fetchMovieById, movie_id)
    console.log(movie);
    if (!movie) {
        return <h2>Loading...</h2>
    }
    const productionCompaniesList = movie.production_companies?.map(
        ({ id, logo_path, name }) =>
            logo_path && (
                <li key={id}>
                    {logo_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                            alt={name}
                            style={{
                                maxHeight: 50,
                                maxWidth: 200,
                                marginRight: 30,
                                marginTop: 10,
                            }}
                        />
                    )}
                </li>
            )
    );
    const roundedPopularity = Math.round(movie.vote_average * 10);
    return (
        <div>
            <WrapperLink>
                <Links to={goBackRef.current}>⬅️ Go back</Links>
            </WrapperLink>
            {/* <h3>{movie.title}</h3>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `empty`} alt={movie.title} /> */}
            <Container $backdrop={movie.backdrop_path}>
                <Description>
                    <h1>{movie.title}</h1>
                    <h4>User score: {roundedPopularity}%</h4>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p>
                        {movie.genres.map(genre => (
                            <span key={genre.id}> {genre.name}</span>
                        ))}
                    </p>
                    {productionCompaniesList[0] !== null &&
                        productionCompaniesList.length > 0 && (
                            <>
                                <h2>Production companies</h2>
                                <ProdCompany>{productionCompaniesList}</ProdCompany>
                            </>
                        )}
                </Description>
                <ImageContainer>
                    <Image
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : `${noimage}`
                        }
                        alt={movie.title}
                    />
                </ImageContainer>
            </Container>
            <hr />
            <div>
                <h3>Additional information</h3>
                <Link to="cast">
                    <Button text="Cast" />
                </Link>
                <Link to="reviews">
                    <Button text="Reviews" />
                </Link>
                <hr />
            </div>
            <div>
                <Suspense fallback={<h1>loading....</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

SelectedMovie.propTypes = {
    location: PropTypes.object.isRequired,
};

export default SelectedMovie