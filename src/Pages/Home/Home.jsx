import React, { useState, useEffect } from 'react';
import { getMovies } from '../../Requests';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Home() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        (async () => {
            setMovies(await getMovies());

        })();
    }, []);
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {movies.map((movie) => (
                <Card className="item_card">
                    <Card.Img className="card_img" src={movie.image_url} variant="top" />
                    <Card.Body>
                        <Card.Title>{movie.title} </Card.Title>
                        <Card.Text>Rating : {movie.rating}</Card.Text>
                        <Link to={`/movies/${movie.id}`}>
                            <Button className="card_button" variant="outline-dark">
                                View more
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}