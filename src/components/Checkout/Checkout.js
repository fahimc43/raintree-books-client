import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { bookId } = useParams();
    const [buyBook, setBuyBook] = useState([]);
    const { imageUrl, bookName, authorName, bookPrice } = buyBook;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        const url = `https://nameless-reef-93655.herokuapp.com/book/${bookId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBuyBook(data))

    }, [bookId])

    const handleCheckout = () => {
        const newCheckout = { ...loggedInUser, bookName, authorName, bookPrice, imageUrl, orderTime: new Date() }
        fetch('https://nameless-reef-93655.herokuapp.com/addOrders', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCheckout)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order placed successfully');
                }
            })
    };
    return (
        <div className="container">
            <h1>Checkout</h1>
            <div className="card mb-4 text-center card shadow" style={{ maxWidth: "70rem", backgroundColor: "#F7F7F7", borderRadius: "0.5rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ height: "375px", padding: "1rem" }} src={imageUrl} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{bookName}</h3>
                            <h6 className="card-title"><span className="text-danger">Author: </span>{authorName}</h6>
                            <h6 className="text-danger">Book Summary</h6>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet culpa minus deleniti enim quae maiores, magnam laudantium vero placeat architecto unde doloremque vel sapiente perspiciatis id nemo. Facere, fugiat!</p>
                            <br />
                            <h5 className="text-danger">Price: ${bookPrice}</h5>
                            <br />
                            <button onClick={handleCheckout} type="button" className="btn btn-danger">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Checkout;