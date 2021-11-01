import React, { useEffect, useState } from 'react';
import Dish from '../Dish/Dish';

const Dishes = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://damp-beyond-13821.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    console.log(foods)
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {
                foods.map(food => <Dish
                    key={food.name}
                    food={food}
                ></Dish>)
            }
        </div>

    );
};

export default Dishes;