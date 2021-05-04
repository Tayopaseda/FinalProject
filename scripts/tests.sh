#!/bin/bash

#source for env variables
source ~/.bash_profile

#substitute variables for values from env variables
sed -i "s/test-vm/$testIP/g" ./ansible/inventory.yaml 
sed -i "s/{{password}}/$dockerPassword/g" ./ansible/push-images/tasks/main.yml
sed -i "s/{{username}}/$dockerUsername/g" ./ansible/push-images/tasks/main.yml

#run ansible playbook
cd ./ansible
ansible-playbook -i inventory.yaml playbook.yaml
cd ..


#substitute variables in ansible directory back
sed -i "s/$testIP/test-vm/g" ./ansible/inventory.yaml 
sed -i "s/$dockerPassword/{{password}}/g" ./ansible/push-images/tasks/main.yml
sed -i "s/$dockerUsername/{{username}}/g" ./ansible/push-images/tasks/main.yml
