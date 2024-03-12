import { useQuery } from "react-query";
import { getEmployees } from "services/employee";

const useEmployeeModel = () => {
  const useGetEmployees = () => {
    return useQuery({ queryKey: ["getEmployees"], queryFn: () => getEmployees() });
  };

  return {
    useGetEmployees,
  };
};

export default useEmployeeModel;
