#! /bin/bash

echo "building test docker images"

echo "building backend image"
cd ./CNE-Final-Project
sudo docker build -t backend:test .

cd ../frontend/help_queue_p3
sudo docker build -t frontend:test .

#push backend images to docker hub
echo "pushing backend images to dockerhub"
echo $dockerPassword | sudo docker login --username=$dockerUsername --password-stdin
sudo docker tag backend:test tayop/backend:test
sudo docker push tayop/backend:test

#push frontend images to docker hub
echo "pushing frotnend images to dockerhub"
sudo docker tag frontend:test tayop/frontend:test
sudo docker push tayop/frontend:test

echo "deleting images from jenkins system"
sudo docker rmi frontend:test tayop/frontend:test backend:test tayop/backend:test
sudo docker system prune -a -f

