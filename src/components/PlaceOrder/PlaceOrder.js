import axios from 'axios';
import React from 'react';
import { useForm, } from "react-hook-form";
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-beyond-13821.herokuapp.com/information', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset()
                }
            })

    }

    return (
        <div className="row ">

            <div className="col-6">

            </div>

            <div className="col-6 form">
                <h2>Submitt your detail</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" />
                    <input {...register("email")} placeholder="Your email" />
                    <input {...register("")} placeholder="Address" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input type="submit" />

                </form>
            </div>
        </div>

    );
};

export default PlaceOrder;