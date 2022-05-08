import './App.css';
import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Restaurant from './components/routes/Restaurant'
import Restaurants from './components/routes/Restaurants';
import RestaurantCreate from './components/routes/RestaurantCreate';
import GetIdFromParams from './components/shared/GetIdFromParams';
const App = () => (
  <Router>
      <Routes>
        <Route exact path='/restaurant/getAll' element={<Restaurants />} />
        <Route
          exact
          path='/restaurant/:id'
          element={<GetIdFromParams Component={Restaurant} />}
        />
        <Route exact path='/restaurant/add' element={<RestaurantCreate />} />
      </Routes>
  </Router>
)

export default App