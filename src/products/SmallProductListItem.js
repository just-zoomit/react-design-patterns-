import React from 'react'

export const SmallProductListItem = ({product}) => {
    const {name, price} = product;
  return (
    <>
    <div>SmallProductListItem</div>
    <h3>{name} - {price} </h3>
    </>
  )
}
