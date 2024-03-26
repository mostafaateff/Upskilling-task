import axios from "axios";
import { useFormik } from "formik";
import React from "react";

export default function Contact() {

  async function sendData(reqBody) {
    let { data } = await axios.post('http://upskilling-egypt.com:3001/contact', reqBody)
    console.log(data);
  }

  const mailForm = useFormik({
    initialValues: {
      email : '',
      phone: '', 
      name : '',
    },
    onSubmit:sendData
  })

  return (
    <div className="contact " style={{ height: "538px" }}>
      <div
        className="contact-title mx-auto   "
        style={{ width: "496px", height: "122px" }}
      >
        <div className="contact-lines d-flex justify-content-between">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <p>Contact Us</p>
        <div className="bottom-contact-lines d-flex justify-content-between">
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
      <div
        className="contact-form mx-auto d-flex justify-content-between align-items-center"
        style={{ width: "657px", height: "266px" }}
      >
        <div
          className="form-inputs"
          style={{ width: "374px", height: "266px" }}
        >
          <form onSubmit={mailForm.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={mailForm.values.name}
              onChange={mailForm.handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={mailForm.values.email}
              onChange={mailForm.handleChange}
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={mailForm.values.phone}
              onChange={mailForm.handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div
          className="form-data d-flex flex-column justify-content-between"
          style={{ width: "186px", height: "78px" }}
        >
          <div
            className="data-email d-flex justify-content-between"
            style={{ width: "186px", height: "24px" }}
          >
            <div
              className="email-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div
              className="email-text"
              style={{ width: "142px", height: "18px" }}
            >
              <p>upskilling.eg1@gmail.com</p>
            </div>
          </div>
          <div
            className="data-phone d-flex justify-content-between"
            style={{ width: "148", height: "24px" }}
          >
            <div
              className="phone-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <i class="fa-solid fa-phone"></i>
            </div>
            <div
              className="phone-text"
              style={{ width: "104px", height: "18px" }}
            >
              <p>+20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
