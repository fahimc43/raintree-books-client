import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const { bookName, authorName, bookPrice, imageUrl, _id } = props.book;
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: "#F7F7F7", borderRadius: "0.5rem" }} className="card shadow m-3 text-center">
                <Card.Img style={{ height: "275px", padding: "0.8rem" }} variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{bookName}</Card.Title>
                    <Card.Text>
                        <small>{authorName}</small>
                        <h5 className="text-primary">Price: ${bookPrice}</h5>
                    </Card.Text>
                    <Link to={`/checkout/${_id}`}>
                        <Button variant="primary">Buy Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;