import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  // const [auth, setAuth] = useState(false);
  const auth=JSON.parse(localStorage.getItem("auth"))
  const navigate = useNavigate();

  const logout=()=>{
    localStorage.removeItem('auth')
    navigate("/")
  }

  return (
    <div className="nav-container ">
      <Navbar>
        <NavLink className="no-dec nav-item" to="/">
          <span>show.com</span>
        </NavLink>
        <Nav>
          <NavItem>
            <NavLink className="no-dec nav-item mx-4" to="/">
              Shows
            </NavLink>
          </NavItem>

         {
          auth? <NavItem>
          <NavLink className="no-dec nav-item mx-4" to="/signup" onClick={logout}>
            Logout
          </NavLink>
        </NavItem>:
         <>  <NavItem>
           <NavLink
             className="no-dec nav-item mx-3 sign-up-nav"
             to="/signup"
           >
             Signup
           </NavLink>
         </NavItem>
         <NavItem>
           <NavLink className="no-dec nav-item mx-4" to="/login">
             Login
           </NavLink>
         </NavItem>
         </>
  
         }
       
           

          {/* <NavItem>
            <NavLink className="no-dec book-show" to="/">
              Book Show
            </NavLink>
          </NavItem> */}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
