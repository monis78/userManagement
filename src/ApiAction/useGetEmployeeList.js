import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EMPLOYEE_LIST_URL = "https://dummy.restapiexample.com/api/v1/employees"

export const useGetEmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeListLoading, setEmployeeListLoading] = useState(false);
  const [employeeListError, setEmployeeListError] = useState({ isError: false, message: '' });

  useEffect(() => {
    setEmployeeListLoading(true);
    axios
      .get(EMPLOYEE_LIST_URL)
      .then((employeeData) => {
        console.log(employeeData);
        setEmployeeList(employeeData.data.data);
      })
      .catch((error) => {
        console.error('Error Loading Employee data');
        console.log(error);
        setEmployeeListError({ isError: true, message: error.response?.data?.message });
      })
      .finally(() => {
        setEmployeeListLoading(false);
      });
  }, []);
  return {
    employeeList,
    employeeListLoading,
    employeeListError,
  };
};
