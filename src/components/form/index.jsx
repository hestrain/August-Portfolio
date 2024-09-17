import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [thanksMessage, setThanksMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
      if(!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      } else {setErrorMessage("")}
      
      
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "body") {
      setBody(inputValue);
    } else if (inputType === "username") {
      setUsername(inputValue);

      if(!body || !subject ||!username ||!email){
        setErrorMessage("All felids required");
      }
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
    if (!subject || !body || !username) {
      setErrorMessage(`Please include a subject, a body, and your name`);
      return;
    }

    // If successful, we want to clear out the input after registration.
    setSubject("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setBody("");
    setEmail("");
    setUsername("");
    setThanksMessage(`Thanks for emailing me, ${username}`)
    // alert(`Thanks for emailing me, ${username}`);
    console.log(`${username} sent an email. 
      Subject: ${subject}
      Body: ${body}
      Reply Address: ${email}`);
    
  };

  const formstyle = {
    margin: "3px",
    width: "100%",
    borderRadius: "9px",
    border: "2px #76E7CD solid",
    fontSize:"medium",
    padding:"15px",
    fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
  }

  const buttonstyle = {
    margin: "3px",
    width: "100%",
    borderRadius: "9px",
    border: "2px #76E7CD solid",
    background: "#9C528B",
    color: "#76E7CD",
    fontWeight: "700",
    fontSize:"large"
  }

  return (
    <div className="container text-center" >
      <p className="thanks-text">{thanksMessage}</p>
      <form className="form"  onSubmit={handleFormSubmit} style={{fontSize:"medium"}}>
      <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          style={formstyle}
        />
        <br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          style={formstyle}
        />
        <br></br>
        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
          style={formstyle}
        />
        <br></br>
        <textarea
          value={body}
          name="body"
          onChange={handleInputChange}
          type="text"
          placeholder="Body"
          style={formstyle}
        />
        <br></br>
        <button type="submit" style={buttonstyle}>Submit</button>
      </form>
      {errorMessage && (
        <div style={{fontSize:"medium"}}> 
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
