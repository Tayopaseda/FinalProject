 import {Container, Row, Col, Button} from 'react-bootstrap'
import ClosedTickets from '../TicketComponent/ClosedTickets';
import OpenTickets from '../TicketComponent/OpenTickets'


 const Main = () => {
     return(
        
        <Container>
            <Button
                variant="success"
                >Create Ticket
            </Button>
            <br/>
            <br/>


        <Row>
            <Col>
                <Row><OpenTickets/></Row>
                <Row>2</Row>
                <Row>3</Row>
            </Col>
            <Col>
                <Row><ClosedTickets/></Row>
                <Row>2</Row>
                <Row>3</Row>
            </Col>
        </Row>
        </Container>
     );
 }

 export default Main;