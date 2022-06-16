import HomePage from "./pages/index";
import ProductPage from "./pages/products";
import FormPage from "./pages/form";
import {Component} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route  path="/products" element={<ProductPage/>}/>
            <Route  path="/form" element={<FormPage/>}/>
          </Routes>
        </Router>
    )
  }
}

export default App;
