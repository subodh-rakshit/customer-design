import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { ListZellerCustomers } from "../graphql/queries";

// Configuring the aws configuration file
Amplify.configure(awsconfig);

// Fetching the query from which the data needs to be fetched
const listZellerCustomersQuery = ListZellerCustomers;

// Calling the endpoint for the api 
const customerApiResponse = API.graphql(graphqlOperation(listZellerCustomersQuery))
  .then((response) => {
    return response.data.listZellerCustomers.items;
  })
  .catch((error) => {
    console.error(error);
  });

export default customerApiResponse;
