import ContactForm from "./form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li> Email: hestrain@gmail.com</li>
        <li> Github here</li>
        <li> LinkedIn here</li>
        <li> somethign else idk lol</li>
      </ul>
      <ContactForm />
    </div>
  );
}
