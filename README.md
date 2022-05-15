# Code Easy

- A Web Application which Helps to gather best Study Resources from all over the Internet.
- It allows to clasify and store the resources, and filter data by search.
- Admin is able to Add collection and Resources.
- Admin is authentication via JWT tokens. 
- Create, Update, Delete requests work for authorized users only.
## Tech Stack

**Client:** `React` `HTML`  `CSS` ` Javascript`

**Server:** `Node` `Express `

**Database:** `Mongo DB`

**Tools:** `VS code` `Postman` `Git`


## Screenshots

<img src="/client/ss/image.png" width="75%" height="50%"></img>


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGODB_URL`
`JWT_SECRET`


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ingenuity07/code_easy.git
```

Go to the project directory

```bash
  cd code_easy
```

Install dependencies

```bash
  npm install
  cd client 
  npm install
```

**Make sure All Environment variables are defined in .env extension file**

Start the server

```bash
  cd ..
  npm run start
```
Start Front End
```bash 
  cd client
  npm start
```
If Front End command is giving Error, install folowing and try Again
```bash
npm install react-scripts --save
```
