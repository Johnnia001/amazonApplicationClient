import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
    <><h4>Food Trucks Finder</h4><div>
        <Link to={'/restaurant/getAll'}>View All San Francisco Food Trucks</Link>
    </div></>
)
export default Home
