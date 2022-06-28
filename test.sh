chmod 400 notesapi.ppk
ssh -i "notesapi.ppk" ubuntu@ec2-3-110-197-38.ap-south-1.compute.amazonaws.com "docker stop nestmongo;
mkdir mani_test
