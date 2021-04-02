import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '3a4fbb9d5dadec4ae4a140dbe3c1ef33');
        imageData.set('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            bookPrice: data.bookPrice,
            imageUrl: imageUrl
        };
        const url = `https://nameless-reef-93655.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response', res))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row container-fluid">
                    <div className="col-md-4 offset-md-4 pt-3">
                        <div className="mb-3">
                            <label className="form-label">Book Name</label>
                            <input name="bookName" type="text" className="form-control" placeholder="Enter Book Name" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author Name</label>
                            <input name="authorName" type="text" className="form-control" placeholder="Enter Author Name" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Book Price</label>
                            <input name="bookPrice" type="text" className="form-control" placeholder="Enter Book Price" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Add Book Cover Photo</label>
                            <input name="imageUrl" type="file" onChange={handleImageUpload} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="submit" className="btn btn-danger w-50 form-btn" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBook;