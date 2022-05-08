import React from 'react'

import { Link } from 'react-router-dom'

const RestaurantForm = ({ restaurant, handleChange, handleSubmit, cancelUrl }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder='Name'
          // value represents what is in state
          // value={restaurant.applicant}
          // when the input changes -- state is updated
          name='applicant'
          onChange={handleChange}
        />

        <label htmlFor='address'>Address:</label>
        <input
          placeholder='Address'
          // value={restaurant.address}
          onChange={handleChange}
          name='address'
        />

         <label htmlFor='foodItems'>FoodType:</label>
        <input
          placeholder='Food Type'
          // value={restaurant.foodItems}
          onChange={handleChange}
          name='foodItems'
        />

        <button type='submit'>SUBMIT</button>
      

      <Link to={cancelUrl}>Cancel</Link>
      </form>
    </>
  )
}

export default RestaurantForm
