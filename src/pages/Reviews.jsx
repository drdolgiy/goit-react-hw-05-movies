import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";

import { getReviews } from "services/movieApi";

export const MovieReviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviews = await getReviews(movieId);
                setReviews(reviews);
                console.log(reviews)
            } catch (error) {
                
            }
        }
        fetchReviews();
    }, [movieId])

    return (
        <div>
            <ul>
                {reviews && reviews.map(review => <li key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>)}
            </ul>
        </div>       
    )
};