import React, { useState, useEffect } from 'react';
import { getTrailers } from '../../Requests';
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrailersPage.css";

export default function Trailers() {
    const [trailers, setTrailers] = useState([]);


    useEffect(() => {
        (async () => {
            setTrailers(await getTrailers());

        })();
    }, []);


    return (
        <div >

            {trailers.map((trailer) => (
                <Card className="item_card">
                    <Card.Body>
                        <Card.Title>{trailer.title} </Card.Title>
                        <Card.Text>Description : {trailer.description}</Card.Text>
                        <Card.Text>Send time : {trailer.send_time}</Card.Text>

                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}