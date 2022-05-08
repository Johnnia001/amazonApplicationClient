import React from 'react'

import { Link } from 'react-router-dom'

const RestaurantForm = ({ restaurant, handleChange, handleSubmit, cancelUrl }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'applicant'}>Name</label>
        <input
          id={'applicant'}
          // value represents what is in state
          value={restaurant.applicant}
          // when the input changes -- state is updated
          onChange={handleChange}
          name='applicant'
        />

        <label htmlFor='address'>Address:</label>
        <input
          id='address'
          value={restaurant.address}
          onChange={handleChange}
          name='address'
        />

         <label htmlFor='foodItems'>FoodType:</label>
        <input
          id='foodItems'
          value={restaurant.foodItems}
          onChange={handleChange}
          name='foodItems'
        />

        <button type='submit'>SUBMIT</button>
      </form>

      <Link to={cancelUrl}>Cancel</Link>
    </>
  )
}

export default RestaurantForm
