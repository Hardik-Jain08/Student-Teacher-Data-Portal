# Student Teacher Data Portal

## Overview
The Student Teacher Data Portal is an Angular application designed to manage student and teacher records. It includes functionalities for adding, viewing, searching, and deleting records. The application uses Angular Material for UI components and JSON server for data storage.

## UI Design
![Project Image](https://github.com/Hardik-Jain-08/Student-Teacher-Data-Portal/blob/master/src/assets/UI/UI.jpeg?raw=true)
![Project Image](https://github.com/Hardik-Jain-08/Student-Teacher-Data-Portal/blob/master/src/assets/UI/addUser.jpeg?raw=true)
![Project Image](https://github.com/Hardik-Jain-08/Student-Teacher-Data-Portal/blob/master/src/assets/UI/card.jpeg?raw=true)
![Project Image](https://github.com/Hardik-Jain-08/Student-Teacher-Data-Portal/blob/master/src/assets/UI/dashboard.jpeg?raw=true)

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npx json-server src/app/db/db.json` to start the JSON server.
4. Run `ng serve` to start the Angular application.
5. Navigate to `http://localhost:4200/` to view the application.

## Features
- Add new student or teacher records.
- View records in a card format.
- Search functionality to filter records.
- Toggle between student and teacher records.
- Delete records with confirmation dialog.
- Responsive design using Angular Material.

## Components
- **Navbar**: Contains the navigation menu and title.
- **Avatar**: Displays user avatar.
- **AddUser**: Form to add new student or teacher records.
- **Dashboard**: Displays the list of records with search and toggle functionality.
- **Card**: Displays individual record details with delete functionality.
- **Dialog**: Confirmation dialog to delete a record.

## Services
- **HttpService**: Handles API calls to the JSON server.

## Pipes
- **SearchPipe**: Filters records based on search input.


## Technologies
- Angular
- Angular Material
- JSON Server
