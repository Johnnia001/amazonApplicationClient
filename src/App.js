import './App.css';
import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Restaurant from './components/routes/Restaurant'
const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/restaurant/getAll' element={<Restaurants />} />
        <Route
          exact
          path='/restaurant/:id'
          element={<GetIdFromParams Component={Restaurant} />}
        />
        <Route
          exact
          path='/restaurant/:id/edit'
          element={<GetIdFromParams Component={RestaurantEdit} />}
        />
        <Route exact path='/restaurant/add' element={<RestaurantCreate />} />
      </Routes>
    </Layout>
  </Router>
)

export default App