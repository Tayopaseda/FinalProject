import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import {Button, Col, Container, Dropdown, DropdownButton, NavItem, Row } from 'react-bootstrap';
import OpenTickets from '../TicketComponent/OpenTickets';
import ClosedTickets from '../TicketComponent/ClosedTickets';
import CreateTicket from '../TicketComponent/CreateTicket';
import Completed from '../../css/images/Completed.png'
import Queued from '../../css/images/Queued.png'

 const Main = ({cohort}) => {

    const [dataCompleted, setDataCompleted] = useState([]);
    const [dataQueuedCohort, setDataQueuedCohort] = useState([]);
    const [dataCompletedCohort, setDataCompletedCohort] = useState([]);
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

         let cohortList = [];

         dataQueuedCohort.map((ticket) => {

             if(cohortList.indexOf(ticket.cohort) === -1){
                 cohortList.push(ticket.cohort)
            }
        })

        dataCompletedCohort.map((ticket) => {

            if(cohortList.indexOf(ticket.cohort) === -1){
                cohortList.push(ticket.cohort)
            }
        })

        console.log(cohortList);

        

    const fetchOpenQueue =()=>{
        axios
        .get(`http://localhost:8080/ticket/readQueued`)
        .then((response) => {
            setIsLoaded(true);
            setDataQueuedCohort(response.data)
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
            setDataCompletedCohort(response.data)
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

            <div id="dropdown">
                <h3>Select a Cohort</h3>
            <select>
            {
                cohortList.map((ticket, index) =>
                    <option key={index} value={ticket}>{ticket}</option>
                )
            }
        
            </select>
           
            </div>

            <CreateTicket refreshPage={setRefresh}/>
            

            <div id="mainDiv">

            <Row>
                <Col id="queuedColumn">
                <img src={Queued} alt ="Logo" id="QueuedBanner"/>
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
                <Col id="completedColumn">
                <img src={Completed} alt ="Logo" id="CompletedBanner"/>
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

            </div>

            </Container>
            
         </>
)
        }
    }




 export default Main;
