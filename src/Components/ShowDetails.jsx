import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button ,CardImg,Row,Col } from 'reactstrap'
import '../styles/showdetail.css'

const ShowDetails = () => {

  // const [ticketsByUsers,setTicketsByUsers]=useState([])

  const location = useLocation();
  const navigate=useNavigate();
  let  showdetail=location.state.show;
  let showname=showdetail.name;
  // console.log(showdetail);

    const handleClick=()=>{
      let auth=JSON.parse(localStorage.getItem("auth"))

      if (auth) {

        let prevTickets =JSON.parse(localStorage.getItem("tickets by users"))
        prevTickets?
        localStorage.setItem("tickets by users",JSON.stringify([...prevTickets,{showname,auth}])): localStorage.setItem("tickets by users",JSON.stringify([{showname,auth}]))
        navigate('/bookedshows')
      } else {

        navigate("/login")
        console.log("You are not authorized");
      
      }

    }
  return (
    <Container className='d-flex justify-content-center mt-5'>
     <Row>
      <Col lg='4'>
      <Card>
      <CardImg
       alt="Card image cap"
       src={showdetail.image.medium}
       style={{
        width:"415px"
       }}
       
     />
      </Card>
     </Col>

     <Col>
     <Card>
     <CardBody>
       <CardTitle tag="h5">
        {showdetail.name}
       </CardTitle>
       <CardSubtitle tag="h6" className="mb-2">
        <b>Genres:</b>{showdetail.genres}
       </CardSubtitle>
       <CardText>
       <b>Language:</b> {showdetail.language}
       </CardText>
       <CardText>
        {showdetail.summary.replace('<p>','').replace('</p>','').replace("<b>",'').replace('</b>','')}
       </CardText>
       <CardText>
       <b>Time:</b> {showdetail.schedule.time} PM
       </CardText>
       <CardText>
       <b>Days:</b> {showdetail.schedule.days.toString()}
       </CardText>
       <Button className="button" onClick={handleClick}>
         Book Your Ticket
       </Button>
     </CardBody>
     
   </Card></Col>
     </Row>
  
   

 
  
  
</Container>
  )
}

export default ShowDetails