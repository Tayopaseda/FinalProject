import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from 'axios';



const ViewTickets = ({
  id,
  title,
  traineeName,
  trainer,
  cohort,
  description,
  topic,
  completed,
  solution,
  refreshPage,
  time
}) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [newCompleted, setCompleted] = useState(false);
  const [addSolution, setAddSolution] = useState(false);
  const [newSolution, setSolution] = useState(``);


const completeTicket = (i) => {

//   if(!newSolution) return {
   
    
//   }



  
    const ticketValues = {
        completed: newCompleted,
        solution: newSolution,
        title: title,
        trainee: traineeName,
        trainer: trainer,
        cohort: cohort,
        _description: description,
        topic: topic,
        dateTime: time
      };

    console.log(ticketValues);
    //   setCompleted(true);

    axios
    .put("http://localhost:8080/ticket/update/" + id, ticketValues, {
    headers: {
        'Access-Control-Allow-Origin' : '*'
        },
    })
    .then((response) => {
        console.log(response)
        setCompletedFunc();
        setAddSolution();
        refreshPage(true);
    })
    .catch((error) => {
        console.log(error);
    });

    handleClose();

    const setCompletedFunc=()=>{

        axios
        .put("http://localhost:8080/ticket/completed/" + id, ticketValues, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            },
        })
        .then((response) => {
            console.log(response)
            setCompleted(true)
            refreshPage(true);
        })
        .catch((error) => { 
            console.log(error);
        });
        
    }
    }
    
    
// if (addSolution === true){
//     console.log("its TRUEEEEEEEEEEEEEEEEEE")
// } else {
//     console.log("Its FALSSSSSSSSEEEEEEEE");
// }



if (!completed){
    
    if(!addSolution){
        
        return(
            <>
        <Button 
        variant="info" 
        onClick={handleShow}
        > View
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="ticketModal"
            scrollable={true}
            >
            <Modal.Header closeButton>
                <Modal.Title>View Ticket Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={completeTicket}>
                    <Form.Group>
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control
                            readOnly value={traineeName}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Cohort</Form.Label>
                        <Form.Control
                            readOnly value={cohort}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Topics</Form.Label>
                        <Form.Control
                            readOnly value={topic}
                            >

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Trainer</Form.Label>
                        <Form.Control
                            readOnly value={trainer}
                            >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            readOnly value={title}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            readOnly value={description}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Add a Solution</Form.Label>
                        <Form.Control
                            type="checkbox"
                            onChange={(i) => {
                                setAddSolution(!addSolution)
                            }}
                            />
                    </Form.Group>
                </Form>

                <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    block
                    disabled
                    >Complete Ticket
                </Button>
            </Modal.Body>
        </Modal>

       
    </>
)
            } else {
                return(
                    <>
                <Button 
                variant="info" 
                onClick={handleShow}
                > View
                </Button>
        
                <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="ticketModal"
                    scrollable={true}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>View Ticket Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={completeTicket}>
                            <Form.Group>
                                <Form.Label>Trainee Name</Form.Label>
                                <Form.Control
                                    readOnly value={traineeName}
                                    />
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Cohort</Form.Label>
                                <Form.Control
                                    readOnly value={cohort}
                                    >
                                </Form.Control>
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Topics</Form.Label>
                                <Form.Control
                                    readOnly value={topic}
                                    >
        
                                </Form.Control>
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Trainer</Form.Label>
                                <Form.Control
                                    readOnly value={trainer}
                                    >
                                </Form.Control>
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    readOnly value={title}
                                    />
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    readOnly value={description}
                                    />
                            </Form.Group>
        
                            <Form.Group>
                                <Form.Label>Solution</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    required
                                    rows={5}
                                    onChange={(i) => {
                                        setSolution(i.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Form>
        
                        <Button
                            onClick = {completeTicket}
                            type="submit"
                            variant="success"
                            size="lg"
                            block
                            >Complete Ticket
                        </Button>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}   else {
    return(
        <>
        <Button 
        variant="info" 
        onClick={handleShow}
        > View
        </Button>
        
        <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="ticketModal"
        scrollable={true}
        >
        <Modal.Header closeButton>
        <Modal.Title>View Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={completeTicket}>
            <Form.Group>
                <Form.Label>Trainee Name</Form.Label>
                <Form.Control
                    readOnly value={traineeName}
                    />
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Cohort</Form.Label>
                <Form.Control
                    readOnly value={cohort}
                    >
                </Form.Control>
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Topics</Form.Label>
                <Form.Control
                    readOnly value={topic}
                    >
        
                </Form.Control>
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Trainer</Form.Label>
                <Form.Control
                    readOnly value={trainer}
                    >
                </Form.Control>
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    readOnly value={title}
                    />
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    readOnly value={description}
                    />
            </Form.Group>

            <Form.Group>
                <Form.Label>Solution</Form.Label>
                <Form.Control
                as="textarea"
                rows={5}
                readOnly value={solution}
                />
            </Form.Group>

           
        </Form>
        </Modal.Body>
        </Modal>
        </>
        )
    
}
}

export default ViewTickets;