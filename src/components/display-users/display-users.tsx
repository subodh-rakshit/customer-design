import React, { useEffect, useState } from "react";
import customerApiResponse from "../../assets/api-call/customer-apicall";

const DisplayUsers = () => {
  const [userType, setUserType] = useState("Admin");
  const [dataFromCustomerApi, setDataFromCustomerApi] = useState([]);

  const fetchCustomers = async () => {
    const response = await customerApiResponse;
    setDataFromCustomerApi(response);
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
            checked={userType === "Admin"}
            onChange={() => setUserType("Admin")}
          />
          <p>Admin</p>
        </li>
        <li className="flex flex-row">
          <input
            type="radio"
            checked={userType === "Manager"}
            onChange={() => setUserType("Manager")}
          />
          <p>Manager</p>
        </li>
      </ul>
      <div>Admin Users</div>
      <div className="flex flex-row">
        <p>J</p>
        <div>
          <p>John Smith</p>
          <p>Admin</p>
        </div>
      </div>
    </>
  );
};

export default DisplayUsers;
