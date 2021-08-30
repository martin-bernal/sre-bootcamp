# Implementation Checklist
- [X] API Code
- [X] Services Code
- [X] Unit-tests
- [X] Dockerfile
- [x] It Compiles
- [X] It runs

# Api Services
- Receives a valid username and password and returns a JWT.
- Returns protected data with a valid token, otherwise returns unauthenticated.

# How to run

Change the values inside ``< >`` tags to the correct env variables.
### Using node
```
DB_HOST=<Database host> DB_USER=<Database user> DB_PASSWORD=<Database password> DATABASE=<Database name> JWT_KEY=<Json Web Token secret> npm run start
```
### Using docker
```
docker pull iiwwii/wize-martin-bernal
docker run -p 8000:8000 -e "DB_HOST=<DB Host url>" -e "DB_USER=<DB login username>" -e "DB_PASSWORD=<DB login password>" -e "DATABASE=<DB name>" -e "JWT_KEY=<Json Web Token secret key>" -d iiwwii/wize-martin-bernal:latest
```
[Image repository](https://hub.docker.com/r/iiwwii/wize-martin-bernal)