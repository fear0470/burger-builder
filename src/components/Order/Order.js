import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    return (
        <div className={classes.Order}>
            <p>Ingredients: </p>
            <p>Price: <strong>CAD ${Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    );
    
}

export default order;