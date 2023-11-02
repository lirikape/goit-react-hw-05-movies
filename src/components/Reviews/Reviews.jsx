import { useHttp } from 'hooks/useHttp'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieReviews } from 'services/api'


const Reviews = () => {
    const { movie_id } = useParams()
    const [reviews] = useHttp(fetchMovieReviews, movie_id)

    if (!reviews) {
        return <div>Loading...</div>;
    }
    return (
        <>
            {reviews.length !== 0 && (
                <div>
                    <h2>Movie Reviews</h2>
                    <ul>
                        {reviews?.map(review => (
                            <li key={review.id}>
                                <h4>{review.author}</h4>
                                <p>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {reviews.length === 0 && (
                <div>We don't have any reviews for this movie.</div>
            )}
        </>
    );
};


export default Reviews



