import ContactModel from "../Models/ContactModel";
import * as actionTypes from "./actions";

const intialState = {
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

const reducer = (prevState = intialState, action) => {
  if (action.type === actionTypes.TOGGLE_FORM) {
    return {
      ...prevState,
      isFormDisplayed: !prevState.isFormDisplayed
    };
  }
  if (action.type === actionTypes.ADD_CONTACT) {
    return{
        ...prevState,
        contactSelected: null,
        isFormDisplayed: !prevState.isFormDisplayed
    }
  }
  if (action.type === actionTypes.EDIT_CONTACT) {
    return{
        ...prevState,
        isFormDisplayed: !prevState.isFormDisplayed
    }
  }
  if (action.type === actionTypes.ADD_EDIT_CONTACT) {
    let contacts = prevState.contacts;
    let contact = action.payload;
    let existingContact = contacts.find(
      x => x.id === prevState.contactSelected
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
    return{
        ...prevState,
        contacts : contacts,
        isFormDisplayed: !prevState.isFormDisplayed
    }
  }
  if (action.type === actionTypes.DELETE_CONTACT) {
    let contacts = prevState.contacts;
    const contact = contacts.find(x => x.id === action.payload);
    contacts.pop(contact);
    
    //this.toggleContactInfo(null);
    //alert("contact has been deleted");
    return{
        ...prevState,
        contacts: contacts
    }
  }
  if (action.type === actionTypes.TOGGLE_CONTACT_INFO) {
    let shouldDisplayCntctInfo = true;
    if (action.id === prevState.contactSelected && prevState.isContactInfo) {
      shouldDisplayCntctInfo = false;
    }
    return{
        ...prevState,
        isContactInfo : shouldDisplayCntctInfo,
        contactSelected : action.id
    }
  }
  return prevState;
};

export default reducer;
