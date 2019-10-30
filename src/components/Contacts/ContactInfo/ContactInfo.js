import React from 'react'

const ContactInfo = (props) => {
    return (
        <div className="contact-info">
        <div className="contact-container">
          <div className="display-contact">
            <h1 id="display-name">{props.name}</h1>
            <p id="display-email">{props.email}</p>
            <div>
              <p id="display-phone">{props.mobile}</p>
              <p id="display-landline">{props.landline}</p>
            </div>
            <p id="display-website">{props.website}</p>
            <p id="display-address">{props.address}</p>
          </div>
          <div className="icons" >
            <div id="edit" onClick={props.edit}>
              <img id="image-1" src="Edit-icon.png" alt="edit"/><span>EDIT</span>
            </div>
            <div id="delete" onClick = {props.delete}>
              <img id="image-2" src="delete1.png" alt="delete"/><span>DELETE</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactInfo
