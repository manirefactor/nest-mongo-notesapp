chmod 400 cicd.pem
ssh -tt -i ${{secrets.KEY_ED25519}} ubuntu@ec2-3-110-197-38.ap-south-1.compute.amazonaws.com;
mkdir mani_test
