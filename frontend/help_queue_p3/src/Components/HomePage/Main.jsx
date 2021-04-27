import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
// import Ticket from '../TicketComponent/Ticket';
import axios from 'axios';
import { Button, Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import OpenTickets from '../TicketComponent/OpenTickets';
import ClosedTickets from '../TicketComponent/ClosedTickets';

 const Main = () => {

    const [dataCompleted, setDataCompleted] = useState([]);
    const [dataQueued, setDataQueued] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetchOpenQueue();
    }, []);

    useEffect(() => {
        fetchClosedQueue();
    }, []);

    const fetchOpenQueue =()=>{
        axios
        .get(`http://localhost:8080/ticket/readQueued`)
        .then((response) => {
            setIsLoaded(true);
            setDataQueued(response.data);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    }

    const fetchClosedQueue =()=>{
        axios
        .get(`http://localhost:8080/ticket/readCompleted`)
        .then((response) => {
            setIsLoaded(true);
            setDataCompleted(response.data);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    }
        
        if(error){
            return <h3>We're having trouble receiving the queue! {error.message} </h3>
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
            <Container>
            <Button
                variant="success"
                >Create Ticket
            </Button>
            <br/>
            <br/>

            <Row>
                <Col>
                <h1>Queue</h1>
            {
                dataQueued.map((ticket) =>
                <Row>
                    <OpenTickets key={ticket.id} openTicket={ticket}/>
                </Row>
                )
            }
                </Col>
                <Col>
                <h1>Completed</h1>
            {
                dataCompleted.map((ticket) =>
                <Row>
                    <ClosedTickets key={ticket.id} closedTicket={ticket}/>
                </Row>
                )
            }
                </Col>
            </Row>

            </Container>
         </>
)
        }
    }




 export default Main;