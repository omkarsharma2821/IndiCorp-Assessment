import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { AppProvider } from "./AppContext";
import AddTool from "./components/AddTool";
import BrowseTool from "./components/BrowseTool";
import { CartProvider } from "./CartContext";
import CartPage from "./components/CartPage";
import {Toaster} from 'react-hot-toast';
import UserAuth from "./UserAuth";
import ViewOrders from "./components/ViewOrders";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Toaster position = "top-right"/>
      <BrowserRouter>
      <AppProvider>
        
          <CartProvider>
          <Navbar  />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtool" element={<UserAuth><AddTool /></UserAuth>} />
            <Route path="/browsetool" element={<BrowseTool />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/view" element={<ViewOrders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
          </CartProvider>
          </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
