# shiny-funicular

## Index

1. [Introduction](#Introduction)
2. [Technologies](#Technologies)
3. [Project Planning](#Project_Planning)
4. [Entity Relationship Diagram](#Entity_Relationship)
5. [Frontend](#Frontend)
6. [DevOps](#DevOps)
7. [Backend](#Backend)
8. [Testing](#Testing)
9. [Risk Assessment](#Risk_Assessment)
10. [Improvements](#Improvements)
11. [Bibliography](#Bibliography)



# Introduction

Our group has been tasked with designing, developing and deploying a full-stack application functioning as a help queue accessible by QA Academy trainers and trainees. The brief provided was as follows:

"For this project, you are tasked with creating a Help Queue web application for use in the Academy. The purpose of this application is to work as a virtual hands-up tool to alert trainers to who needs help in their class. Trainees can post help tickets to the queue, with oldest tickets at the top of the list. Trainers can then view the queue to see who needs help next. When a ticket has been solved, it is marked as "Done" by the user and added to a separate "Completed" list. The next-oldest ticket is moved to the top of the list."


# Technologies

The technologies we will be using to deploy the Flask Application are: 

- Kanban Board: Jira

- Database Server: AWS RDS

- Programming Language: Java

- Front-End: React, CSS

- Unit Tests: JUnit and Mockito

- Version Control: Git

- Cloud Server: AWS, EC2

- CI Server: Jenkins

- Containerisation: Docker

- Reverse Proxy: NGINX

- Configuration Management: Ansible

- Infrastructure Management: Terraform

- Orchestration Tool: Kubernetes


# Project Planning<a name="Entity_Relationship_Diagram"></a> 

The team sat together and brainstorm the project by collaborating their ideas and thoughts on how to approach the project. We then put all of ideas on to a Jira Board where Epics were created. 

The team then decided among each other on what section they wanted to work on, i.e Back end or front end and then the tasks were distributed to each member for their chosen roles and responsibilities. 

#### Jira 

The Jira board shows the backlog of the tasks for the project and who they are assigned to.

![](https://i.imgur.com/85g1Wrj.png)

The board has been designed in order for users to make posts of tasks needed for completion. The board allows users to move tasks from left to right from 'To do' to 'Completion'.

![](https://i.imgur.com/N4i1hGO.png)

# Entity Relationship Diagram <a name="Project_Planning"></a> 

![](https://i.imgur.com/LIrHiuO.png)

# Frontend

The Frontend is a React application which utilises React Bootstrap for the functionality of the page. 

The design of the frontend was to make sure that it was fully functional and at a high standard like modern websites today in order to meet users expectations when the website is being used

The purpose of the website is to have a fully functional CRUD ((Create, Read, Update, Delete) functionality.

The images below show the frontend design being fully functional;

##### Ticket Page
![]()

##### Add Ticket
![]()

##### Edit Ticket
![]()

##### Delete Ticket
![]()

##### Solution Page
![]()


# DevOps

##### Terraform

Terraform is an Infrastructure as Code software tool which allows us to automate deployment of architecture. Terraform was used to create the EKS and the Nodes. We also used terrafrom to create two RDS Instances in order to test and deploy the application.


##### Jenkins

Jenkins is an open-source automation tool written in Java with plug-ins built for Continuous Integration purposes.
Jenkins is used to build and test your software projects continuously making it easier for developers to integrate changes to the project,
and making it easier for users to obtain a fresh build. Jenkins was used to deploy the application. From the image below, you can see a successfully deployed application with no faults.

![](https://i.imgur.com/KfbEzfF.png)

##### CI Pipeline

Below is an image showing the Continuous Integration Pipeline used to deploy the Help Queue Application.

![](https://user-content.gitlab-static.net/cc86f76dc227985a62c41eeaebd2016556062f92/68747470733a2f2f692e696d6775722e636f6d2f37757566396b652e706e67)

##### Ansible
Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.
Ansible was used in this project in order to install all the software and applications needed automatically in our Jenkins VM and Test VM instead of installing them manually one by one.


 # Backend
The backend is a spring boot application which is written in Java and deployed inside a docker container.The backend waits for requests from the frontend in order to perform SQL queries.



# Testing
Backend testing was done using JUnit and integration testing using MockMVC. 

Mockito was used in order to test the framework of the service class. Mockito is beneficial as it allows the testing to be carried out using mock data before any connections are made. 


![](https://i.imgur.com/jVoJ53c.png)

Frontend testing was done using Jest.

![](https://i.imgur.com/3WzIekF.png)


# Risk Assessment<a name="Risk_Assessment"></a> 

The risk assessment of the project can be seen below.

![](https://i.imgur.com/ZOWzltC.png)


# Improvements

There are many different improvements that could have been made to take this to the next level. Some of the improvements would have been:

- To implement a login page in order to increase security for the trainers and trainees.

- To get the test coverage to 100% as it is currently on 62%.

- To be able to have all the deployment running without entering any commands manually in order to have the process fully automated . 


# Bibliography

We would like to thank and acknowledge all the QA Trainers and our friends that helped my with obstacles we came across during the development of this application.

# Authors

- Aadil Moghal

- Olatayo Paseda

- Shamsi Ara Shumi

- Haydon Beale

