import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'


class Restaurants extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/restaurant/getAll`, {headers: {'Accept': 'application/json'}})
      .then(res => this.setState({ restaurants: res.data}))
      .catch(console.error)
  }


  render () {
    const restaurants = this.state.restaurants.map(restaurant => (
      <li key={restaurant.id}>
        <Link to={`/restaurant/${restaurant.id}`}>{restaurant.applicant}</Link>
      </li>
    ))

    return (
      <div>
        <Link to={'/'}>Home</Link>

        <h4>Restaurants</h4>
      

        <div>{restaurants}</div>
      </div>
    )
  }
}

export default Restaurants
