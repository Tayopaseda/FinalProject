import Card from 'react-bootstrap/Card';

const ClosedTickets = ({closedTicket}) => {
    console.log(closedTicket);

    return(
        
        <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{closedTicket.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{closedTicket.trainee}</Card.Subtitle>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
    </Card.Body>
</Card>

)
}

export default ClosedTickets