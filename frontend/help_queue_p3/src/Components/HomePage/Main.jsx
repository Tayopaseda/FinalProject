import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import {Button, Col, Container, Row } from 'react-bootstrap';
import OpenTickets from '../TicketComponent/OpenTickets';
import ClosedTickets from '../TicketComponent/ClosedTickets';
import CreateTicket from '../TicketComponent/CreateTicket';

 const Main = () => {

    const [dataCompleted, setDataCompleted] = useState([]);
    const [dataQueued, setDataQueued] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const refreshData=()=>{
        fetchOpenQueue()
        fetchClosedQueue();
    }

        // setTimeout(() => {
        //     fetchOpenQueue();
        //     fetchClosedQueue();
        //     console.log('Page refreshed')
        // }, 15000)

    
        useEffect(() => {
            fetchOpenQueue();
            fetchClosedQueue();
         },[]);



        // const timer = setTimeout(() => {
        //     fetchOpenQueue();
        //     fetchClosedQueue();
        //     console.log('Page refreshed 10 seconds')
        // }, 10000);

    const fetchOpenQueue =()=>{
        axios
        .get(`http://a3129e30ad6a545b0bee2a8723b3a26e-2018857003.eu-west-2.elb.amazonaws.com:8081/ticket/readQueued`)
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
        .get(`http://a3129e30ad6a545b0bee2a8723b3a26e-2018857003.eu-west-2.elb.amazonaws.com:8081/ticket/readCompleted`)
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
            <Button onClick={refreshData}>Refresh</Button>
            <Container>

            <CreateTicket/>

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
