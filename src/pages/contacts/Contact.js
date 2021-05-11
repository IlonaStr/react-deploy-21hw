import React from 'react';

function Contact (contact) {
    return (
        <div className="contact-person">
            <div className="contact-person_name">
                {contact.firstName + " " + contact.lastName}
            </div>
            <div className="contact-person_data">
                <div className="contact-person_number">
                    <a href={"number:" + contact.phone}>{contact.phone}</a>
                </div>
                <div className="contact-person_gender">
                    {contact.gender}
                </div>
            </div>
        </div>
    )
}

export default Contact;