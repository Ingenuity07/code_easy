
# Code Easy

- A Web Application which Helps to gather best Study Resources from all over the Internet.
- It allows to clasify and store the resources and filter data by search.

## Tech Stack

**Client:** React, HTML , CSS , Javascript

**Server:** Node, Express 

**Database:** Mongo DB

**Tools:** VS code , Postman , Git


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Screenshots

<img src="/client/ss/image.png" width="300" height="468"></img>


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ingenuity07/code_easy.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
  cd client 
  npm install
```

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
