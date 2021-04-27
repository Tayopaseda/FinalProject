import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const EditTicketButton = ({
  oldName,
  oldTrainer,
  oldUrgency,
  oldCohort,
  oldDesc,
  oldTopic,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cohort, setcohort] = useState(oldCohort);
  const [trainer, settrainer] = useState(oldTrainer);
  const [title, settitle] = useState(oldName);
  const [issue, setissue] = useState(oldDesc);
  const [topic, settopic] = useState(oldTopic);
  const [urgency, seturgency] = useState(oldUrgency);

  const ticketData = {
    title: title,
    topic: topic,
    content: issue,
    status: status,
    trainer: trainer,
    priority: urgency,
    cohort: cohort,
    timestamp: timestamp,
    author: oldName,
  };



const updateTicket = (e) => {
    axios.put("/updateTicket/",  {
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
  };
  export default updateTicket;