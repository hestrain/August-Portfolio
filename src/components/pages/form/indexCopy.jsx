import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers";


const Form2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
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
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
    alert(`Thanks for emailing me, ${username}`);
    console.log(`${username} sent an email. 
      Subject: ${subject}
      Body: ${body}
      Reply Address: ${email}`);
  };
  return (
    <form onSubmit={sendEmail}>
            <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="your name"
          style={formstyle}
        />
        <br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          style={formstyle}
        />
        <br></br>
        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="subject"
          style={formstyle}
        />
        <br></br>
        <textarea
          value={body}
          name="body"
          onChange={handleInputChange}
          type="text"
          placeholder="body"
          style={formstyle}
        />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default Form2;