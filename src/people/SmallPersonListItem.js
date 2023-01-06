import React from 'react'

export const SmallPersonListItem = ({person}) => {
    const {name, age} = person;

  return (
    <>
    <div>
        <h3>SmallPersonListItem</h3>
        </div>
    <p> Name: {name }, Age: {age} years</p>
    </>
  )
}
