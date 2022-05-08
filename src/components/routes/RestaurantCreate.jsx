import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import RestaurantForm from '../shared/RestaurantForm'

class RestaurantCreate extends Component {
  constructor (props) {
    super(props)
    this.id= props.id
    this.state = {
      restaurant: {
        applicant: '',
        address: '',
        foodItems:''
      },
      created: false
    }
  }

  handleChange = event => {
    const updatedInput = { [event.target.name]: event.target.value }
    const createdRestaurant = Object.assign(this.state.restaurant, updatedInput)
    this.setState({ restaurant: createdRestaurant })
  }

  handleSubmit = event => {
    event.preventDefault()

   axios
      .post(`${apiUrl}/restaurant/getAll`, { restaurant: this.state.restaurant })
      .then(() => this.setState({ created: true }))
      .catch(console.error)
  }

  render () {
    const { restaurant, created } = this.state

if (created) return <Navigate to={`/restaurant/${restaurant.id}`} />

return (
  <>
    <RestaurantForm
      restaurant={restaurant}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      cancelUrl={'/restaurant/getAll'}
    />
  </>
)

  }
}
export default RestaurantCreate