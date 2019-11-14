# NodeJS
Downoad and Install Node.js [from here](https://nodejs.org/en/download/)

### Initialize API Project
create a folder, open in command line. Type the following command to initialize project!
`npm init`
Provide details as you like. It'll create a package.json file with following details!
```
{
  "name": "shop-api",
  "version": "1.0.0",
  "description": "The REST API for Shop Frontend",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Now, To be able to push on GitHub and Heroku, use `git init` in same directory.

### Install needed Dependencies

`npm install express bcryptjs nodemon mongoose mongo-sanitize jsonwebtoken config cors body-parser `

### Directory Structure

```
|-config/
    |-default.json
    
|-src/
    |-models/
    |    |-
    |    |-
    |    |-
    |    
    |-routes/
    |    |-login.js
    |    |-register.js
    |    |-
    |    |-
    |-utils/
    |    |-auth.js
    |    |-connection.js
    |    
    |-app.js or index.js
   
|-.gitignore
|-package-lock.json
|-package.json
```

### MongoDB
Create account on [Atlas](https://www.mongodb.com/cloud/atlas)
Create Project
Create New Cluster
Create Database User

Paste the url in default.json
```
{
	"mongoURI": "mongodb+srv://dbUser:dbPassword@example-ye9iv.mongodb.net/test?retryWrites=true&w=majority",
	"secret": "nothing"
}

```
if using some special chars in password, don't forget to url-encode the password.([URL Encoder](https://meyerweb.com/eric/tools/dencoder/))

### app.js
