import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/aboutUs/AboutUs";
import Upload from "./pages/upload/Upload";
import Catalog from "./pages/Catalog/Catalog";
import CardDetails from "./components/CardDetails";
import Tenant from "./pages/upload/Tenant";
import Admin from "./pages/Admin/Admin";
import TenantDetails from "./pages/Admin/Tenant_Details";
import { Changepassword } from "./pages/Admin/Changepassword";
import { Payment } from "./pages/Payment/Payment";
import Profile from "./pages/dropdown/Profile";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <div>
<UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
         <Route path="/upload" element={<Upload />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/carddetails/:id" element={<CardDetails/>}></Route>
          <Route path="/tenant" element={<Tenant/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/Tenant_Details" element={<TenantDetails/>}/>
          <Route path="/changepassword" element={<Changepassword/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </UserProvider>
    </div>
 );
}

export default App;
