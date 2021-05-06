import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import CreateTicketImg from "../../css/images/CreateTicket.png";

const CreateTicket = ({ refreshPage }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [traineeName, setTraineeName] = useState(``);
  const [cohort, setCohort] = useState(``);
  const [topic, setTopic] = useState(``);
  const [trainer, setTrainer] = useState(``);
  const [urgency, setUrgency] = useState(``);
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);
  const [time, setTime] = useState(new Date().toLocaleString("en-GB"));

  const ticketValues = {
    title: title,
    topic: topic,
    trainee: traineeName,
    cohort: cohort,
    trainer: trainer,
    _description: description,
    dateTime: time,
    urgency: urgency,
  };

  const sendData = (i) => {
    const newDate = new Date().toLocaleString("en-GB");
    setTime(newDate);

    axios
      .post(`http://localhost:8080/ticket/create`, ticketValues)
      .then(function (response) {
        console.log(response);
        refreshPage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleClose();
  };

  return (
    <>
      <Button id="createBtn" variant="light" onClick={handleShow}>
        <img src={CreateTicketImg} alt="createTicketBtn" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="createModal"
        scrollable={true}
      >
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
                  setTraineeName(i.target.value);
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
                <option value="" selected disabled hidden>
                  Choose here
                </option>
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
                <option value="" selected disabled hidden>
                  Choose here
                </option>
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
                  setTrainer(i.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option>Vinesh Ghela</option>
                <option>Jordan Harrison</option>
                <option>Reece Elder</option>
                <option>Nathan Forester</option>
                <option>Harry Volker</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Urgency</Form.Label>
              <Form.Control
                as="select"
                onChange={(i) => {
                  setUrgency(i.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topic issue"
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
          >
            {" "}
            Submit Ticket
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateTicket;
