# Approach and Setup Guidelines

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). \
Also for styling and Responsiveness, TailwindCSS is used which can be installed by going into `https://tailwindcss.com/docs/installation` website and following the steps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Technologies Used

The whole application is built with ReactJS for functionality and TailwindCSS for the styling and making it responsive.

## Folder Structure

### `src/assets`

This folder provides all the necessary files which needs to be used in our application

### `src/components`

As the project is in a single page, all the components are available in this location.

### `AWS Configuration`

In `src/assets` folder we can find a file called `aws-exports.js` which has the configuration for aws for the api used.

### `GraphQL Queries`

In `src/assets/graphql` folder we can find a file called queries.ts which contain the query associated with the api for retrieving the data from it.

### `API Call`

In this application, only one API call is generated and hence the file to retrieve the values is associated in `src/api/customer-apicall.js`.

## Code Flow and Logic of Implementation

`src/index.js` will be the starting point of the program which will eventually render the users page.
`src/components/display-users.tsx` contains the logic and the render functions.

### `Code Flow`

`userType` -> Tracking the state of the user type the whole component. \
`dataFromCustomerApi` -> Tracking the data from the api (Primary state for mapping purpose also). \
`dataFromCustomerApiClone` -> State for filtering the data in our application. \
`fetchCustomers` -> Function to retrieve the data from the api in the initial load. \
`filterData` -> Function to filter the data based on user type in our whole application.

* At the starting point when the page loads up it triggers the `fetchCustomers` method and also fetches the data from the api which is accomplished using the useEffect hook in React.
* Till the data is fetched it will show `Loading...`
* After fetching the data, it'll be set into a state and then filtered based on the type of user selected.
* Selection of the user type is achieved by two-way conditional rendering of the values.
* Whenever userType state is changed then `filterData` method is called and the data is filtered based on the userType choosen by the user.
* Deployment of the application is done with the help of `Github Pages` which can be easily seen by going into `https://create-react-app.dev/docs/deployment/` link.
