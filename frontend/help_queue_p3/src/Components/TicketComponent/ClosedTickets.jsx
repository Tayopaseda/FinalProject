import Card from 'react-bootstrap/Card';
import ViewTickets from './ViewTickets';

const ClosedTickets = ({closedTicket, refreshPage}) => {
    // console.log(closedTicket);

    return(
        
        <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{closedTicket.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{closedTicket.trainee}</Card.Subtitle>
        <Card.Text>
            <small className="text-muted">Logged: {closedTicket.dateTime}</small>
        </Card.Text>
        <ViewTickets
            id={closedTicket.id}
            title={closedTicket.title}
            traineeName={closedTicket.trainee}
            trainer={closedTicket.trainer}
            cohort={closedTicket.cohort}
            description={closedTicket._description}
            topic={closedTicket.topic}
            completed={closedTicket.completed}
            solution={closedTicket.solution}
            refreshPage={refreshPage}
            />
    </Card.Body>
</Card>

)
}

export default ClosedTickets