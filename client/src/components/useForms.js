import React from "react";

const useForms = (initialFormValues) => {
  const [values, setValues] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return { values, setValues, handleInputChange, errors, setErrors };
};

export default useForms;
