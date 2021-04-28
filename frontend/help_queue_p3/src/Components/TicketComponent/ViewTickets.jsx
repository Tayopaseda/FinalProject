import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";



const ViewTickets = ({
  title,
  traineeName,
  trainer,
  cohort,
  description,
  topic
}) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [title, setTitle] = useState(currentTitle);
  // const [traineeName, setTrainee] = useState(currentTraineeName);
  // const [trainer, setTrainer] = useState(currentTrainer);
  // const [cohort, setCohort] = useState(currentCohort);
  // const [description, setDescription] = useState(currentDescription);
  // const [topic, setTopic] = useState(currentTopic);


  // const ticketValues = {
  //   title: title,
  //   trainee: traineeName,
  //   trainer: trainer,
  //   topic: topic,
  //   _description: description,
  //   cohort: cohort,
  // };

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
                <Form>
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

                {/* <Button
                    onClick = {ticketView}
                    type="submit"
                    variant="success"
                    size="lg"
                    block
                >Update Ticket
                
                </Button> */}
            </Modal.Body>
        </Modal>
    </>

)

};
export default ViewTickets;