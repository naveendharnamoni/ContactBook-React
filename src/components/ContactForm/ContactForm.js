import React, { Component } from "react";

class ContactForm extends Component {
  
  state = {
    fields:{
      name: {
        value:  "",
        valid:false
      },
      email: {
        value:"",
        valid:false
      },
      mobile: {
        value:"",
        valid:false
      },
      landline: {
        value:"",
        valid:false
      },
      website: {
        value:"",
        valid:false
      },
      address: {
        value:"",
        valid:false
      }
    }
  };

  validate = () =>{
    let valid = true;
    for(let fieldIdentifier in this.state.fields ){
      valid = this.state.fields[fieldIdentifier].valid && valid;
     
    }
    return valid;
  
  }

  isValid(value) {
    if(value.trim()){
        return true; 
    }
    return false;
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      fields:{
        ...this.state.fields,
        [name]:{
          value : value,
          valid : this.isValid(value)
        }
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let contact = {};
    for(let elementId in this.state.fields){
      contact[elementId] = this.state.fields[elementId].value;
    }

    console.log(contact)
    if(this.validate()){
      this.props.addContact(contact);
      return true;
    }
    return false;
  }


  render() {
    return (
      <div id="overlay">
        <div className="popup-container">
          <form id="addContactForm" onSubmit={this.handleSubmit}>
            <div className="block">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                onChange={this.handleInputChange}
                // value= {this.state.fields.name}
              />
              <span id="nameRequired">{this.state.fields.name.valid === false ? "name is required" : null}</span>
            </div>
            <div className="block">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
               // value = {this.state.fields.email}
                onChange={this.handleInputChange}
              />
              <span id="emailRequired">{this.state.fields.email.valid === false ? "email is required" : null}</span>
            </div>
            <div className="content">
              <div className="list-content">
                <label for="mobile">Mobile</label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  placeholder="Your mobile.."
                 // value = {this.state.fields.mobile}
                  onChange={this.handleInputChange}
                />
                <span id="mobileRequired">{this.state.fields.mobile.valid === false ? "mobile is required" : null}</span>
              </div>
              <div className="list-content">
                <label for="landline">Landline</label>
                <input
                  type="number"
                  id="landline"
                  name="landline"
                  placeholder="Your landline.."
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="block">
              <label for="website">website</label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Your website.."
                onChange={this.handleInputChange}
              />
            </div>
            <div className="block">
              <label for="subject">Address</label>
              <textarea
                id="address"
                name="address"
                style={{ height: "200px" }}
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <input onSubmit={this.handleSubmit} id="addContactButton" type="submit" value="Add" />
            <input
              onClick={this.props.toggleForm}
              id="cancel"
              type="button"
              value="Cancel"
            />
            <input type="hidden" name="edit" id="checkEdit" value="false" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
