import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";

import "../styles/signup.css";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCPassword, setUserCPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [auth,setAuth]=useState()
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    if (userPassword === userCPassword) {
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
      localStorage.setItem("auth",JSON.stringify(auth))
      navigate("/");
    }
  };

  useEffect(() => {
    
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (!allUsers) {
      setAllUsers([{ userEmail, userPassword}]); 
      setAuth(userEmail)
    } else {
      setAllUsers([...allUsers, { userEmail, userPassword}]); 
      setAuth(userEmail)

    }



  }, [userEmail,userPassword]);


  useEffect(()=>{
    const auth=localStorage.getItem("auth");
    if(auth){
       navigate('/')
    }

  })

  return (
    <Container>
      <Row className="justify-content-center pt-5">
        <Col sm="4" className="bg-light p-5">
          <Form onSubmit={(event) => handleSignUp(event)}>
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="userEmail"
                placeholder="Enter Your Email"
                type="email"
                value={userEmail}
                required
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">Password</Label>
              <Input
                id="userPassword"
                name="userPassword"
                placeholder="Enter Password"
                type="password"
                value={userPassword}
                required
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="userCPassword">Password</Label>
              <Input
              required
                id="userCPassword"
                name="userCPassword"
                placeholder="Confirm Password"
                type="password"
                value={userCPassword}
                onChange={(e) => {
                  setUserCPassword(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormText>
                Already have an account ?{" "}
                <span>
                  <Link to="/login" className="register-text">
                    {" "}
                    Login here
                  </Link>
                </span>
              </FormText>
            </FormGroup>
            <Button type="submit" className="button">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
