import ContactList from './ContactList/ContactList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Modal from './Modal/Modal';
// import Contact from './Contact/Contact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
    // showModal: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    // console.log('parsedContacts', parsedContacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // toggleModal = () => {
  //   this.setState(prevState => ({
  //     showModal: !prevState.showModal,
  //   }));
  // };

  addContact = dataByForm => {
    console.log(dataByForm);

    const isExist = this.state.contacts.find(el => el.name === dataByForm.name);
    if (isExist)
      return Notify.failure(`${dataByForm.name} is already in contacts`);
    const newContact = {
      id: nanoid(),
      name: dataByForm.name,
      number: dataByForm.number,
    };
    // console.log(newContact);

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findByFilted = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  render() {
    const { contacts } = this.state;
    // const { showModal } = this.state;
    const { filter } = this.state;
    const { addContact, findByFilted, deleteContact } = this;
    const enableContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        {/* <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1 style={{ textAlign: 'center' }}>ДЗ №3 частина один</h1>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )} */}
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={findByFilted} />
        <ContactList
          contacts={enableContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
