import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/users" element={<UserList />}></Route>
          <Route exact path="/user/:userId" element={<User />}></Route>
          <Route exact path="/newUser" element={<NewUser />}></Route>

          <Route exact path="/products" element={<ProductList />}></Route>
          <Route exact path="/product/:productId" element={<Product />}></Route>
          <Route exact path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
