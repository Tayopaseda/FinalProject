#! /bin/bash

source ~/.bash_profile

cd ./kubernetes

kubectl apply -f namespace.yaml
kubectl config set-context --current --namespace=production
kubectl apply -f nginx-config.yaml 
kubectl apply -f nginx-lb.yaml -f nginx.yaml
sleep 3

cd ..
sed -i "s/{{endpoint}}/$(kubectl get services nginx-lb)/g"  scripts/frontend-setup.sh

sed -i "s/{{cluster-address}}/$prodEndpointAddress/g" scripts/frontend-setup.sh
