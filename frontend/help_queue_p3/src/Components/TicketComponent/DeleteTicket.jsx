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