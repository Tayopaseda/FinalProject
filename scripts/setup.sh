#! /bin/bash

cd ./kubernetes

kubectl apply -f namespace.yaml
kubectl config set-context --current --namespace=production
kubectl apply -f nginx-config.yaml 
kubectl apply -f nginx-lb.yaml -f nginx.yaml
sleep 3

export backend_endpoint=$(kubectl get services nginx-lb)


