#### Example of course recommendation system using InfernoJS With Redux, Docker, NodeJs and MySQL
### Prerequisites
Docker and Docker-compose
### Run
- Change the api address, on /web/src/main/constants/constants.json, put the docker-machine ip (default is 192.168.99.100)
- docker-compose up -d
- Access the address of your docker-machine ip on browser  on port 5000

## Or
#### Installing 
- MySQL
- NodeJS v8.4.0
### Run
#### DB
- Scripts db on /db/ia.sql
#### API
- npm install
- npm start
#### Web
- npm install
- Change the api address, on /web/src/main/constants/constants.json, put localhost:3001
- npm start

### Developed only for academic purposes of computer science course.
#### Technologies
- NodeJS v8.4.0 
- MySQL
- ES6/ES7/ES8 features (async/await)
- InfernoJS
- Redux/Redux-thunk
- Docker
- Docker-compose
- Nginx
