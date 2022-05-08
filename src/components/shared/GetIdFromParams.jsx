import React from 'react'
import { useParams } from 'react-router-dom'

const GetIdFromParams = ({ Component }) => {
  // get the id from react router dom
  const { id } = useParams()
  console.log(`the id from the params is: ${id}`)
  // render the component that is passed in
  return <Component id={id} />
}

export default GetIdFromParams
