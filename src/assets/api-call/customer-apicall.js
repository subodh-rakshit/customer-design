import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { ListZellerCustomers } from "../graphql/queries";

Amplify.configure(awsconfig);

const listZellerCustomersQuery = ListZellerCustomers;

const customerApiResponse = API.graphql(graphqlOperation(listZellerCustomersQuery))
  .then((response) => {
    return response.data.listZellerCustomers.items;
  })
  .catch((error) => {
    console.error(error);
  });

export default customerApiResponse;
