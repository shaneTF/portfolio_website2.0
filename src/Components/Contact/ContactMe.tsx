import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// const emailRef = useRef<HTMLInputElement>(null);
// const nameRef = useRef<HTMLInputElement>(null);
// const bodyRef = useRef<HTMLInputElement>(null);
// const [loading, setLoading] = useState(false);

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("HCAfAteWw1WcZ8cIU"), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_78nrfog";
    const templateId = "template_jtjglhn";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: bodyRef.current?.value,
      });
      alert("Email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      if (nameRef.current?.value != null) {
        nameRef.current.value = "";
      }
      if (emailRef.current?.value != null) {
        emailRef.current.value = "";
      }
      if (bodyRef.current?.value != null) {
        bodyRef.current.value = "";
      }
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>shanefranklin148@gmail.com</h5>
            <small>Available Anytime!</small>
            <br />
            <a
              href="https://mail.google.com/mail/?view=cm&to=shanefranklin148@gmail.com"
              target="_blank"
            >
              Send Me An Email!
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>317-679-6378</h5>
            <small>Available: 9am - 5pm EST</small>
            <br />
            <a
              href="https://api.whatsapp.com/send?phone=3176796378"
              target="_blank"
            >
              Send Me A Message On Whatsapp!
            </a>
          </article>
          <article className="contact__option">
            <BsTelephone className="contact_option-icon" />
            <h4>Phone</h4>
            <h5>317-679-6378</h5>
            <small>Available: 9am - 5pm EST</small>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">name</label>
            <input ref={nameRef} placeholder="enter your name" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input ref={emailRef} type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input ref={bodyRef} placeholder="Enter your message here" />
          </div>
          <button disabled={loading}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
