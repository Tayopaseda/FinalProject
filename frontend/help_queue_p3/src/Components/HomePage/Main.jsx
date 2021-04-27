import { useEffect, useState } from 'react';
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap'
import ClosedTickets from '../TicketComponent/ClosedTickets';
import OpenTickets from '../TicketComponent/OpenTickets'
import Ticket from '../TicketComponent/Ticket';
import axios from 'axios';


 const Main = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => 
    axios
        .get(``)
        .then((response) => {
            setIsLoaded(true);
            setData(response.data.data);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        })
        )
        
        if(error){
            return <h1>We're having trouble receiving the queue! {error.message}</h1>
        } else if (!isLoaded){
            
            return(
                <>
            <p>Please wait, we're retrieving the data...</p>
            <Spinner animation="grow" variant="primary" />
            </>
        )
        
    } else {
        
        
        return(
            
            <>
            {
                data.map((ticket) =>
                <tr>
                    <Ticket key={ticket.id} ticket={ticket}/>
                </tr>
                )
            }
                <Container>
            <Button
                variant="success"
                >Create Ticket
            </Button>
            <br/>
            <br/>


        <Row>
            <Col>
                <Row><OpenTickets/></Row>
                <Row>2</Row>
                <Row>3</Row>
            </Col>
            <Col>
                <Row><ClosedTickets/></Row>
                <Row>2</Row>
                <Row>3</Row>
            </Col>
        </Row>
        </Container>

        </>
)
        }
    }




 export default Main;