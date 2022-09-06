import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table } from "reactstrap";
import ShowDetails from "./ShowDetails";

const BookedShows = () => {
  const navigate = useNavigate();
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem("auth"));
    let tickets = JSON.parse(localStorage.getItem("tickets by users"));
    if (auth) {
      if (tickets) {
        let val = tickets.filter((item) => item.auth === auth);
        setBookedTickets(val);
      } else {
        setBookedTickets(null);
      }
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Container>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Your Booked Shows</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Show Name</th>
            <th>Your Email</th>
          </tr>
        </thead>
        <tbody>
        {
            bookedTickets.map((item,index)=>(
                <>
                <tr key={index}>
            <td>1</td>
            <td>{item.showname}</td>
            <td>{item.auth}</td>
          </tr>
                </>
            ))
        }
        </tbody>
      </Table>
    </Container>
  );
};

export default BookedShows;
