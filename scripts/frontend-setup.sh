#!/bin/bash

export backend="{{endpoint}}:8081"

sed -i "s/localhost:8080/$backend/g" shiny-funicular/frontend/help_queue_p3/src/Components/Homepage/Main.jsx
sed -i "s/localhost:8080/$backend/g" shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/CreateTicket.jsx
sed -i "s/localhost:8080/$backend/g" shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/DeleteTicket.jsx
sed -i "s/localhost:8080/$backend/g" shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/UpdateTicket.jsx
sed -i "s/localhost:8080/$backend/g" shiny-funicular/frontend/help_queue_p3/src/Components/TicketComponent/ViewTickets.jsx



