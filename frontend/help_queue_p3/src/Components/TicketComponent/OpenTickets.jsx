import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import UpdateTicket from './UpdateTicket';
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
        <ViewTickets
            id={openTicket.id}
            title={openTicket.title}
            traineeName={openTicket.trainee}
            trainer={openTicket.trainer}
            cohort={openTicket.cohort}
            description={openTicket._description}
            topic={openTicket.topic}
            />
        <UpdateTicket
            id = {openTicket.id}
            oldTitle = {openTicket.title}
            oldTraineeName = {openTicket.title}
            oldTrainer = {openTicket.trainer}
            oldCohort = {openTicket.cohort}
            oldDescription = {openTicket._description}
            oldTopic = {openTicket.topic}
            />
    </Card.Body>
</Card>

)
}

export default OpenTickets;