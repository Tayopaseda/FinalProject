#!/bin/bash

export backend={{endpoint}}
export database={{cluster-address}}

mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.jsx /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.txt
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/DeleteTicket.txt
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/UpdateTicket.txt
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/ViewTicket.txt

sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.txt
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/DeleteTicket.txt
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/UpdateTicket.txt
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/ViewTickets.txt

sed -i "s/{{database-endpoint}}/$database/g" /home/ubuntu/shiny-funicular/CNE-Final-Project/src/main/resources/application-dev.properties

mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.txt /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.jsx
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/DeleteTicket.jsx
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/UpdateTicket.jsx
mv /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.txt /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/ViewTicket.jsx
