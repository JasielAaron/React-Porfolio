import { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {

    const { name, value } = e.target;


    return name === 'name' ? setFullName(value) : setEmail(value); setMessage(value);
 };

 const handleFormSubmit = e => {
  e.preventDefault();
  setName('');
  setEmail('');
  setMessage('');
 };

 return (
    <div className="container mb-5">
      <h1 className="mt-4">Contact</h1>
      <h2>Contact Me:</h2>
     <div className="container "> 
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="container">
        <input 
      value={fullName}
      name="fullName"
      onChange={handleInputChange}
      type="text" 
      placeholder="Name"
      className="form-control"
      />
       </div>
      <div className="container">
      <input 
      value={email}
      name="email"
      onChange={handleInputChange}
      type="text" 
      placeholder="Email"
      className="form-control"
      />
      </div>
     <div className="container">
     <textarea
      value={message}
      name="message"
      onChange={handleFormSubmit}
      type="text" 
      placeholder="Message me"
      className="form-control"
      />

     </div>
     <div className="container">
     <button 
      className="btn btn-outline-secondary">
        Submit
      </button>

     </div>
     
      
     <div>
      </div> 
     </form>
      </div>
    </div>
  );
}

export default Contact
