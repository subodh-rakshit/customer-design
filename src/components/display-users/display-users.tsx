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
      <div className="mt-10 mx-10 mb-5 font-medium text-2xl">
        User Types
      </div>
      <ul className="mx-10">
        <li
          className={`flex flex-row ${
            userType === "ADMIN" && "bg-light_blue_background"
          } rounded-lg`}
        >
          <input
            type="radio"
            checked={userType === "ADMIN"}
            className="ml-4"
            onChange={() => {
              setUserType("ADMIN");
              filterData(dataFromCustomerApiClone, "ADMIN");
            }}
          />
          <p className="p-4">Admin</p>
        </li>
        <li
          className={`flex flex-row ${
            userType === "MANAGER" && "bg-light_blue_background"
          } rounded-lg`}
        >
          <input
            type="radio"
            checked={userType === "MANAGER"}
            className="ml-4"
            onChange={() => {
              setUserType("MANAGER");
              filterData(dataFromCustomerApiClone, "MANAGER");
            }}
          />
          <p className="p-4">Manager</p>
        </li>
        <br />
        <br />
        <hr className="text-horizontal_line" />
      </ul>
      <div className="mt-10 mx-10 mb-5 font-medium text-2xl">
        Admin Users
      </div>
      {dataFromCustomerApi.length === 0 ? (
        <p className="flex items-center justify-center font-medium text-xl">
          Loading...
        </p>
      ) : (
        dataFromCustomerApi.map((values, index) => {
          return (
            <>
              <div className="flex flex-row mx-10 my-5">
                <p className="flex bg-light_blue_background items-center p-4 mr-4 rounded-lg text-single_character">
                  {values.name.substring(0, 1).toUpperCase()}
                </p>
                <div className="flex flex-col justify-center">
                  <p className="text-xl">{values.name}</p>
                  <p className="text-user_type">
                    {values.role.substring(0, 1).toUpperCase() +
                      values.role
                        .substring(1, values.role.length)
                        .toLowerCase()}
                  </p>
                </div>
              </div>
            </>
          );
        })
      )}
      <br />
      {dataFromCustomerApi.length !== 0 && <hr className="mr-10 ml-10 text-horizontal_line" />}
    </>
  );
};

export default DisplayUsers;
