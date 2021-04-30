import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from 'axios';
import DeleteTicket from './DeleteTicket';




const ViewTickets = ({
  id,
  title,
  traineeName,
  trainer,
  cohort,
  description,
  topic,
  completed
}) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newCompleted, setCompleted] = useState(completed);

const completeTicket = (e) => {

    const ticketValues = {
        completed: newCompleted
      };


    axios
    .put("http://localhost:8080/ticket/completed/" + id, ticketValues, {
    headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
    .then((response) => {
        console.log(response)
        setCompleted()
    })
    .catch((error) => {
        console.log(error);
    });

    handleClose();
}

const deleteData = (e) => {
    axios
    .delete("http://localhost:8080/ticket/delete/" + id, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

if (!completed){

    return(
        <>
        <Button 
        variant="info" 
        onClick={handleShow}
        > View
        </Button>
        <>

        <Button
        variant="danger"
        onClick={deleteData}
        > Delete
        </Button>
        </>

        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="ticketModal"
            scrollable={true}
            >
            <Modal.Header closeButton>
                <Modal.Title>View Ticket Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={completeTicket}>
                    <Form.Group>
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control
                            readOnly value={traineeName}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Cohort</Form.Label>
                        <Form.Control
                            readOnly value={cohort}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Topics</Form.Label>
                        <Form.Control
                            readOnly value={topic}
                            >

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Trainer</Form.Label>
                        <Form.Control
                            readOnly value={trainer}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            readOnly value={title}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            readOnly value={description}
                            />
                    </Form.Group>
                </Form>

                <Button
                    onClick = {completeTicket}
                    type="submit"
                    variant="success"
                    size="lg"
                    block
                    >Complete Ticket
                
                </Button>
            </Modal.Body>
        </Modal>
    </>

)
} else {
    
    return(
        <>
        <Button 
        variant="info" 
        onClick={handleShow}
        > View
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="ticketModal"
            scrollable={true}
            >
            <Modal.Header closeButton>
                <Modal.Title>View Ticket Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={completeTicket}>
                    <Form.Group>
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control
                            readOnly value={traineeName}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Cohort</Form.Label>
                        <Form.Control
                            readOnly value={cohort}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Topics</Form.Label>
                        <Form.Control
                            readOnly value={topic}
                            >

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Trainer</Form.Label>
                        <Form.Control
                            readOnly value={trainer}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            readOnly value={title}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            readOnly value={description}
                            />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>

)
}

};
export default ViewTickets;