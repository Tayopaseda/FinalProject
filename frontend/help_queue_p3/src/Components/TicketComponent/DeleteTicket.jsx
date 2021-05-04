import axios from "axios";
import { Button } from "react-bootstrap";
// import React from "react";
// import Avatar from "react-avatar";
// import { Col, Row, Button, Card, Accordion } from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";
const DeleteTicket = ({
  id,
  title,
  traineeName,
  trainer,
  cohort,
  description,
  topic
}) => {

  const deleteData = (e) => {
    axios
    .delete("http://af9c5b888c5104d81bb1bd90f57e83ab-504368976.eu-west-2.elb.amazonaws.com:8081/ticket/delete/" + id, {
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

  return(
    <>
    <Button
    variant="danger"
    onClick={deleteData}
    > Delete </Button>
    </>
    )


}


  export default DeleteTicket;
