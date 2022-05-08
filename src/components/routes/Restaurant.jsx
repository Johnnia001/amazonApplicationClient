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
      Restaurant: {
        applicant: '',
        address: '',
        foodItems:'',
      },
      destroyed: false
    }
  }


  // contact the API on page load
  async componentDidMount () {
    try {
      const response = await axios.get(`${apiUrl}/restaurant/${this.props.id}`)
      this.setState({ book: response.data.book })
    } catch (error) {
      console.error(error)
    }
  }

  // event handler functions -- react to the user input
  // contacts the api when the user clicks a button
  handleDestroy = () => {
    // make http req to destroy the book
    axios
      .delete(`${apiUrl}/restaurant/${this.props.id}`)
      // set the state destroyed to be true
      .then(() => this.setState({ destroyed: true }))
      .catch(console.error)
  }

  render () {
    const { restaurant, destroyed } = this.state

    if (destroyed) return <Navigate to='/restaurant/getAll' />

    return (
      <>
        <h4>{restaurant.applicant}</h4>
        <p>Address: {restaurant.address}</p>
        <Link to={`/restaurant/${this.props.id}/edit`}>Edit</Link>
      </>
    )
  }
}

export default Book
