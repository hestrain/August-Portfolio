import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "body") {
      setBody(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!subject || !body) {
      setErrorMessage(`Please include both a subject and a body`);
      return;
    }

    // If successful, we want to clear out the input after registration.
    setSubject("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setBody("");
    setEmail("");
    alert(`Thanks for emailing me, ${email}`);
  };

  return (
    <div className="container text-center">
      <h4>Contact me directly {email}</h4>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />{" "}
        <br></br>
        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="subject"
        />{" "}
        <br></br>
        <textarea
          value={body}
          name="body"
          onChange={handleInputChange}
          type="text"
          placeholder="body"
        />{" "}
        <br></br>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;