import Card from 'react-bootstrap/Card';

const ClosedTickets = () => {

    return(
        
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Trainee</Card.Subtitle>
            <Card.Link href="#">View</Card.Link>
        </Card.Body>
    </Card>
)
};

export default ClosedTickets