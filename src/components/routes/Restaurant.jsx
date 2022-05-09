import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Navigate, Link } from 'react-router-dom'

class Restaurant extends Component {
  constructor (props) {
    super(props)
    // id passed in from GetIdFromProps
    this.id = props.id
    this.state = {
      restaurant: {
        applicant: '',
        address: '',
        foodItems:''
      },
      destroyed: false
    }
  }


  // contact the API on page load
  async componentDidMount () {
    try {
      const response = await axios.get(`${apiUrl}/restaurant/${this.props.id}`)
      this.setState({ restaurant: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  // event handler functions -- react to the user input
  // contacts the api when the user clicks a button


  render () {
    const { restaurant, destroyed } = this.state

    if (destroyed) return <Navigate to='/restaurant/getAll' />

    return (
      <>
      ;<Link to={'/'}>Home</Link>

        <h4>{restaurant.applicant}</h4>
        <p>Address: {restaurant.address}</p>
        <p>Food Type: {restaurant.foodItems}</p>
        <Link to={`/restaurant/getAll`}>Back to Restaurant List</Link>
      </>
    )
  }
}

export default Restaurant
