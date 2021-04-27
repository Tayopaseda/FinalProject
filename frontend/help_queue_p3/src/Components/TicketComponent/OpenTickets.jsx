import Card from 'react-bootstrap/Card';

const OpenTickets = ({openTicket}) => {
    console.log(openTicket);

    return(
        
        <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{openTicket.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{openTicket.trainee}</Card.Subtitle>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
    </Card.Body>
</Card>

)
}

export default OpenTickets;