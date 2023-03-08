import React, { useEffect, useState } from "react";
import customerApiResponse from "../../assets/api-call/customer-apicall";

type DisplayUserType = {
  email: string;
  id: string;
  name: string;
  role: string;
};
const DisplayUsers = () => {
  const [userType, setUserType] = useState<string>("ADMIN");
  const [dataFromCustomerApi, setDataFromCustomerApi] = useState<
    DisplayUserType[]
  >([]);
  const [dataFromCustomerApiClone, setDataFromCustomerApiClone] = useState<
    DisplayUserType[]
  >([]);

  const fetchCustomers = async () => {
    const responseFromCustomerApi = await customerApiResponse;
    setDataFromCustomerApiClone(responseFromCustomerApi);
    filterData(responseFromCustomerApi, "ADMIN");
  };

  const filterData = (customerData: DisplayUserType[], user: string) => {
    const filteredDataUserType = customerData.filter((values) => {
      return values.role === user;
    });
    setDataFromCustomerApi(filteredDataUserType);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  console.log(dataFromCustomerApi);

  return (
    <>
      <div>User Types</div>
      <ul>
        <li className="flex flex-row">
          <input
            type="radio"
            checked={userType === "ADMIN"}
            onChange={() => {
              setUserType("ADMIN");
              filterData(dataFromCustomerApiClone, "ADMIN");
            }}
          />
          <p>Admin</p>
        </li>
        <li className="flex flex-row">
          <input
            type="radio"
            checked={userType === "MANAGER"}
            onChange={() => {
              setUserType("MANAGER");
              filterData(dataFromCustomerApiClone, "MANAGER");
            }}
          />
          <p>Manager</p>
        </li>
      </ul>
      <div>Admin Users</div>
      {dataFromCustomerApi.map((values, index) => {
        return (
          <>
            <div className="flex flex-row">
              <p>{values.name.substring(0,1).toUpperCase()}</p>
              <div>
                <p>{values.name}</p>
                <p>
                  {values.role.substring(0, 1).toUpperCase() +
                    values.role.substring(1, values.role.length).toLowerCase()}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default DisplayUsers;
