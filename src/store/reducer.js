import ContactModel from "../Models/ContactModel";

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
  if (action.type === "TOGGLE_FORM") {
    return {
      ...prevState,
      isFormDisplayed: !prevState.isFormDisplayed
    };
  }
  return prevState;
};

export default reducer;
