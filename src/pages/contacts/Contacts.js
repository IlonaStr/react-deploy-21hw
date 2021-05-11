import React from 'react';
import Contact from './Contact';

let contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends React.Component {
    state = {
        contacts: contacts,
        search: " "
    }
    handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        this.setState({
            search: e.target.value,
            contacts: contacts.filter((contact) => {
                for(const key in contact) {
                    const result = contact[key].toLowerCase().indexOf(inputValue)
                        if(result === 0) {
                            return contact;
                        }
                }
            })
        })
    }
    render() {
        return (
            <section className="contact">
            <div className="header">
              <div className="header-name">
                Contacts
              </div>
              <div className="buttons">
                <input className="button" type="button" value="Edit" onClick={function () { alert("Edit"); }}/>
                <input className="button" type="button" value="Close" onClick={function () { alert("Close"); }}/>
              </div>
            </div>
            <div className="search">
              <input type="search" placeholder="Search" className="search__input" value={this.state.search} onChange={this.handleChange} />
            </div>
            <div className="main"> 
              { this.state.contacts.map(contact => {
                return <Contact { ...contact } />
              })}
            </div>
            <div className="footer">
              <input className="footer-button" type="button" value="New contact" onClick={function () { alert("NEW CONTACT"); }}/>
            </div>
          </section>
        )
    }
}

export default Contacts;