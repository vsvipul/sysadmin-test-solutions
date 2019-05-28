# Docker
Here are the steps I followed-
- Learnt about docker from official documentation [here](https://docs.docker.com/).
- Installed Docker Community CE.
- Learnt about Dockerfile and how to create one.
- Created an apache Dockerfile and a test.sh file to run ```curl localhost``` initially. 
- I could see the desired curl output in my machine but coudn't figure out how to see the output inside the container.
- So, i changed the ```test.sh``` file to just echo the desired output.

## What I learnt?

1. Dockerfile 
2. Docker 
   Building, running dockerimages and uploading Docker images to Dockerhub.
3. Difference between containers and VMs.

## How to test?
Run this command on your machine.

```bash
    sudo docker run vsvipul555/final-submit:firsttry
```