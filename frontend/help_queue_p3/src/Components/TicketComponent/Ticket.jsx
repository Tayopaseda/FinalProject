const Ticket = (ticket) => {
    return(
        <>
            <td>{ticket.trainee}</td>
            <td>{ticket.cohort}</td>
            <td>{ticket.title}</td>
            <td>{ticket.topic}</td>
            <td>{ticket.trainer}</td>
            <td>{ticket.description}</td>
            <td>{ticket.completed}</td>
        </>
    )
}

export default Ticket;