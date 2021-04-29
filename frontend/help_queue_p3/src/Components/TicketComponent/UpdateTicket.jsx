import React, {useState } from "react";
import axios from "axios";
import {Button, Modal, Form } from "react-bootstrap";

const UpdateTicket = ({
  id,
  oldTitle,
  oldTraineeName,
  oldTrainer,
  oldCohort,
  oldDescription,
  oldTopic
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

const updateData = (e) => {
    e.preventDefault();

    const ticketValues = {
        title: title,
        trainee: traineeName,
        trainer: trainer,
        topic: topic,
        _description: description,
        cohort: cohort,
        dateTime: time,
      };
    
    //   console.log(ticketValues);
      
    setTime(new Date().toLocaleString("en-GB"))
    axios.put("http://backend:8080/ticket/update/" + id, ticketValues,  {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      handleClose();
      
  };

  return(

    <>
        <Button 
        variant="secondary" 
        onClick={handleShow}
        > Update
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
                <Form onSubmit={updateData}>
                    <Form.Group>
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={traineeName}
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
                            value={cohort}
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
                            value={topic}
                            onChange={(i) => {
                                setTopic(i.target.value);
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
                            value={trainer}
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
                            value={title}
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
                            value={description}
                            onChange={(i) => {
                                setDescription(i.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>

                <Button
                    onClick = {updateData}
                    type="submit"
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
