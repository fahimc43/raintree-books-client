import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://nameless-reef-93655.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setBooks(data)
            })
    }, [])
    return (
        <div className="container">
            {isLoading &&
                <div className="d-flex justify-content-center pt-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
            <div className="d-flex flex-wrap justify-content-center">
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;