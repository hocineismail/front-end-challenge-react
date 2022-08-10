# Crewmeister coding challenge - Frontend (React)

## 📜 Description

This project is a simple solution for company owners to manage sickness and vacations of employees

## 🌐 Links

* [Deployed application on Heroku](https://stormy-earth-85572.herokuapp.com/)
* [Api (mock server) - digitalocean](https://api.ismailhocine.com/api/v1/absences)

## 🎯 Product Requirements And Features

- [x] I want to see a list of absences including the names of the employees
- [x] I want to see the first 10 absences, with the ability to paginate
- [x] I want to see a total number of absences
- [x] For each absence I want to see:
    - [x] Member name
    - [x] Type of absence
    - [x] Period
    - [x] Member note (when available)
    - [x] Status (can be 'Requested', 'Confirmed' or 'Rejected')
    - [x] Admitter note (when available)
- [x] I want to filter absences by type
- [x] I want to filter absences by date
- [x] I want to see a loading state until the list is available
- [x] I want to see an error state if the list is unavailable
- [x] I want to see an empty state if there are no results
- [x] (Bonus) I can generate an iCal file and save it  
- [x] (Feature) As an admitter I want to confirm or reject an absence request

## 💻 Tech Requirements

- [x] React
- [x] Tests: Jest + react-testing-library
- [x] Code Linter
- [ ] Redux is a plus
- [ ] Typescript is a plus
- [ ] CSSinJS is a plus: styled-components, styled-system


 

# Pre-requisites 
- Install [Node.js](https://nodejs.org/en/)

## 🔨 Running Code (server)

To run program, run the following command. 

1. Use the terminal to execute the following commands (Run mock server):
    - `cd api` to go to directory api (folder) (mock server)
    - `npm install` or `yarn install` to install the dependencies for mock server
    - `node server.js` to run mock server


## 🔨 Running Code (react)

To run program, run the following command. 
 
1. Use the terminal to execute the following commands:
    - `npm install` or `yarn install` to install the dependencies for react application
    - `npm start` to start the the application

1. Open your browser on `http://localhost:3000` to see the page
## 🔨 Running Test (react)
1. To run tests, run the following command.

```bash
  npm run test
```

## Author

- [@Ismail Hocine](https://github.com/hocineismail)

## ✔️ Prerequisites

* Node.js 16