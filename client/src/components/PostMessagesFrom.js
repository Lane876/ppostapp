import React from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import useForms from "./useForms";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
      // width: 200,
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const initialFormValues = {
  title: "",
  message: "",
};

const PostMessagesFrom = () => {
  const classes = useStyles();

  const { values, setValues, handleInputChange, errors, setErrors } = useForms(
    initialFormValues
  );

  function validate() {
    const error = { ...errors };
    error.title = values.title ? "" : "This field is required";
    error.message = values.message ? "" : "This field is required";
    setErrors({
      ...error,
    });
    return Object.values(error).every((x) => x === "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      window.alert("Validation succeeded");
    }
    setValues(initialFormValues);
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })}
      />

      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        value={values.message}
        multiline
        rows={4}
        onChange={handleInputChange}
        {...(errors.message && { error: true, helperText: errors.message })}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

export default PostMessagesFrom;
