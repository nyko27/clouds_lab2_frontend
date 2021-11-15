import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, deleteMovieById, addCommentToMovie, deleteCommentById } from "../../Requests";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Movie.css";



export default function Movie() {


    const { id } = useParams();
    const [movie, setMovie] = useState(({ comments: [], actors: [] }));
    const [newComment, setNewComment] = useState("");

    async function getMovie() {
        const item = await getMovieById(id);
        setMovie(item);
    }

    async function deleteComment(commentId) {
        await deleteCommentById(commentId);
        await getMovie();
    }

    async function handleSubmit(e) {
        if (newComment.replace(/\s+/g, '') === "") {

        } else {
            e.preventDefault();
            await addCommentToMovie(id, newComment);
            setNewComment('');
        }
    }

    useEffect(() => getMovie(), [newComment]);

    return (
        <div className="item-page">
            <Row>
                <Col className="image-box">
                    <img src={movie.image_url} alt="Film" className="item-image" />
                    <h1 className="movie-title"> {movie.title}</h1>
                    <Link to={`/movies/${id}/update`}>
                        <Button variant="success" className="item-action-button">
                            Update
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button variant="danger" className="item-action-button" onClick={() => deleteMovieById(id)}                >
                            Delete
                        </Button>

                    </Link>
                </Col>
                <Col xs={9}>
                    <Link to="/">
                        <Button variant="outline-dark" style={{ marginLeft: "700px" }}>
                            Go Back
                        </Button>
                    </Link>

                    <div className="info" style={{ fontWeight: "bold" }}>
                        Description
                    </div>
                    <div className="info">
                        {movie.description}
                    </div>
                    <div className="info" style={{ fontWeight: "bold" }}>
                        <p /> Interesting facts
                    </div>
                    <div className="info">
                        {movie.facts}
                    </div>

                    <div className="info" style={{ fontWeight: "bold" }}>
                        <p /> Cast
                    </div>

                    {movie["actors"].map((actor) => (
                        <>
                            <Link className="actor" to={`/actors/${actor.id}`}>{actor.name}</Link>
                            <>,  </>
                        </>
                    ))}
                </Col>
            </Row>
            <div className="comments">
                <div className="info" style={{ fontWeight: "bold", textAlign: "center", paddingBottom: "20px" }}>
                    Comments
                </div>
                <Form className="form">
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control value={newComment} onChange={(e) => setNewComment(e.target.value)}
                            as="textarea" placeholder="Enter your comment" />
                    </Form.Group>
                    <Button onClick={async (e) => await handleSubmit(e)}
                        variant="outline-primary" type="submit" style={{ marginTop: "10px" }}>
                        Send
                    </Button>
                </Form>

                {(movie["comments"].map((comment) => (

                    <div className="comment">
                        <div > {comment.text}</div>
                        <Button onClick={async () => await deleteComment(comment.id)}
                            variant="outline-danger" type="submit" style={{ marginTop: "15px", padding: "3px" }}>
                            Delete
                        </Button>
                    </div>

                ))).reverse()}

            </div>
        </div >
    );
}