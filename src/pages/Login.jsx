import React, { useState,useEffect} from "react";
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

import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (allUsers) {
      // console.log(allUsers);
      const matchedEmail = allUsers.filter(
        (item) => (item.userEmail === userEmail && item.userPassword ===userPassword)
      );
      if (matchedEmail) {
        localStorage.setItem("auth", JSON.stringify(userEmail));
        navigate("/");
      }
    }

    // if (userEmail === userDetails.userEmail && userPassword===userDetails.userPassword) {
    //   navigate('/')
    // }
    // else{
    //   alert("Wrong password");
    // }
  };

  useEffect(()=>{
    const auth=localStorage.getItem('auth')
    if(auth)
    navigate('/')
  },[])

  return (
    <Container>
      <Row className="justify-content-center pt-5">
        <Col sm="4" className="bg-light p-5">
          <Form
            onSubmit={(event) => {
              handleLogin(event);
            }}
          >
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="userEmail"
                placeholder="Enter Your Email"
                type="email"
                value={userEmail}
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
                placeholder="Enter a password"
                type="password"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormText>
                New to show.com ?{" "}
                <span>
                  <Link to="/signup" className="register-text">
                    {" "}
                    Register here
                  </Link>
                </span>
              </FormText>
            </FormGroup>
            <Button type="submit" className="button">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
