import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import axios from 'axios'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sok8e88",
        "template_hpjke5x",
        form.current,
        "E-9bLDfRaR3ndrTQm"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.traget.reset();
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
    // lineNotify();
  };

  const lineNotify = (text = '') => {
    // axios.post('http://localhost:3000/api/send_line', {
      axios.post('/api/send_line', {
      text: `\n${form.current.name.value}\n${form.current.email.value}\n${form.current.message.value}`
    }).then(function (res) {
      
    });
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__cotainer">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pranudech@gmail.com</h5>
            <a href="mailto:pranudech@gmail.com">Send a massage</a>
          </article>

          <article className="contact__option">
            <GoComment className="contact__option-icon" />
            <h4>Line</h4>
            <h5>pranudech</h5>
            <a href="mailto:pranudech@gmail.com">Send a massage</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+66815303648</h5>
            <a href="tel:0815303648">Call</a>
          </article>
        </div>

        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            row="7"
            placeholder="Your Message"
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
