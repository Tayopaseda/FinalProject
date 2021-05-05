#!/bin/bash

export backend={{endpoint}}
export database={{cluster-address}}


sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/HomePage/Main.jsx
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/DeleteTicket.jsx
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/UpdateTicket.jsx
sed -i "s/localhost:8080/$backend:8081/g" /home/ubuntu/shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/ViewTickets.jsx

sed -i "s/{{database-endpoint}}/$database/g" /home/ubuntu/shiny-funicular/CNE-Final-Project/src/main/resources/application-dev.properties


