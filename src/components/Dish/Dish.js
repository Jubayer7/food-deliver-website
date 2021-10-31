import React from 'react';
import { Link } from 'react-router-dom';

const Dish = (props) => {
    const { _id, name, img, Price, descripetipn } = props.food;
    console.log(name, Price,)
    return (
        <div className="col mt-5">
            <div className="card  background text-black " height="50">
                <img width="100" src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{Price}</h5>
                    <p className="card-text">{descripetipn}</p>
                    <Link to={`/order/${_id}`}>
                        <button className="btn btn-warning">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dish;