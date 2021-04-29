import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import DeleteTicket from './DeleteTicket';
import ViewTickets from './ViewTickets';

const OpenTickets = ({openTicket}) => {
    console.log(openTicket);

    return(
        
        <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{openTicket.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{openTicket.trainee}</Card.Subtitle>
        <Card.Text>
            <small className="text-muted">Logged: {openTicket.dateTime}</small>
        </Card.Text>
        <Button variant="primary">View <ViewTickets/></Button>
        <Button variant="danger">Delete <DeleteTicket/></Button>
    </Card.Body>
</Card>

)
}

export default OpenTickets;