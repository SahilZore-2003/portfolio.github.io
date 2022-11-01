import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    const data ={
      Name:name,
      Email:email,
      Number:number,
      Message:message
    }
      axios.post('https://sheet.best/api/sheets/b45b3777-9954-43cd-a0fd-de023dd0b83b',data).then((response)=>{
        console.log(response);
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
  })
  }
   

  return (
    <>
      <div className="container my-4 col-md-6 mx-auto">
        <form name="google-sheet" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Enter your name
            </label>
            <input
              type="name"
              class="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setName(e.target.value)} value={name}
              required
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)} value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Mobile number
            </label>
            <input
              type="number"
              className="form-control"
              name="number"
              id="exampleInputPassword1"
              onChange={(e)=>setNumber(e.target.value)} value={number}
              required
            />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="message"
              onChange={(e)=>setMessage(e.target.value)} value={message}
            ></textarea>
            <label htmlFor="floatingTextarea">message</label>
          </div>

          <button type="submit" class="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
