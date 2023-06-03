import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

//used guidance from unit 19 Module 16 'react forms'
function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = form;

  // validates email input, else error message
  function input(e) {
    if (e.target.name === "email") {
      const validate = validateEmail(e.target.value);
      console.log(validate);
      if (!validate) {
        setErrorMessage("Email format is invalid.");
      } else {
        setErrorMessage("");
      }
      // validates name & message input, else error message
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  // console logs form input
  function submit(e) {
    e.preventDefault();
    console.log(form);
  }
  // input box
  return (
    <section class="sections contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={submit}>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-basic"
              name="name"
              label="Name"
              variant="outlined"
              defaultValue={name}
              onBlur={input}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              defaultValue={email}
              onBlur={input}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              name="message"
              multiline
              rows={4}
              defaultValue={message}
              onBlur={input}
            />
          </Box>
        </div>
        {errorMessage && (
          <div>
            <p class="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
