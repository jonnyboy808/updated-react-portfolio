import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

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
    <section className="sections contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={submit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={input}/>
        </div>

        <div>
          <label>Email Address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={input}/>
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" rows="6" defaultValue={message} onBlur={input}/>
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>)}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
