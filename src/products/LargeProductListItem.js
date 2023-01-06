import React from 'react'

export const LargeProductListItem = ({product}) => {
    const {name, price, description, rating} = product;
  return (
    <>
    <div>LargeProductListItem</div>
    <h3>{name}  </h3>
    <p>{price}</p>
    <h3>Description</h3>
    <p> {description}</p>
    <p> Average Rating: {rating}</p>
    </>
  );
}
