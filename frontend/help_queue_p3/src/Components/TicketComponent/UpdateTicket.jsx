import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const UpdateTicket = ({
  id,
  oldTitle,
  traineeName,
  oldTrainer,
  oldCohort,
  oldDescription,
  oldTopic,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(oldTitle);
  const [trainee, setTrainee] = useState(traineeName);
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
      
  };
}
export default UpdateTicket;