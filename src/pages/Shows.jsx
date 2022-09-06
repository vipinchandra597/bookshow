import React, { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Card,
  Row,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import { useNavigate } from "react-router-dom";

const Shows = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleClick = (item) => {
    navigate("/showdetails",{state:item});
  };

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Container className=" me-4 pt-4 justify-content-center align-items-center">
      <Row>
        {data.map((item, index) => (
          <Card
            key={index}
            style={{ width: "18rem" }}
            className="mb-2 me-2 p-0"
          >
            <img alt="show's poster" src={item.show.image.medium} />
            <CardBody>
              <CardTitle tag="h5">{item.show.name}</CardTitle>
              <CardSubtitle className="mb-2" tag="h6">
              <b>Genres:</b> {item.show.genres.map(item=>item +" ")}
              </CardSubtitle>
              <CardText>
              <b>Language:</b>{item.show.language}
              </CardText>
{/* {console.log(item.show)}   */}
            {/* <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText> */}
              <Button
                style={{ background: "#F84464", border: "none" }}
                onClick={()=>handleClick(item)}
              >Go in Details</Button>
            </CardBody>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Shows;
