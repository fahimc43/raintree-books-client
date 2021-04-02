import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';
import './Admin.css';
import { faPlusSquare, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Admin = () => {
    const [addBook, setAddBook] = useState(true)

    return (
            <div className="admin-section">
                <Container fluid>
                    <div className="row">
                        <div className="col-lg-3" style={{backgroundColor: "#19103F"}}>
                            <div>
                                <div className="manage-book d-flex  mt-5" style={addBook ? { color: '#207FEE' } : { color: 'white' }} onClick={() => setAddBook(true)} >
                                    <div>
                                        <FontAwesomeIcon icon={faThLarge} />
                                    </div>
                                    <div className="ml-2">
                                        <span>Manage Book</span>
                                    </div>
                                </div>
                                <div className="add-book d-flex mt-4" style={!addBook ? { color: '#207FEE' } : { color: 'white' }} onClick={() => setAddBook(false)} >
                                    <div>
                                        <FontAwesomeIcon icon={faPlusSquare} />
                                    </div>
                                    <div className="ml-2">
                                        <span>Add Book</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="bg-white p-3">
                                {
                                    addBook ? <h4>Manage Book</h4> : <h4>Add Book</h4>
                                }
                            </div>
                            {addBook ? <div className="bg-white mt-5">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Book Name</th>
                                            <th>Author Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>    
                                        <ManageBooks />
                                    </tbody>
                                </Table>
                            </div>
                                :
                                <div className="bg-white mt-5">
                                    <AddBook />
                                </div>}
                        </div>
                    </div>
                </Container>
            </div>
    );
};

export default Admin;