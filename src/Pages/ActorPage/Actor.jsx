import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteActorById, getActorById } from "../../Requests";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Actor.css";



export default function Actor() {


    const { id } = useParams();
    const [actor, setActor] = useState(({ movies: [] }));

    async function getActor() {
        const item = await getActorById(id);
        setActor(item);
    }


    useEffect(() => getActor(), []);

    return (
        <div className="item-page">
            <Row>
                <Col className="image-box">
                    <img src={actor.image_url} alt="Actor" className="item-image" />
                    <h1 className="actor-name"> {actor.name}</h1>
                    <Link to={`/actors/${id}/update`}>
                        <Button variant="success" className="item-action-button">
                            Update
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button variant="danger" className="item-action-button" onClick={() => deleteActorById(id)}                >
                            Delete
                        </Button>

                    </Link>
                </Col>
                <Col xs={9}>
                    <Link to="/">
                        <Button variant="outline-dark" style={{ marginLeft: "700px" }}>
                            Home
                        </Button>
                    </Link>

                    <div className="info" style={{ fontWeight: "bold" }}>
                        Description
                    </div>
                    <div className="info">
                        {actor.description}
                    </div>


                    <div className="info" style={{ fontWeight: "bold" }}>
                        <p /> Movies
                    </div>

                    {actor["movies"].map((movie) => (
                        <>
                            <Link className="actor" to={`/movies/${movie.id}`}>{movie.title}</Link>
                            <>,  </>
                        </>
                    ))}
                </Col>
            </Row>

        </div >
    );
}