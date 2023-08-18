import React, { useState } from 'react';
import { useGetEmployeeList } from '../ApiAction/useGetEmployeeList';

const MAX_CONTENT_PER_PAGE = 5
const Employee = () => {
  const [pageNo, setPageNo] = useState(0);
  const { employeeList, employeeListLoading, employeeListError } = useGetEmployeeList();
  

  if (employeeListError.isError) {
    return <>{employeeListError.message || 'Error displaying data'}</>;
  }
  if (employeeListLoading) {
    return <>Loading Employee Data</>;
  }

  return (
    <div>
      {/* can't map proper data because of api hit limit */}
      {employeeList
        .slice(pageNo * MAX_CONTENT_PER_PAGE, pageNo * MAX_CONTENT_PER_PAGE + MAX_CONTENT_PER_PAGE)
        .map((employeeDetails) => {
          return (
            <tr>
              <td>{employeeDetails.name}</td>
              <td>{employeeDetails.address}</td>
              <td>{employeeDetails.name}</td>
            </tr>
          );
        })}
      <div>
        <span
          onClick={() => {
            if (!pageNo) {
              setPageNo(pageNo - 1);
            }
          }}
        >
          Previous page
        </span>
        <span>{pageNo}</span>
        <span
          onClick={() => {
            // if (!add max limit condition here) {
            setPageNo(pageNo + 1);
            // }
          }}
        >
          Next page
        </span>
      </div>
    </div>
  );
};

export default Employee;
