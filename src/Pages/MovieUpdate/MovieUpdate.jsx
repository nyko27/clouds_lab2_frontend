import React, { useState } from "react";
import { updateMovieById } from "../../Requests";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./MovieUpdate.css";

export default function MovieUpdate() {

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [image_url, setImage_url] = useState('');
    const [description, setDescription] = useState('');
    const [facts, setFacts] = useState('');
    const [rating, setRating] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { 'title': title, 'image_url': image_url, 'description': description, 'facts': facts, 'rating': rating };

        for (var key in data) {
            if (data[key].replace(/\s+/g, '') === "") {
                delete data[key]
            } else {
            }
        }

        data['rating'] = parseInt(rating);

        if (0 <= data['rating'] <= 100) {
            await updateMovieById(id, data)
        }

    }


    return (
        <div className='wrapper'>
            <Link to={`/movies/${id}`}>
                <Button variant="outline-dark" style={{ marginLeft: "800px" }}>
                    Go Back
                </Button>
            </Link>

            <Form className="form">
                <Form.Group >
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>
            <Form className="form">
                <Form.Group >
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control value={image_url} onChange={(e) => setImage_url(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>
            <Form className="form">
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="textarea" style={{ height: "100px" }} />
                </Form.Group>

            </Form>
            <Form className="form">
                <Form.Group >
                    <Form.Label>Facts</Form.Label>
                    <Form.Control value={facts} onChange={(e) => setFacts(e.target.value)} type="textarea" style={{ height: "100px" }} />
                </Form.Group>

            </Form>
            <Form className="form">
                <Form.Group >
                    <Form.Label>Rating(from 0 to 100)</Form.Label>
                    <Form.Control value={rating} onChange={(e) => setRating(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>

            <Button onClick={async (e) => { await handleSubmit(e) }}
                variant="outline-success" type="submit" className="botom-button">
                Update
            </Button>

        </div>

    );
}