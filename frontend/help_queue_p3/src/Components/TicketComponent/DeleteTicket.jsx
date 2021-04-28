import axios from "axios";
// import React from "react";
// import Avatar from "react-avatar";
// import { Col, Row, Button, Card, Accordion } from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";

const DeleteTicket = ({
  id,
  title,
  trainee,
  trainer,
  cohort,
  description,
  topic,
}) => {

const deleteTicket = (e) => {
    console.log("delete ticket info");
    axios.delete("/delete/" + id, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

  export default DeleteTicket;