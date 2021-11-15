import React, { useState } from "react";
import { addActor } from "../../Requests";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./ActorAdd.css";

export default function ActorAdd() {



    const [name, setName] = useState('');
    const [image_url, setImage_url] = useState('');
    const [description, setDescription] = useState('');
    const [movies, setMovies] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            'name': name, 'image_url': image_url, 'description': description,
            'movies': movies
        };

        for (var key in data) {
            if (data[key].replace(/\s+/g, '') === "") {
                delete data[key]
            } else {

            }
        }

        const movies_data = movies.split(",").map((movie_title) => movie_title.trim());
        data['movies'] = movies_data;

        await addActor(data);


    }


    return (
        <div className='wrapper'>
            <Link to="/">
                <Button variant="outline-dark" style={{ marginLeft: "800px" }}>
                    Go Back
                </Button>
            </Link>

            <Form className="form">
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="textarea" />
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
                    <Form.Label>Movies</Form.Label>
                    <Form.Control value={movies} onChange={(e) => setMovies(e.target.value)} type="textarea" style={{ height: "70px" }} />
                </Form.Group>

            </Form>

            <Button onClick={async (e) => { await handleSubmit(e) }}
                variant="outline-success" type="submit" className="botom-button">
                Add
            </Button>

        </div>

    );
}