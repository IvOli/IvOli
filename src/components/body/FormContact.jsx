import React, { useState } from "react";

function FormContact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "name") {
        return {
          name: value,
          email: prevValue.email,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      } else if (name === "email") {
        return {
          name: prevValue.name,
          email: value,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      } else if (name === "phone") {
        return {
          name: prevValue.name,
          email: prevValue.email,
          phone: value,
          message: prevValue.message,
        };
      } else if (name === "message") {
        return {
          name: prevValue.name,
          email: prevValue.email,
          phone: prevValue.phone,
          message: value,
        };
    }
    });
  }
  function sendEmail(e){
    e.preventDefault()
    console.log(contact.name)
    console.log(contact.email)
    console.log(contact.phone)
    console.log(contact.message)

    alert(`Muchas gracias ${contact.name} tu correo a sido enviado`)
    
  }
  return (
    <div className="container">

      {/* <h1>
        Hello {contact.fName} {contact.lName}
      </h1> */}
      <div id="contact"></div>
      <h3>CONTACT</h3>
      {/* <p>{contact.email}</p> */}
      <form>
        <input
          onChange={handleChange}
          value={contact.name}
          name="name"
          placeholder="Enter your name *"
          required
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Enter your email *"
          required
        />
        <input
          onChange={handleChange}
          value={contact.phone}
          name="phone"
          placeholder="Phone Number"
        />
        <textarea
          onChange={handleChange}
          value={contact.message}
          name="message"
          placeholder="Your message *"
          className="message"
          required
        />
        <button className="submit"  onClick={sendEmail}>Submit</button>
      </form>
      {/* <p>{`Muchas gracias ${contact.name} tu correo a sido enviado`}</p> */}
    </div>
  );
}

export default FormContact;
