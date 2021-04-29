#! /bin/bash

echo "building test docker images"

echo "building backend image"
cd ./CNE-Final-Project
sudo docker build -t backend:latest .

cd ../frontend/help_queue_p3
sudo docker build -t frontend:latest .

#push backend images to docker hub
echo "pushing backend images to dockerhub"
echo $dockerPassword | sudo docker login --username=$dockerUsername --password-stdin
sudo docker tag backend:latest tayop/backend:latest
sudo docker push tayop/backend:latest

#push frontend images to docker hub
echo "pushing frotnend images to dockerhub"
sudo docker tag frontend:latest tayop/frontend:latest
sudo docker push tayop/frontend:latest

echo "deleting images from jenkins system"
sudo docker rmi frontend:latest tayop/frontend:latest backend:latest tayop/backend:latest
sudo docker system prune -a -f
