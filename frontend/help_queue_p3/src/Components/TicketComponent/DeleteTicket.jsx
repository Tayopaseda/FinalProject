import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const deleteTicket = (e) => {
    console.log("delete ticket info");
    axios.delete("/deleteTicket/", {
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
  export default deleteTicket;
