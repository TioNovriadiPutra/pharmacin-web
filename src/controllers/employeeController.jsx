import { queryClient } from "config/query";
import { addEmployeeForm } from "constants/form";
import { showToast } from "helpers/toast";
import useEmployeeModel from "models/employeeModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addEmployee, deleteEmployee, getEmployeeDetail, updateEmployee } from "services/employee";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";

const useEmployeeController = () => {
  const { useGetEmployees } = useEmployeeModel();

  // GET - Get Clinic Employees Account - Access : Admin
  const useQueryGetEmployees = () => {
    const { data, isLoading, isError, error } = useGetEmployees();

    const tableData = {
      header: ["Email", "Nama", "Jenis Kelamin", "Handphone", "Alamat", "Tindakan"],
      table: [],
    };

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.response.data.error.message);
      } else {
        Object.assign(tableData, {
          table: data.data.map((item) => {
            const data = [item.email, item.full_name, item.gender, item.phone, item.address];

            return {
              id: item.id,
              data,
              withAction: [
                {
                  type: "edit",
                  onClick: (id) => getEmployeeUpdateFormMutation.mutate(id),
                },
                {
                  type: "delete",
                  onClick: (id) => {
                    setRecoil(showConfirmationModalState, true);
                    setRecoil(deleteDataState, {
                      onApprove: () => deleteEmployeeMutation.mutate(id),
                    });
                  },
                },
              ],
            };
          }),
        });

        Object.assign(addEmployeeForm, {
          submitButton: {
            ...addEmployeeForm.submitButton,
            onClick: (data) => addEmployeeMutation.mutate({ ...data, gender: data.gender ? data.gender.value : null }),
          },
        });
      }
    }

    return {
      tableData,
      isLoading,
    };
  };

  // GET - Get Employee Update Form Data - Access : Admin
  const getEmployeeUpdateFormMutation = useMutation(getEmployeeDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response, id) => {
      const formData = { ...addEmployeeForm };

      Object.assign(formData, {
        title: "Edit Karyawan",
        inputs: formData.inputs.filter((input) => input.name !== "email" && input.name !== "password" && input.name !== "password_confirmation"),
        defaultValues: {
          fullName: response.data.full_name,
          gender: response.data.gender,
          phone: response.data.phone,
          address: response.data.address,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
          onClick: (data) =>
            updateEmployeeMutation.mutate({
              id,
              data: {
                ...data,
                gender: data.gender ? data.gender.value : null,
              },
            }),
        },
      });

      setRecoil(formModalDataState, formData);
      setRecoil(showFormModalState, true);
    },
    onError: (error) => {
      showToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // POST - Register New Employee Account - Access : Admin
  const addEmployeeMutation = useMutation(addEmployee, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getEmployees"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        showToast("failed", error.error.message);
        setRecoil(formModalDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // PUT - Update Employee Account Data - Access : Admin
  const updateEmployeeMutation = useMutation(updateEmployee, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getEmployees"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        showToast("failed", error.error.message);
        setRecoil(formModalDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // DELETE - Delete Employee Account - Access : Admin
  const deleteEmployeeMutation = useMutation(deleteEmployee, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getEmployees"] });
    },
    onError: (error) => {
      showToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(deleteDataState, null);
      setRecoil(showConfirmationModalState, false);
    },
  });

  return {
    useQueryGetEmployees,
  };
};

export default useEmployeeController;
