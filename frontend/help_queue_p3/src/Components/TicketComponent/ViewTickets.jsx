import React from "react";
import { Accordion } from "react-bootstrap";
import DeleteTicket from "./DeleteTicket";
const ViewTickets = ({ data, error, isLoaded }) => {
  if (!isLoaded) {
    return <p> Loading Information, Please Wait.</p>;
  } else {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {data.map((ticket) => (
            <DeleteTicket
                id={ticket.id}
                title={ticket.title}
                trainee={ticket.traineeName}
                trainer={ticket.trainer}
                cohort={ticket.cohort}
                description={ticket.description}
                topic={ticket.topic}
            />
          ))}
        </Accordion>
      </>
    );
  }
};
export default ViewTickets;
