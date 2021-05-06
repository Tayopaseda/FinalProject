import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
// import "../css/main.css"
import {Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import OpenTickets from '../TicketComponent/OpenTickets';
import ClosedTickets from '../TicketComponent/ClosedTickets';
import CreateTicket from '../TicketComponent/CreateTicket';

 const Main = ({cohort}) => {

    const [dataCompleted, setDataCompleted] = useState([]);
    const [dataQueuedCohort, setDataQueuedCohort] = useState([]);
    const [dataQueued, setDataQueued] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [refresh, setRefresh] = useState(false);

    console.log(dataQueuedCohort);




        // setTimeout(() => {
        //     fetchOpenQueue();
        //     fetchClosedQueue();
        //     console.log('Page refreshed')
        // }, 15000)

    
        useEffect(() => {
            fetchOpenQueue();
            fetchClosedQueue();
            setRefresh(false);
         },[refresh]);

        

    const fetchOpenQueue =()=>{
        axios
        .get(`http://localhost:8080/ticket/readQueued`)
        .then((response) => {
            setIsLoaded(true);
            // setDataQueuedCohort(response.data)
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
            setDataQueuedCohort(response.data)
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

            <form>
            <input list="Cohorts" name="Cohort"/>
            <datalist id="Cohorts">
                {
                    dataQueuedCohort.map((ticket, key) =>  
                        <option key={key} value={ticket.cohort}/>
                        // <p>It worked</p>
                    )
                }
            </datalist>
            <input type="submit"/>
            </form>

            <CreateTicket refreshPage={setRefresh}/>
            
            <Row>
                <Col id="testLeft">
                <h1>Queue</h1>
            {
                dataQueued.map((ticket) =>
                <Row>
                    <OpenTickets key={ticket.id} 
                        openTicket={ticket}
                        refreshPage={setRefresh}/>
                </Row>
                )
            }
                </Col>
                <Col id="testRight">
                <h1>Completed</h1>
            {
                dataCompleted.map((ticket) =>
                <Row>
                    <ClosedTickets key={ticket.id} 
                        closedTicket={ticket}
                        refreshPage={setRefresh}/>
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