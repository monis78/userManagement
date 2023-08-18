import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink,  } from 'react-router-dom'
import Employee from './Page/Employee'
import PageNotFound from './Page/Error'
import Home from './Page/Home'

const Navigation = () => {
  return (
    <div>
      <Router>
        <header>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to="/employee">Employee List</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation