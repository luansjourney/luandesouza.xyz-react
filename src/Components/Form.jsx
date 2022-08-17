
import emailjs from "emailjs-com";
import data from "../data"; //It is an object with the 3 variables (service, template and user id) needed to use emailjs
import toast, {Toaster} from "react-hot-toast";

function Form() {

   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(data.serviceId, data.templateId, e.target, data.userId).then((result) =>{
      toast.success("Email sent!");
 ;   }, (error) => {
  toast.error(error.text);
 });
    e.target.reset();
   }

  return (
      <div className="form-container">
        <Toaster />
        <div className="h1-box"><h1>Contact me</h1></div>
        <form onSubmit={sendEmail}>
          <div className="form-input name">
            <input type="text" placeholder="Name" name="name" required/>
          </div>          
          <div className="form-input email">
            <input type="email" placeholder="Email Address" name="email" required/>
            </div>          
          <div className="form-input subject">
            <input type="text" placeholder="Subject" name="subject" required />
          </div>          
          <div className="form-input message">
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your message" required>
            </textarea></div>
          <div className="btn-box">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>          
        </form>
      </div>
  )
}

export default Form