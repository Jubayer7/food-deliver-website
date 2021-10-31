import React from 'react';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row ">

            <div className="col-6">

            </div>

            <div className="col-6 form">
                <h2>Submitt your detail</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" />
                    <input {...register("email")} placeholder="Your email" />
                    <input {...register("email")} placeholder="Address" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input type="submit" />

                </form>
            </div>
        </div>

    );
};

export default PlaceOrder;