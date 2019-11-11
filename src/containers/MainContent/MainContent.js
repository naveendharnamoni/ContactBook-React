import React, { Component, Fragment } from "react";
import Contacts from "../../components/Contacts/Contacts";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/Contacts/ContactInfo/ContactInfo";
import ContactModel from "../../Models/ContactModel";
import Navbar from "../../components/Navbar/Navbar";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class MainContent extends Component {

  selectedContact() {
    return this.props.contacts.find(x => x.id === this.props.contactSelected);
  }

  render() {
    return (
      <Fragment>
        <Navbar clicked={this.props.addContact}></Navbar>
        <h2 className="cntct-heading">Contacts</h2>
        <div className="container">
          <Contacts
            contacts={this.props.contacts}
            displayContactInfo={this.props.toggleContactInfo}
          ></Contacts>
          {this.props.isFormDisplayed ? (
            <ContactForm
              toggleForm={this.props.toggleContactForm}
              addContact={this.props.addOrEditContact}
              {...this.selectedContact()}
            ></ContactForm>
          ) : null}
          {this.props.isContactInfo ? (
            <ContactInfo
              {...this.selectedContact()}
              delete={this.props.deleteContact}
              edit={this.props.editContact}
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
    toggleContactForm : () => dispatch({type: actionTypes.TOGGLE_FORM}),
    addContact : () => dispatch({type: actionTypes.ADD_CONTACT}),
    editContact : () => dispatch({type: actionTypes.EDIT_CONTACT}),
    addOrEditContact : (contact) => dispatch({type: actionTypes.ADD_EDIT_CONTACT,payload:contact}),
    deleteContact : (id) => dispatch({type: actionTypes.DELETE_CONTACT,payload:id}),
    toggleContactInfo : (id) => dispatch({type: actionTypes.TOGGLE_CONTACT_INFO,id:id}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);