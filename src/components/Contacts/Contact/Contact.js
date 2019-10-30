import React from "react";

const Contact = (props) => {
  return (
    <div onClick={()=>props.displayContactInfo(props.id)} className="contact" id={props.id}>
      <h1 className="pname">{props.name}</h1>
      <p className="pemail">{props.email}</p>
      <p className="pmobile">{props.mobile}</p>
    </div>
  );
};

export default Contact;
