// import {Container, Row, Col, Button} from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap';
import ClosedTickets from '../TicketComponent/ClosedTickets';
import OpenTickets from '../TicketComponent/OpenTickets'
const Ticket = ({ticket}) => {
    // console.log(ticket.ID);

    if (!ticket.completed){
        return(
            <OpenTickets openTicket={ticket}/>
        )
    } else {
        return(
            <ClosedTickets closedTicket={ticket}/>
        )
    }

    //     </>
    //
}


export default Ticket;