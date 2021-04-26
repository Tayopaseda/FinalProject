import {Card, Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ticket from './Ticket'

const OpenTickets = () => {


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
            {/* {
                data.map((ticket) =>
                <tr>
                    <Ticket key={ticket.id} ticket={ticket}/>
                </tr>
                )
            }
                 */}

                
                <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Trainee</Card.Subtitle>
                <Card.Link href="#">View</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>

        </>
)
        }
    }

export default OpenTickets;