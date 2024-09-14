import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div className="App">
    {/* <Header /> */}
      <Routes>
         <Route path="/login" element={<Login />} /> {/* Route for Login component */}
         <Route path="/register" element={<Register />} /> {/* Route for Login component */}
         <Route path="/add" element={<AddProduct />} /> {/* Route for Login component */}
         <Route path="/update" element={<UpdateProduct />} /> {/* Route for Login component */}
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
