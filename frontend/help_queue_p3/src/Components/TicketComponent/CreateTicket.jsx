import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form} from "react-bootstrap";

const CreateTicket = () => {
    
    const [show, setShow] = useState(false);

    const handleClose=()=> setShow(false);
    const handleShow=()=> setShow(true);


    const [traineeName, setTraineeName] = useState(``);
    const [cohort, setCohort] = useState(`CNE2021`);
    const [topic, setTopic] = useState(``);
    const [trainer, setTrainer] = useState(``);
    const [title, setTitle] = useState(``);
    const [description, setDescription] = useState(``);
    const [time, setTime] = useState(
        new Date().toLocaleString('en-GB')
    );

    const ticketValues = {
        title: title,
        topic: topic,
        trainee: traineeName,
        cohort: cohort,
        trainer: trainer,
        description: description,
        dateTime: time,
    };


    const sendData = (i) => {
        const newDate = new Date().toLocaleString('en-GB')
    setTime(newDate);

    axios
        .post(`http://localhost:8080/ticket/create`, ticketValues)
        .then(function (response) {
           console.log(response);
        })
        .catch(function (error) {
           console.log(error);
        })
        handleClose();
    };

    return(
        <>
            <Button
                variant='success'
                onClick={handleShow}>Create Ticket    
            </Button>

        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="createModal"
            scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Ticket Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Trainee Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Trainee Name"
                                onChange={(i) => {
                                    setTraineeName(i.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(i) => {
                                    setCohort(i.target.value)
                                    }}
                            >
                                <option>CloudNative</option>                        
                                <option>Software Specialist</option>                        
                                <option>DevOps</option>   
                            </Form.Control>                     
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Topics</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(i) => {
                                    setTopic(i.target.value)
                                }}
                            >
                                <option>FrontEnd</option>
                                <option>BackEnd</option>
                                <option>DevOps</option>
                                <option>Cloud Fundamentals</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Trainer</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(i) => {
                                    setTrainer(i.target.value)
                                }}
                            >
                                <option>Vinesh Ghela</option>
                                <option>Jordan Harrison</option>
                                <option>Reece Elder</option>
                                <option>Nathan Forester</option>
                                <option>Harry Volker</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Topic issue"
                                onChange={(i)=> {
                                    setTitle(i.target.value)
                                }}
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                onChange={(i) => {
                                    setDescription(i.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>

                    <Button
                        onClick={(i) => sendData(i)}
                        variant="success"
                        size="lg"
                        block
                    > Submit Ticket

                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateTicket ;


