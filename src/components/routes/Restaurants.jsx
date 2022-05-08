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
  // React lifecycle methods
  // componentDidMount runs whenever the Element is rendered for the first time
  componentDidMount () {
 
    console.log('The Restaurants component has mounted!')
    console.log(apiUrl)
    axios
      .get(`${apiUrl}/restaurant/getAll`)
      .then(response => this.setState({ restaurants: response.data.restaurants }))
      .catch(console.error)
  }

  // componentDidUpdate runs every time the component is re-rendered
  // runs each time state changes
  componentDidUpdate () {
   
    console.log('Restaurants component has re-rendered and updated')
    console.log(this.state)
  }

  // componentWillUnmount runs when the component is unmounted
  // used for things like cleanup
  componentWillUnmount () {
    // anything that mounted on the window or document
    // setInterval need to be clear
    // vanilla dom manipulation needs to be removed
    console.log('Restaurants component has been unmounted!')
  }

  // override the original render method with render method
  render () {
    const renderedRestaurants = this.state.restaurants.map(restaurant => {
      return (
        <li key={restaurant.id}>
          <Link to={`/restaurant/${restaurant._id}`}>
            <h6>{restaurant.applicant}</h6>
          </Link>
          <p>address: {restaurant.address}</p>
        </li>
      )
    })
    return (
      <>
        <h3>Restaurants</h3>
        <Link to='/restaurant/add'>Input New Restaurant</Link>
        <ul>{renderedRestaurants}</ul>
      </>
    )
  }
}

export default Restaurants
