import Inputs from './Inputs';
import Buttons from './Buttons';

function ContactContent() {
  return (
    <div className="contact">
      <div className="contact-header">
        <p>Get In Touch With Us</p>
      </div>
      <div className="contact-contents">
        <div className="contact-content">
          <div>
            <p className="contact-label">Phone Number</p>
            <p className="contact-value">0012334566</p>
          </div>
          <div>
            <p className="contact-label">Email Address</p>
            <p className="contact-value"> johndoe@gmail.com</p>
          </div>
          <div>
            <p className="contact-label">Location</p>
            <p className="contact-value">Lorem Ipsum</p>
          </div>
        </div>
        <div className="contact-right">
          <h1>Send us a message</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipiscing elit. Nulla
            fringilla nunc in
          </p>
          <p> molestie feugiat</p>
          <div className="input-fields">
            <div className="input-field">
              <div>
                <Inputs
                  placeholder="Your Name"
                  type="text"
                  className="contact-input"
                />
              </div>
              <div>
                <Inputs
                  placeholder="Phone Number"
                  type="text"
                  className="contact-input"
                />
              </div>
            </div>
            <div className="input-field">
              <div>
                <Inputs
                  placeholder="Your E-mail"
                  type="email"
                  className="contact-input"
                />
              </div>
              <div>
                <Inputs
                  placeholder="subject"
                  type="text"
                  className="contact-input"
                />
              </div>
            </div>
          </div>
          <textarea placeholder="message" className="message-box" />
          <Buttons className="contact-button">Send Message</Buttons>
        </div>
      </div>
    </div>
  );
}
export default ContactContent;
