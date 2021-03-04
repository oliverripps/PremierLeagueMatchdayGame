import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const Scoreboard = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    predictions: ""
  });


  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <div>
        <h1>HOT CHEESE LEAGUE </h1>
      </div>
    </div>
  );
};

export default Scoreboard;
