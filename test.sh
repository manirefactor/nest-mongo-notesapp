chmod 400 cicd.pem
ssh -T -T -R -i "cicd.pem" ubuntu@3.110.197.38;
mkdir mani_test
