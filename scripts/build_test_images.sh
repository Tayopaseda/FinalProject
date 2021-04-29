#! /bin/bash

echo "building test docker images"

echo "building backend image"
cd ./CNE-Final-Project
sudo docker build -t backend:test .

#push images to docker hub
echo "pushing images to dockerhub"
echo $dockerPassword | sudo docker login --username=$dockerUsername --password-stdin
sudo docker tag backend:test tayop/backend:test
sudo docker push tayop/backend:test

echo "deleting images from jenkins system"
sudo docker rmi backend:test tayop/backend:test
sudo docker system prune -a -f
