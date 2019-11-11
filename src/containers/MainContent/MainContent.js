import React, { Component, Fragment } from "react";
import Contacts from "../../components/Contacts/Contacts";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/Contacts/ContactInfo/ContactInfo";
import ContactModel from "../../Models/ContactModel";
import Navbar from "../../components/Navbar/Navbar";
import {connect} from 'react-redux';

class MainContent extends Component {
  state = {
    contacts: [
      new ContactModel({
        id: 1,
        name: "naveen",
        email: "naveen@gmail.com",
        mobile: 9533466343,
        landline: "040 ",
        website: "nav.com",
        address: "shantinagar"
      })
    ],
    isContactInfo: false,
    isFormDisplayed: false,
    contactSelected: null
  };

  toggleContactForm = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed
    });
  };

  toggleContactInfo = id => {
    let shouldDisplayCntctInfo = true;
    if (id === this.state.contactSelected && this.state.isContactInfo) {
      shouldDisplayCntctInfo = false;
    }
    this.setState({
      isContactInfo: shouldDisplayCntctInfo,
      contactSelected: id
    });
  };

  selectedContact() {
    return this.state.contacts.find(x => x.id === this.state.contactSelected);
  }

  addOrEditContact = contact => {
    let contacts = this.state.contacts;
    let existingContact = contacts.find(
      x => x.id === this.state.contactSelected
    );
    if (existingContact) {
      existingContact.name = contact.name;
      existingContact.email = contact.email;
      existingContact.mobile = contact.mobile;
      existingContact.landline = contact.landline;
      existingContact.address = contact.address;
    } else {
      contact.id = contacts.length + 1;
      contacts.push(contact);
    }
    this.setState({
      contacts: contacts
    });
    this.toggleContactForm();
  };

  deleteContact = id => {
    let contacts = [...this.state.contacts];
    const contact = contacts.find(x => x.id === id);
    contacts.pop(contact);
    this.setState({
      contacts: contacts
    });
    this.toggleContactInfo(null);
    alert("contact has been deleted");

    // if (confirm("Do you want to delete")) {

    // }
  };

  editContact = () => {
    this.toggleContactForm();
  };
  addContact = () => {
    this.setState({
      contactSelected: null
    });
    this.props.toggleContactForm();
  };

  render() {
    return (
      <Fragment>
        <Navbar clicked={this.addContact}></Navbar>
        <h2 className="cntct-heading">Contacts</h2>
        <div className="container">
          <Contacts
            contacts={this.props.contacts}
            displayContactInfo={this.toggleContactInfo}
          ></Contacts>
          {this.props.isFormDisplayed ? (
            <ContactForm
              toggleForm={this.props.toggleContactForm}
              addContact={this.addOrEditContact}
              {...this.selectedContact()}
            ></ContactForm>
          ) : null}
          {this.state.isContactInfo ? (
            <ContactInfo
              {...this.selectedContact()}
              delete={this.deleteContact}
              edit={this.editContact}
            ></ContactInfo>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts : state.contacts,
    isContactInfo : state.isContactInfo,
    isFormDisplayed : state.isFormDisplayed,
    contactSelected : state.contactSelected
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    toggleContactForm : () => dispatch({type: "TOGGLE_FORM"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);