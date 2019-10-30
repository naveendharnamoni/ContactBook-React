import React from 'react';
import Contact from './Contact/Contact'

const Contacts = (props) => {
    const contacts = props.contacts.map(contact => {
        return <Contact key = {contact.id} {...contact} displayContactInfo = {props.displayContactInfo} ></Contact>
    })

    return (
        <div className="contacts">
            {contacts}
        </div>
    )
}

export default Contacts
