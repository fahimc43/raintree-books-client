import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://nameless-reef-93655.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])
    return (
        <div className="container list-user bg-white mt-5">
            <h3>Orders Details</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Buyer Name</th>
                        <th>Buyer Email</th>
                        <th>Order Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order.bookName}</td>
                            <td>{order.bookPrice}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.orderTime}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;