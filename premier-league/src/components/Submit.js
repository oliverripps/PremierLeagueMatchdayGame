import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const Submit = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    predictions: ""
  });
  let submitted = false;


  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    submitted = true;
  };


  if (submitted) {
    return (
      <div>
      <p> Thanks for submitting! </p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h1>Score Prediction Submission Form </h1>
      </div>
      <form autoComplete="off">
        <TextField
          required
          variant="outlined"
          label="Username"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          required
          variant="outlined"
          label="Password"
          name="password"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          variant="outlined"
          label="Predicitons"
          name="predictions"
          onChange={handleInputChange}
        />
        <br />
        <Button
          onClick={(event) => {
            handleFormSubmit(event);
          }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Submit;
