chmod 400 notesapi.ppk
ssh -i "notesapi.ppk" ubuntu@ec2-3-110-197-38.ap-south-1.compute.amazonaws.com "docker stop nestmongo;
docker login -u manitrak -p Mani@9430
docker rm nestmongo;
docker pull manitrak/nestmongo:latest
docker run -d -p nestmongo
echo "deployment success"
