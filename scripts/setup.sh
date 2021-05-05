#! /bin/bash

cd ./kubernetes

kubectl apply -f namespace.yaml
kubectl config set-context --current --namespace=production
kubectl apply -f nginx-config.yaml 
kubectl apply -f nginx-lb.yaml -f nginx.yaml
sleep 3

cat > ~/.bash_profile << EOF
export backend_endpoint=$(kubectl get services nginx-lb)
EOF

cd..
sed -i "s/{{endpoint}}/$backend_endpoint/g"  scripts/frontend-setup.sh
