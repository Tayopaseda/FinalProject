import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";

const UpdateTicket = ({
  id,
  oldTitle,
  oldTraineeName,
  oldTrainer,
  oldCohort,
  oldDescription,
  oldTopic,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(oldTitle);
  const [traineeName, setTrainee] = useState(oldTraineeName);
  const [trainer, setTrainer] = useState(oldTrainer);
  const [cohort, setCohort] = useState(oldCohort);
  const [description, setDescription] = useState(oldDescription);
  const [topic, setTopic] = useState(oldTopic);
  const [time, setTime] = useState(
    new Date().toLocaleString('en-GB')
  );

  const ticketValues = {
    title: title,
    trainee: traineeName,
    trainer: trainer,
    topic: topic,
    description: description,
    cohort: cohort,
    dateTime: time,
  };
  
const updateData = (e) => {
    setTime(new Date().toLocaleString("en-GB"))
    axios.put("/update/" + id, ticketValues,  {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log();
        console.log(error);
      });

      handleClose();
      
  };

  return(

    <>
        <Button 
        variant="info" 
        onClick={handleShow}
        >
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="ticketModal"
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Ticket Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={oldTraineeName}
                            placeholder="Trainee Name"
                            onChange={(i) => {
                                setTrainee(i.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Cohort</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(i) => {
                                setCohort(i.target.value);
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
                                setTopic(i.target.value);
                            }}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Trainer</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(i)=>{
                                setTrainer(i.target.value);
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
                            placeholder={oldTopic}
                            onChange={(i) => {
                                setTitle(i.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder={oldDescription}
                            onChange={(i) => {
                                setDescription(i.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>

                <Button
                    onClick={(i) => updateData(i)}
                    variant="success"
                    size="lg"
                    block
                >Update Ticket
                
                </Button>
            </Modal.Body>
        </Modal>
    </>
  ) 



}
export default UpdateTicket;